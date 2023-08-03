/*
 * @Author: Monologue
 * @Date: 2023-08-01 16:17:22
 * @LastEditors: Please set LastEditors
 * @Description: file routes
 */
import multer from 'multer'
import { Request, Response, Router } from 'express';
import { formatJSONResponse } from '../utils/server';
import { createBucket, listBuckets, uploadFile2Minio } from '../utils/minio';

const router: Router = Router()
const upload = multer()

router.get("/buckges", async (req: Request, res: Response) => {
  const buckets = await listBuckets()
  res.json(formatJSONResponse({ data: buckets }));
})
router.post("/buckges", async (req: Request, res: Response) => {
  const { bucket_name } = req.body
  if(!bucket_name) {
    res.json(formatJSONResponse({code: -1, msg: 'Invalid bucket name'}))
  }
  const result = await createBucket(bucket_name)
  res.json(formatJSONResponse(result));
})

router.get("/file/:id", async (req: Request, res: Response) => {
  
})

router.post("/file", upload.single("file"), async (req: Request, res: Response) => {
  const file = req.file
  const result = await uploadFile2Minio(file)
  res.json(formatJSONResponse(result));
})

router.delete("/file/:id", async (req: Request, res: Response) => {

});

export default router