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
        exact: true,
        path: '/',
        component: () => (
          <div>
            我是首页000
            <Echarts />
          </div>
        ),
        meta: {
          title: '首页',
          icon: 'user'
        }
      },
      {
        id: 10002,
        path: '/echarts',
        exact: true,
        component: () => <Echarts />,
        meta: {
          title: 'eChart',
          icon: 'user'
        }
      },
      {
        id: 10003,
        path: '/echarts',
        exact: true,
        component: () => <Set />,
        meta: {
          title: '设置中心',
          icon: 'user'
        },
        children: [
          {
            id: 100031,
            exact: true,
            path: '/test',
            component: () => <Test />,
            meta: {
              title: '测试'
            }
          }
        ]
      }
    ]
  },
  msg: '操作成功',
  status: 1
}
