/*
 * @Author: Monologue
 * @Date: 2023-04-04 14:48:55
 * @LastEditors: Monologue
 * @Description: file upload btn
 */
import { type FC } from 'react'
import { type FileItem } from '../'

interface FileUploadBtnProps {
  addFile: (file: FileItem) => void
}

const FileUploadBtn: FC<FileUploadBtnProps> = (props) => {
  const uploadTriggerHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    const accept = target.dataset.acccept
    console.log(accept)
  }

  return (
    <div className="upload-trigger-inner" onClick={uploadTriggerHandler}>
      <span className="trigger-btn" date-accept="image/*">上传图片</span>
      <span className="trigger-btn" date-accept="video/*">上传视频</span>
      <span className="trigger-btn" date-accept="*">上传文件</span>
    </div>
  )
}

export default FileUploadBtn
