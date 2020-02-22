import React from 'react'
import Echarts from '@/views/echarts'
import Set from '@/views/set'
import Test from '@/views/test'
//所有页面路由都在这维护，方便做2级等页面跳转
export default {
  data: {
    list: [
      {
        id: 10001,
        // exact: true,
        path: '/',
        component: () => (
          <div>
            我是首页
            <Set />
          </div>
        ),
        meta: {
          title: '首页',
          icon: 'pgmb'
        },
        children: [
          {
            id: 10001_1,
            path: '/test',
            component: () => <Test />,
            meta: {
              title: '测试界面路由'
            }
          }
        ]
      },
      {
        id: 10002,
        path: '/echarts',
        component: () => <Echarts />,
        meta: {
          title: 'eChart'
        }
      },
      {
        id: 10003,
        path: '/set',
        component: () => <Set />,
        meta: {
          title: '设置中心'
        },
        children: []
      }
    ]
  },
  msg: '操作成功',
  status: 1
}
