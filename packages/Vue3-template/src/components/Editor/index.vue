<!--
 * @Date: 2024-11-26 15:56:48
 * @Description: 编辑器
 * @Warning: 源代码 packages.json 类型错误, 本地解决错误需要在 packages.json 中 exports增加 "types": "./dist/src/index.d.ts",
 * @Warning: 编辑器默认会包含 <p><br></p>，判断是否有内容时尽可能使用 text 内容，或者判断 html === <p><br></p>
-->
<template>
  <div class="editor-wrap">
    <Toolbar class="editor-toolbar" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor class="editor-content" :class="disabled ? 'is-disabled' : ''" v-model="content"
      :defaultConfig="editorConfig" :mode="mode" @onCreated="handleCreated" @onChange="onChange" />
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { nextTick, onBeforeUnmount, ref, reactive, shallowRef, watch } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { DomEditor } from '@wangeditor/editor'
import type { IDomEditor, Toolbar as IDomToolbar, IToolbarConfig, IEditorConfig } from '@wangeditor/editor'
import useUserStore from '@/stores/modules/user'
import { ElUploadUrl } from '@/config/constants'
import { AxiosResponseData } from '@/utils/request'
import { ElMessage } from 'element-plus'

export interface EditorExposeType {
  editorRef: IDomEditor
  toolbarRef: IDomToolbar
}

export interface EditorValueType {
  html?: string;
  text?: string;
  images?: string[];
}

const modalValue = defineModel<{ html?: string; text?: string; images?: string[] }>()

const { mode = 'default', height = 400, disabled = false, placeholder = '请输入内容...' } = defineProps<{
  mode?: string;
  height?: number;
  disabled?: boolean;
  placeholder?: string;
}>()

const userStore = useUserStore()
// 编辑器上传图片 视频配置 
const defalutUploadConfig = {
  fieldName: 'file',
  server: ElUploadUrl,
  maxFileSize: 500 * 1024 * 1024, // 500M
  timeout: 10 * 60 * 1000, // 10 min
  base64LimitSize: 50 * 1024, // insert base64 format, if file's size less than 5kb
  withCredentials: true,
  headers: {
    'Authorization': userStore.state.token
  },
  customInsert: (res: AxiosResponseData<string>, insertFn: Function) => {
    const { code, data, msg } = res;
    if (code !== '1') {
      ElMessage.warning(msg)
      return
    }
    const url = data
    const alt = data?.split('/').pop()
    insertFn(url, alt, url)
  },
  onError (file: File, err: any, res: any) {
    ElMessage.warning('上传失败，请重试')
    console.log(`${file.name} 上传出错`, err, res)
  },
}

const editorRef = shallowRef<IDomEditor>()
const toolbarRef = shallowRef<IDomToolbar>()

const content = ref('')

const toolbarConfig: Partial<IToolbarConfig> = {
  excludeKeys: ['bulletedList', 'numberedList', 'todo', 'emotion', 'insertTable', 'codeBlock', 'fullScreen']
}
const editorConfig: Partial<IEditorConfig> = reactive({
  placeholder,
  MENU_CONF: {
    uploadImage: Object.assign({}, defalutUploadConfig),
    uploadVideo: Object.assign({}, defalutUploadConfig),
    fontFamily: {
      fontFamilyList: [
        "黑体",
        "仿宋",
        "楷体",
        "方正小标宋简体", // 适配 WPS
        "SimSun",  // 方正小标宋简体 别名 适配腾讯文档
        "方正仿宋_GB2312", // 适配 WPS，腾讯文档粘贴出来为 仿宋
        "方正楷体_GB2312", // 适配 WPS、腾讯文档
        "标楷体",
        "华文仿宋",
        "华文楷体",
        "宋体",
        "微软雅黑",
        "Arial",
        "Tahoma",
        "Verdana",
        "Times New Roman",
        "Courier New"
      ]
    }
  }
})

const images = ref<string[]>([])

// 存储 editor 实例 & 获取 toolbar实例 -- 重要！
const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor

  nextTick(() => {
    const toolbar = DomEditor.getToolbar(editor)
    toolbarRef.value = toolbar!
  })
}

// 编辑器内容改变时实时同步 model 
const onChange = () => {
  const html = editorRef.value?.getHtml() ?? ''
  const text = editorRef.value?.getText() ?? ''
  const images = editorRef.value?.getElemsByType('image') ?? []
  modalValue.value = {
    html,
    text,
    images: images.map((item: any) => item.src)
  }
}

// const handlePaste = (editor: IDomEditor, event: ClipboardEvent) => {
//   const clipboardData = event.clipboardData!
//   // console.log(clipboardData.getData('text/rtf'));
//   console.log(clipboardData.getData('text/html'));
//   // console.log(clipboardData.getData('text/plain'));
//   // if (clipboardData) {
//   //   const items = clipboardData.items
//   //   if (items) {
//   //     for (let i = 0; i < items.length; i++) {
//   //       const item = items[i]
//   //       console.log(item);
//   //     }
//   //   }
//   // }
// }

// 监听父组件的 model，可以用来初始化编辑器
watch(modalValue, () => {
  if (content.value !== modalValue.value?.html) {
    content.value = modalValue.value?.html ?? modalValue.value?.text ?? ''
  }
  if (images.value !== modalValue.value?.images) {
    images.value = modalValue.value?.images ?? []
  }
}, {
  immediate: true
})

// 禁用编辑器
watch(() => disabled, () => {
  nextTick(() => {
    if (disabled) {
      editorRef.value?.disable()
    }
  })
}, {
  immediate: true
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  editorRef.value?.destroy()
})

defineExpose({
  editorRef,
  toolbarRef
})

</script>

<style scoped lang="scss">
:global(.el-form-item.is-required.is-error .editor-wrap) {
  border-color: #f56c6c;
}

.editor-wrap {
  line-height: initial;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;

  .editor-toolbar {
    border-bottom: 1px solid #ccc;
  }

  .editor-content {
    height: v-bind("`${height}px`") !important;

    :deep(.w-e-text-placeholder) {
      top: 10px;
    }

    &.is-disabled {
      opacity: 0.6;
    }
  }
}
</style>