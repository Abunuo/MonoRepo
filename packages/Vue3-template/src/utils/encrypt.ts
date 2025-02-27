/*
 * @Date: 2024-11-27 08:34:19
 * @Description: CryptoJS 加密解密
 */
// 
import CryptoJS from "crypto-js"
// 加密
import JSEncrypt from "jsencrypt"

/**
 * @description: JSEncrypt 加密
 * @param {string} word
 * @param {string} publicKey
 * @return {*}
 */
export const encrypt = (word: string, publicKey: string) => {
  let encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  let data = encrypt.encrypt(word) as string;
  return data;
}

/**
 * @description: 字符串转 base64
 * @param {string} str
 * @return {*}
 */
export const stringToBase64 = (str: string) => {
	return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str))
}

/**
 * @description: base64转字符串
 * @param {string} str
 * @return {*}
 */
export const base64ToString = (str: string) => {
	return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(str))
}

export default {
	//加密
	encrypt(word: string, keyStr: string = "ng&TVHd5vh^^R$wY") {
		var key = CryptoJS.enc.Utf8.parse(keyStr)
		var srcs = CryptoJS.enc.Utf8.parse(word)
		var encrypted = CryptoJS.AES.encrypt(srcs, key, {
			mode: CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7,
		})
		return encrypted.toString()
	},
	//解密
	decrypt(word: string, keyStr: string = "ng&TVHd5vh^^R$wY") {
		var key = CryptoJS.enc.Utf8.parse(keyStr)
		var decrypt = CryptoJS.AES.decrypt(word, key, {
			mode: CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7,
		})
		return CryptoJS.enc.Utf8.stringify(decrypt).toString()
	},
}
