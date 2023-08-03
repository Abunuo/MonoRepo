/*
 * @Author: Monologue
 * @Description: 文件操作
 */

import * as Minio from 'minio'
import { uuid } from 'mono-utils'

let minioClient: Minio.Client

const initMinio = () => {
  minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'cr4WP2kxpdUqPhrL',
    secretKey: '4p9KyezelsAhlM8893rhMmNWTaGCjTv1'
  });
}

const getBucketName = (accept: string) => {
  switch (accept.split("/")[0]) {
    case "image":
      return "images"
    case "video":
      return "video"
    default:
      return "file"
  }
}

export const listBuckets = async () => {
  return await minioClient.listBuckets()
}

export const createBucket = async (bucket_name: string) => {
  const isExist = await minioClient.bucketExists(bucket_name)
  if (isExist) {
    return {
      code: -1,
      msg: 'bucket is exists'
    }
  }
  try {
    await minioClient.makeBucket(bucket_name)
    return {
      code: 0,
      msg: 'Bucket created successfully in "us-east-1".'
    }
  } catch (error) {
    return {
      code: 1,
      msg: 'Error creating bucket.'
    }
  }
}

export const uploadFile2Minio = async (file: Express.Multer.File) => {
  try {
    const { mimetype, originalname } = file;
    const bucketName = getBucketName(file.mimetype)
    const { code, msg } = await createBucket(bucketName)
    if(code === 1) {
      return {
        code: -1,
        msg: `Error uploading file, duw to '${msg}'`
      }
    }
    const fileName = Buffer.from(originalname, 'latin1').toString('utf8')
    const metaData = {
      'Content-Type': mimetype,
    }
    await minioClient.putObject(bucketName, fileName, file.buffer, metaData)
    return {
      code: 0,
      msg: "File uploaded successfully"
    }
  } catch (error) {
    return {
      code: -1,
      msg: 'Error uploading file'
    }
  }
}

// export const 

initMinio();
export default minioClient;
