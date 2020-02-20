import React, { Component } from 'react'
import './style/leftNav.scss'
import { Tree, Icon, Divider } from 'antd'
const { TreeNode } = Tree

export default class LeftNav extends Component {
                 // constructor(props) {
                 //     super(props)
                 // }
                 onSelect = (keys, event) => {
                   console.log('Trigger Select', keys, event)
                 }

                 onExpand = () => {
                   console.log('Trigger Expand')
                 }
                 render() {
                   return (
                     <div>
                       <h1
                         style={{
                           color: '#fff',
                           textAlign: 'center',
                           marginTop: '10px'
                         }}
                       >
                         React
                       </h1>
                       <Tree
                         defaultExpandAll
                         onSelect={this.onSelect}
                         onExpand={this.onExpand}
                       >
                         <TreeNode
                           icon={<Icon type="smile-o" />}
                           title="首页"
                           key="0-0"
                         ></TreeNode>
                         <TreeNode title="设置中心" key="0-1">
                           <TreeNode title="用户管理" key="0-1-0" isLeaf />
                         </TreeNode>
                       </Tree>
                     </div>
                   )
                 }
               } 