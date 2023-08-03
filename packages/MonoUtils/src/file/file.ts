// /*
//  * @Author: Monologue
//  * @Date: 2023-03-23 12:01:22
//  * @LastEditors: Monologue
//  * @Description: 文件操作
//  */

export const getUploadFile: (inputId?: string, accept?: string) => Promise<File> = (inputId = "file-input", accept) => {
  return new Promise((resove, reject) => {
    const fileInput: HTMLInputElement = document.getElementById(inputId) as HTMLInputElement ?? document.createElement("input");
    fileInput.id = inputId
    fileInput.type = "file";
    fileInput.accept = accept ?? "*";
    fileInput.style.display = "none";
    document.body.append(fileInput)
    fileInput.onchange = (e: any) => {
      const file = e.target.files[0]
      resove(file);
      fileInput.remove();
    }
    fileInput.click();
  })
}