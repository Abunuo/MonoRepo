/*
 * @Author: Monologue
 * @Date: 2023-04-04 14:48:55
 * @LastEditors: Please set LastEditors
 * @Description: file upload btn
 */
import { type FC } from 'react'
import { type FileItem } from '../'
import { getUploadFile } from 'mono-utils'
import { getBucketList, uploadFile } from '@/api/fileApi'

interface FileUploadBtnProps {
  addFile: (file: FileItem) => void
}

const FileUploadBtn: FC<FileUploadBtnProps> = (props) => {
  const uploadTriggerHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    const accept = target.dataset.accept
    const file = await getUploadFile('upload-file-input', accept)
    const formdata = new FormData()
    formdata.append('file', file)
    try {
      const { data: { msg } } = await uploadFile(formdata)
      console.log(msg)
    } catch (error) {
      console.log('error', error)
    }
  }

  const $getBucketList = async () => {
    try {
      const bucketList = await getBucketList()
      console.log(bucketList)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="upload-trigger-inner">
      <div className="left" onClick={uploadTriggerHandler}>
        <button className="trigger-btn" data-accept="image/*">上传图片</button>
        <button className="trigger-btn" data-accept="video/*">上传视频</button>
        <button className="trigger-btn" data-accept="*">上传文件</button>
      </div>
      <div className="right">
        <button className="trigger-btn" onClick={$getBucketList}>获取 bucket </button>
      </div>
    </div>
  )
}

export default FileUploadBtn
