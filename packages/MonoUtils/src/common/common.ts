/*
 * @Author: Monologue
 * @Date: 2023-03-09 18:02:40
 * @LastEditTime: 2023-05-16 12:00:10
 * @LastEditors: Monologue
 * @Description: 1
 */

export const uuid = (length: number = 8, radix: number = 36) => {
  let uuidString = ''
  while (uuidString.length < length) {
    uuidString += Math.floor(Math.random() * radix).toString(radix)
  }
  return uuidString
}
