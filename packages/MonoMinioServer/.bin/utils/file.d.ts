import * as Minio from 'minio';
export declare const listBuckets: () => Promise<Minio.BucketItemFromList[]>;
export declare const uploadFile2Minio: (file: any) => void;
