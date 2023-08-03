"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const steup = async () => {
    await (0, child_process_1.exec)('minio server ./minio');
    console.log('minio server success: http://localhost:9000');
};
steup();
