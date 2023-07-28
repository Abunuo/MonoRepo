<!--
 * @Author: Monologue
 * @Date: 2023-03-13 19:05:32
 * @LastEditTime: 2023-07-31 12:32:53
 * @LastEditors: Monologue
 * @Description: mono 项目
-->

# mono-repo
> monorepo 允许我们将多个项目放到同一个仓库里面进行管理。本项目采用官方推荐 pnpm 管理多包。
> 此项目包含了 react 基础项目，vue 基础项目，Svelte 基础项目及公共 Utils 函数库等。

### 1. Project setup
> pnpm -w === pnpm --workspace-root
###### 安装根目录
```
  pnpm add/remove xxx -w
```
###### 安装项目局部依赖
```
  pnpm add/remove xxx --filter <package_name>
  等同于 lerna exec --scope=<package_name> pnpm add/remove xxx
```
###### 安装项目依赖，给多个包安装
```
  pnpm add/remove xxx --filter <package_name> <package_name2>
```
###### 将 packageA 作为 packageB, packageC 的依赖进行安装：
```
  pnpm add/remove packageA --filter packageB packageC
```


### 3. Creator new workspace
```
  1. 创建并配置 pnpm-workspace.yaml 设置 workspace
  2. 在 packages 下创建对应文件夹用来作为新工作空间
```


### 3. DevServer: hot-reloads for development

```
  pnpm start:react // mono-react 项目，默认端口号 3001
  pnpm start:vue // mono-vue 项目，默认端口号 3002
  pnpm start:svelte // mono-svelte 项目，默认端口号 3003
```


### 4. Compiles and minifies for production

```
  pnpm build:react // mono-react 项目
  pnpm build:vue // mono-vue 项目
  pnpm build:svelte // mono-svelte 项目
```
