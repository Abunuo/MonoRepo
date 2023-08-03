import { exec } from 'child_process'

const steup = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  await exec('minio server ./minio');
  console.log('minio server success: http://localhost:9000');
  // console.log("stdout", stdout);
  // console.log("stderr", stderr);
};

steup();
