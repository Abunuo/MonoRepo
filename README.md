<!--
 * @Author: Monologue
 * @Date: 2023-03-13 19:05:32
 * @LastEditTime: 2023-05-16 17:49:25
 * @LastEditors: Monologue
 * @Description: mono 项目
-->

# mono-repo
> monorepo 允许我们将多个项目放到同一个仓库里面进行管理。
> 此项目包含了 react 基础项目，vue 基础项目，Svelte 基础项目及公共 Utils 函数库等。

### 1. Project setup
> yarn -W === yarn workspaces
###### 安装根目录
```
  yarn -W add/remove xxx
```
###### 安装项目局部依赖
```
  yarn workspace mono-react add/remove xxx
  等同于
  lerna --scope=mono-react add xxx
  lerna exec --scope=mono-react -- yarn remove xxx
```
###### 安装项目依赖，给所有包安装
```
  lerna add xxx
  lerna exec -- yarn add xxx
  等同于 lerna exec -- yarn remove xxx
```
###### 将 packageA 作为 packageB 的依赖进行安装：
```
  yarn workspace packageB add packageA
```


### 2. Creator new workspace
```
  lerna create mono-svelte packages/MonoSvelte
```


### 3. DevServer: hot-reloads for development

```
  npm run start:react // mono-react 项目，默认端口号 3001
  npm run start:vue // mono-vue 项目，默认端口号 3002
  npm run start:svelte // mono-svelte 项目，默认端口号 3003
```


### 4. Compiles and minifies for production

```
  npm run build:react // mono-react 项目
  npm run build:vue // mono-vue 项目
  npm run build:svelte // mono-svelte 项目
```
