import express from 'express'
import bodyParser from 'body-parser'

import corsInstance from './middleware/cors'
import fileRoute from './routes/file'

const app = express();

// 解析 post 方式 body 参数
// app.use(bodyParser.urlencoded({extended : false}));  // 处理 post 请求 application/x-www-form-urlencoded
// app.use(bodyParser()).json());  // json 格式
app.use(bodyParser())
app.use(corsInstance)
app.use(fileRoute)

app.get("*", (req, res) => {
  res.end("not found")
})

const PORT = 9001;
app.listen(PORT, () => {
  console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
