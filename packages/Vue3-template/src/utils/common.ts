/*
 * @Date: 2024-12-02 11:10:56
 * @Description: 通用函数
 */

import axios, { AxiosRequestConfig } from "axios"

interface LikeTreeMap {
	[key: string]: any
	children?: LikeTreeMap[]
}
/**
 * @description: 扁平化树形结构
 * @param {T[]} tree
 * @return {*}
 */
export const flatTreeMap = <T extends LikeTreeMap>(tree: T[]) => {
	return tree.reduce((acc: T[], item: T) => {
		acc.push(item)
		if (item.children) {
			acc = acc.concat(flatTreeMap(item.children as T[]))
		}
		return acc
	}, [])
}

/**
 * @description: 格式化表单数据增加 index
 * @param {any} data
 * @return {*}
 */
export const tableColumnAddIndex = (data?: any[]) => {
	// 防止有的请求返回 null 而非 undefined
	return (data ?? []).map((itm, index) => ({
		...itm,
		index: index + 1,
	}))
}

/**
 * @description: 生成唯一 id
 * @param {number} length
 * @return {string}
 */
export const uuid = (uidLength: number = 16) => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	let uid = ""
	for (let i = 0; i < uidLength; i++) {
		uid += characters.charAt(Math.floor(Math.random() * characters.length))
	}
	return uid
}

/**
 * @description: 重写 Object.assign, 直合并原对象包含的属性，可以额外添加属性
 * @param {object} target 目标对象
 * @param {object} source 源对象
 * @param {string} extendKeys 额外添加的属性
 * @return {*}
 */

export const objectAssign = (
	target: Record<string, any> = {},
	source: Record<string, any> = {},
	extendKeys: (keyof typeof source)[] = []
) => {
	const fullKeys = Object.keys(target).concat(extendKeys)
	fullKeys.forEach(key => {
		if(key in source) {
			target[key] = source[key]
		}
	})
}

/**
 * @description: 防抖函数
 * @param {Function} callback
 * @param {number} duration
 * @return {*}
 */
export const debounce = (callback: Function, duration: number = 300) => {
	let timeoutId: NodeJS.Timeout
	return (...arg: any) => {
		if (timeoutId) {
			clearTimeout(timeoutId)
		}
		timeoutId = setTimeout(() => {
			callback(...arg)
		}, duration)
	}
}

/**
 * @description: 节流函数
 * @param {Function} callback
 * @param {number} duration
 * @return {*}
 */
export const throttle = (callback: Function, duration: number = 300) => {
	let loopTimeStart = Date.now()
	return (...arg: any) => {
		const curDuration = Date.now() - loopTimeStart
		if (curDuration >= duration) {
			callback(...arg)
			loopTimeStart = Date.now()
		}
	}
}

interface DownloadFile {
	name: string
	url: string
}
/**
 * @description: 文件下载
 * @param {DownloadFile} item
 * @return {*}
 */
export const downloadClickHandler = (item: DownloadFile, config?: AxiosRequestConfig<any>) => {
  axios.get(item.url, {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
		...config
  })
    .then((response: any) => response.blob())
    .then(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = item.name;
      a.click();
    });
}
