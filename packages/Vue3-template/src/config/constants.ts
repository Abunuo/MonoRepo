/*
 * @Date: 2024-11-20 11:46:54
 * @Description: 常量配置文件
 */

export const AXIOSTIMEOUT = 1000 * 60 * 3

export const baseURL = process.env.NODE_ENV === "development" ? "/api" : "/api"

/**
 * @description: 网站存储 storage key
 */
export const StorageScretKey = "Vue3-template"

/**
 * @description: 网站上传文件 url,供 ElUpload action 使用
 * @return {*}
 */
export const ElUploadUrl = '/api/file/load'
