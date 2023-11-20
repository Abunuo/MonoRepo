/*
 * @Date: 2023-10-17 17:45:48
 * @Description: 
 */

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}