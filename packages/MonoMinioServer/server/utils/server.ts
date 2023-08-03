/*
 * @Author: Monologue
 * @Date: 2023-08-01 18:41:51
 * @LastEditors: Monologue
 * @Description: server funciton
 */

interface FormatJSONResponse {
  code: number;
  data: any;
  msg: string;
}
/**
 * @description: 格式化返回内容
 * @param {Partial<FormatJSONResponse>} response
 * @return {FormatJSONResponse}
 */
export const formatJSONResponse = (response?: Partial<FormatJSONResponse>) => {
  const defaultData = {
    code: 0,
    data: {},
    msg: "response success"
  }
  return Object.assign(defaultData, response)
}
