<!--
 * @Date: 2024-11-21 09:58:46
 * @Description: 
-->
<template>
  <div>
    <div class="login" v-loading="loading">
      <div class="title">登录</div>
      <ElForm :model="form" label-width="80px">
        <ElFormItem label="用户名：">
          <ElInput v-model="form.name" placeholder="请输入用户名"></ElInput>
        </ElFormItem>
        <ElFormItem label="密码：">
          <ElInput v-model="form.pwd" show-password placeholder="请输入密码"></ElInput>
        </ElFormItem>
        <ElFormItem class="verify-code" label="验证码：">
          <ElInput v-model="form.code" class="code" @keyup.enter="handleLogin" placeholder="请输入验证码" />
          <img class="verify-code-image" :src="identifyCode" alt="" @click="refreshCode">
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary" @click="handleLogin" class="btn1">登录</ElButton>
        </ElFormItem>
      </ElForm>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/stores/modules/user'
import { ElForm, ElFormItem, ElButton, ElInput, ElMessage } from 'element-plus'
import { encrypt } from '@/utils/encrypt'
import storage from '@/utils/storage'
import { ManageTitle } from '@/config/constants'
import { ManageMenuPermission } from '@/config/menu'
import { getCryptoKey, getVerifyCode, login, UserRole } from '@/api/login'
import { uuid } from '@/utils/common'
const router = useRouter()
const userStore = useUserStore()
const loading = ref<boolean>(false)
const form = reactive({
  name: '',
  pwd: '',
  code: '',
  verifyKey: ''
})
const identifyCode = ref()

onMounted(() => {
  refreshCode()
})

// 刷新验证码
const refreshCode = async () => {
  const { data: { data } } = await getVerifyCode()
  identifyCode.value = 'data:image/jpeg;base64,' + data?.verify // Math.random().toString().slice(2, 6)
  form.verifyKey = data?.key!
}

// 登录
const handleLogin = async () => {
  if (!form.name || !form.pwd || !form.code) {
    ElMessage({
      type: 'warning',
      message: '请输入用户名、密码、验证码'
    })
    return
  }
  const { data: { data } } = await getCryptoKey({
    username: form.name
  })
  const password = encrypt(form.pwd, data!)
  try {
    const { data: { data: { token, username, role } = {} } } = await login({
      code: form.code,
      verifyKey: form.verifyKey,
      username: form.name,
      password
    })
    const userId = uuid()
    storage.setItem('token', token!)
    const permission = getPermission(role)
    userStore.setUserState({
      userId,
      username,
      token,
      permission
    })
    // 审核用户没有 manage 权限，需要跳转到 /manage/approval
    if (role === 'auditor') {
      router.push('/manage/approval')
    } else if (role === 'admin') {
      router.push('/manage/article/home')
    } else {
      router.push('/manage')
    }
  } catch (error) {
    refreshCode()
    console.log(error);
  }
}

/**
 * @description: 根据用户角色获取用户菜单
 * @param {*} role
 * @return {*}
 */
const getPermission = (role?: UserRole) => {
  const permissionKey = Object.values(ManageMenuPermission)
  const articlePermission = permissionKey.filter(predicate => predicate.startsWith('manage-article'))
  const auditorPermission = [ManageMenuPermission.MANAGEAPPROVAL]
  switch (role) {
    // 超管
    case 'superadmin':
      return permissionKey
    // 文章管理
    case 'admin':
      return articlePermission
    // 审核者
    case 'auditor':
      return auditorPermission
    // 综合管理员 - 文章管理和文章审核
    case 'generalAdmin':
      return [...articlePermission, ...auditorPermission]
  }
  return []
}

</script>
<style lang="scss" scoped>
.login {
  width: 400px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  border: 1px solid #000;

  .title {
    background-color: rgb(42, 49, 66);
    color: #fff;
    padding: 14px 0;
    font-size: 21px;
    font-family: monospace;
    font-weight: 600;
    text-align: center;
  }

  :deep(.el-form) {
    padding: 40px;
    padding-bottom: 0;

    .el-form-item__label {
      text-align: left;
    }

    .el-form-item__label {
      color: #000;
    }

    .el-button {
      width: 100px;
    }

    .btn1 {
      // margin-left: -63px;
      margin: 0 auto;
      transform: translateX(-40px);
    }
  }
}

.verify-code {
  :deep(.el-form-item__content) {
    flex-direction: row;
    gap: 10px;

    .el-input {
      width: 44%;
    }
  }

  .verify-code-image {
    height: 32px;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>