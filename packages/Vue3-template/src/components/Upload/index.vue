<!--
 * @Date: 2024-12-11 16:33:33
 * @Description: 封装 element-plus 上传组件
-->
<template>
	<ElUpload :ref="(forwarRef: any) => emit('forwarRef', forwarRef)" :action="ElUploadUrl"
		:headers="{ Authorization: state.token }" :on-error="handleError" v-bind="$attrs">
		<!-- 循环注册 父级传递下来的slot -->
		<template v-for="(_, key) in $slots" #[key]="slotProps" :key="key">
			<slot :name="key" v-bind="slotProps"></slot>
		</template>
	</ElUpload>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { ElMessage, ElUpload } from "element-plus"
import { UploadInstance } from "element-plus"
import { ElUploadUrl } from "@/config/constants"
import useUserStore from "@/stores/modules/user"

const { state } = storeToRefs(useUserStore())

const { onError } = defineProps<{
	onError?: InstanceType<typeof ElUpload>["onError"]
}>()

const emit = defineEmits<{
	(e: "forwarRef", ref: UploadInstance): void
}>()

const handleError = (
	...arg: Parameters<InstanceType<typeof ElUpload>["onError"]>
) => {
	ElMessage.error("上传失败，请重试")
	onError?.(...arg)
}
</script>

<style scoped lang="scss"></style>
