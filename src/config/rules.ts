import type { FormRules } from 'element-plus'
import { reactive } from 'vue'

export const loginFormRules = reactive<FormRules>({
  account: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 3, max: 5, message: '用户名长度应在3-5之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 12, message: '密码长度应在6-12之间', trigger: 'blur' },
  ],
  verification_code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
  ],
})
