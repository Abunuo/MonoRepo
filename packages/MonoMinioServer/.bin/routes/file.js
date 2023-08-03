"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
const server_1 = require("../utils/server");
const minio_1 = require("../utils/minio");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)();
router.get("/buckges", async (req, res) => {
    const buckets = await (0, minio_1.listBuckets)();
    res.json((0, server_1.formatJSONResponse)({ data: buckets }));
});
router.post("/buckges", async (req, res) => {
    const { bucket_name } = req.body;
    if (!bucket_name) {
        res.json((0, server_1.formatJSONResponse)({ code: -1, msg: 'Invalid bucket name' }));
    }
    const result = await (0, minio_1.createBucket)(bucket_name);
    res.json((0, server_1.formatJSONResponse)(result));
});
router.get("/file/:id", async (req, res) => {
});
router.post("/file", upload.single("file"), async (req, res) => {
    const file = req.file;
    const result = await (0, minio_1.uploadFile2Minio)(file);
    res.json((0, server_1.formatJSONResponse)(result));
});
router.delete("/file/:id", async (req, res) => {
});
exports.default = router;
