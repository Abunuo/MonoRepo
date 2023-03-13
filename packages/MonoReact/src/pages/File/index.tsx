/*
 * @Author: Monologue
 * @Date: 2023-04-04 11:19:15
 * @LastEditors: Monologue
 * @Description: Mino Fiel
 */
import { type FC, useState } from 'react'

import FileUploadBtn from './components/FileUploadBtn'
import FileList from './components/FileList'
import './index.scss'

export interface FileItem {
  filename: string
  src: string
  icon: string
}

interface FilePageProps {}

const FilePage: FC<FilePageProps> = (props) => {
  const [uploadFile, setUploadFile] = useState<File>()
  const [fileList, setFileList] = useState<FileItem[]>([])

  const addFile = (file: FileItem) => { setFileList((files) => [...files, file]) }

  return (
    <div className="file-main">
      <FileUploadBtn addFile={addFile} />
      <FileList fileList={fileList} />
    </div>
  )
}

export default FilePage
