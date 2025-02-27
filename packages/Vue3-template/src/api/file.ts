/*
 * @Date: 2024-12-11 11:01:43
 * @Description: 文件上传下载相关接口
 */

import request, { AxiosResponseData } from "@/utils/request"

/**
 * @description: 文件上传接口 - formdata key: file
 * @param {FormData} data
 * @return {*}
 */
export const upload = (data: FormData) => {
	return request.post<AxiosResponseData<{ url: string }>>(
		"/file/load",
		data,
		{
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}
	)
}
