import * as Minio from 'minio';
let minioClient;
const initMinio = () => {
    minioClient = new Minio.Client({
        endPoint: 'http://10.1.3.9',
        port: 9000,
        useSSL: false,
        accessKey: 'jaYNgXPpbx9y9zMD',
        secretKey: 'hWDkmgbZfxNr23rCag4XsBnwpVx6ooLP'
    });
};
export const getUploadFile = (inputId = "file-input", accept) => {
    return new Promise((resove, reject) => {
        const fileInput = document.getElementById(inputId) ?? document.createElement("input");
        fileInput.id = inputId;
        fileInput.type = "file";
        fileInput.accept = accept ?? "*";
        document.body.append(fileInput);
        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            resove(file);
            fileInput.remove();
        };
        fileInput.click();
    });
};
export const listBuckets = () => {
    if (!minioClient)
        initMinio();
    minioClient.listBuckets(function (err, buckets) {
        if (err)
            return console.log(err);
        console.log('buckets :', buckets);
    });
};
export const uploadFile2Minio = (file) => {
};
