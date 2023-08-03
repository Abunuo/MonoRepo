"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile2Minio = exports.createBucket = exports.listBuckets = void 0;
const Minio = __importStar(require("minio"));
let minioClient;
const initMinio = () => {
    minioClient = new Minio.Client({
        endPoint: 'localhost',
        port: 9000,
        useSSL: false,
        accessKey: 'cr4WP2kxpdUqPhrL',
        secretKey: '4p9KyezelsAhlM8893rhMmNWTaGCjTv1'
    });
};
const getBucketName = (accept) => {
    switch (accept.split("/")[0]) {
        case "image":
            return "images";
        case "video":
            return "video";
        default:
            return "file";
    }
};
const listBuckets = async () => {
    return await minioClient.listBuckets();
};
exports.listBuckets = listBuckets;
const createBucket = async (bucket_name) => {
    const isExist = await minioClient.bucketExists(bucket_name);
    if (isExist) {
        return {
            code: -1,
            msg: 'bucket is exists'
        };
    }
    try {
        await minioClient.makeBucket(bucket_name);
        return {
            code: 0,
            msg: 'Bucket created successfully in "us-east-1".'
        };
    }
    catch (error) {
        return {
            code: 1,
            msg: 'Error creating bucket.'
        };
    }
};
exports.createBucket = createBucket;
const uploadFile2Minio = async (file) => {
    try {
        const { mimetype, originalname } = file;
        const bucketName = getBucketName(file.mimetype);
        const { code, msg } = await (0, exports.createBucket)(bucketName);
        if (code === 1) {
            return {
                code: -1,
                msg: `Error uploading file, duw to '${msg}'`
            };
        }
        const fileName = Buffer.from(originalname, 'latin1').toString('utf8');
        const metaData = {
            'Content-Type': mimetype,
        };
        await minioClient.putObject(bucketName, fileName, file.buffer, metaData);
        return {
            code: 0,
            msg: "File uploaded successfully"
        };
    }
    catch (error) {
        return {
            code: -1,
            msg: 'Error uploading file'
        };
    }
};
exports.uploadFile2Minio = uploadFile2Minio;
initMinio();
exports.default = minioClient;
