import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
// interface routeType {
//   path: string
//   name: string
//   component: Component
//   children?: Array<routeType>
// }

export interface UserState {
  token: string
  menus: Array<RouteRecordRaw>
}
