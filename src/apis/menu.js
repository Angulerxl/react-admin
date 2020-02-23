import React from 'react'
import Echarts from '@/views/echarts'
import Set from '@/views/set'
import Test from '@/views/test'
import Test2 from '@/views/test/index2'
import Test3 from '@/views/test/index3'
//所有页面路由都在这维护，方便做2级等页面跳转
export default {
  data: {
    list: [
      {
        id: 10001,
        path: '/',
        exact: true,
        component: () => <div>我是首页，欢迎您的光临</div>,
        meta: {
          title: '首页',
          icon: 'user'
        }
      },
      {
        id: 10002,
        path: '/echarts',

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
          title: '数据中心',
          icon: 'user'
        },
        children: [
          {
            id: 100031,
            exact: true,
            path: '/test',
            component: () => <Test />,
            meta: {
              title: '日历'
            }
          },
          {
            id: 100032,
            exact: true,
            path: '/test2',
            component: () => <Test2 />,
            meta: {
              title: '表单'
            }
          },
          {
            id: 100033,
            exact: true,
            path: '/test3',
            component: () => <Test3 />,
            meta: {
              title: '列表'
            }
          }
        ]
      }
    ]
  },
  msg: '操作成功',
  status: 1
}
