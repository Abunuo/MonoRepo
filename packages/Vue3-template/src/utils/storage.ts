/*
 * @Date: 2024-11-27 09:33:45
 * @Description: storage 方法封装 - 支持自定义 sessionstorage和 localstorage
 */
import { StorageScretKey } from '@/config/constants'

class CustomStorage {
	private scretKey: string
	private storageInstance: typeof sessionStorage & typeof localStorage =
		sessionStorage

	constructor(scretKey: string = "") {
		this.scretKey = scretKey
	}

	getStorageInstance() {
		return this.storageInstance
	}

	setStorageInstance(
		storageInstance: typeof sessionStorage & typeof localStorage
	) {
		this.storageInstance = storageInstance
	}

	private formatKey(key: string) {
		return this.scretKey + "-" + key
	}

	setItem(key: string, value: string) {
		try {
			this.storageInstance.setItem(this.formatKey(key), value)
		} catch (error) {
			console.error(error)
		}
	}

	getItem(key: string) {
		try {
			return this.storageInstance.getItem(this.formatKey(key))
		} catch (error) {
			console.error(error)
		}
	}

	removeItem(key: string) {
		try {
			this.storageInstance.removeItem(this.formatKey(key))
		} catch (error) {
			console.error(error)
		}
	}

	clear() {
		try {
			this.storageInstance.clear()
		} catch (error) {
			console.error(error)
		}
	}

	key(index: number) {
		try {
			return this.storageInstance.key(index)
		} catch (error) {
			console.error(error)
		}
	}

	length() {
		try {
			return this.storageInstance.length
		} catch (error) {
			console.error(error)
		}
	}

	[Symbol.iterator]() {
		try {
			return Array.from({ length: this.length()! }, (_, i) => this.key(i))
		} catch (error) {
			console.error(error)
		}
	}

	keys() {
		try {
			return Array.from({ length: this.length()! }, (_, i) => this.key(i))
		} catch (error) {
			console.error(error)
		}
	}

	values() {
		try {
			return Array.from({ length: this.length()! }, (_, i) =>
				this.getItem(this.key(i)!)
			)
		} catch (error) {
			console.error(error)
		}
	}

	entries() {
		try {
			return Array.from({ length: this.length()! }, (_, i) => [
				this.key(i),
				this.getItem(this.key(i)!),
			])
		} catch (error) {
			console.error(error)
		}
	}
}

export default new CustomStorage(StorageScretKey)
