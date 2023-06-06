import type { Component } from 'vue'
interface routeType {
  path: string
  name: string
  component: Component
  children?: Array<routeType>
}

export interface UserState {
  token: string
  constantRoute: Array<routeType>
}
