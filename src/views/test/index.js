import React from 'react'
import { Calendar } from 'antd';
export default function Test() {
  // 声明一个新的叫做 “count” 的 state 变量

  return (
    <div>
      <p>我是vantd UI框架的日历面板</p>
      <Calendar  onPanelChange={onPanelChange}/>
    </div>
  )
}

function onPanelChange(value, mode) {
  console.log(value, mode, '=====')
}
