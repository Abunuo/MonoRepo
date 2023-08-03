import * as Minio from 'minio';
declare let minioClient: Minio.Client;
export declare const listBuckets: () => Promise<Minio.BucketItemFromList[]>;
export declare const createBucket: (bucket_name: string) => Promise<{
    code: number;
    msg: string;
}>;
export declare const uploadFile2Minio: (file: Express.Multer.File) => Promise<{
    code: number;
    msg: string;
}>;
export default minioClient;
