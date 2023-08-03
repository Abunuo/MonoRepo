# mono-minio-server
> 本项目部署了 minio 的 node 服务，支持用户获取 bucket，创建 bucket及上传文件等操作

#### 1. 开启两个服务（httpserver 与 minioserver）
``` javascript
  // 必须进入 MonoMinioServer 目录
  pnpm httpServer
  // 接口访问地址 http://localhost:9001
  pnpm minioServer
  // minio 后台访问地址 http://localhost:9000
  // username minioadmin
  // password minioadmin
```
#### 2. API
##### 1. /buckges 
```javascript
  @description: 获取 packet
  @method: get
  @return BucketItemFromList[]
```
##### 2. /buckges
```javascript
  @description: 创建 packet
  @method: post
  @params: bucket_name
```
##### 23. /file
```javascript
  @description: 上传文件
  @method: post
  @body: FormData<{file: File}>
```