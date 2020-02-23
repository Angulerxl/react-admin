import React from 'react'
import createG2 from 'g2-react'


class Echarts extends React.Component {
  render() {
    const data = [
      { date: '2017-6', value: 22.75, type: '应收金额', rate: 23.335 },
      { date: '2017-6', value: 23.44, type: '已收金额', rate: 23.335 },
      { date: '2017-6', value: 22.69, type: '欠收金额', rate: 23.335 },

      { date: '2017-7', value: 21.75, type: '应收金额', rate: 43.335 },
      { date: '2017-7', value: 33.44, type: '已收金额', rate: 43.335 },
      { date: '2017-7', value: 42.69, type: '欠收金额', rate: 43.335 },

      { date: '2017-8', value: 31.75, type: '应收金额', rate: 25.335 },
      { date: '2017-8', value: 35.44, type: '已收金额', rate: 25.335 },
      { date: '2017-8', value: 12.69, type: '欠收金额', rate: 25.335 },

      { date: '2017-9', value: 36.75, type: '应收金额', rate: 45.335 },
      { date: '2017-9', value: 65.44, type: '已收金额', rate: 45.335 },
      { date: '2017-9', value: 32.69, type: '欠收金额', rate: 45.335 },

      { date: '2017-10', value: 35.75, type: '应收金额', rate: 35.335 },
      { date: '2017-10', value: 15.44, type: '已收金额', rate: 35.335 },
      { date: '2017-10', value: 52.69, type: '欠收金额', rate: 35.335 },

      { date: '2017-11', value: 41.75, type: '应收金额', rate: 75.335 },
      { date: '2017-11', value: 25.44, type: '已收金额', rate: 75.335 },
      { date: '2017-11', value: 62.69, type: '欠收金额', rate: 75.335 }
    ]

    const Line = createG2(chart => {
      chart
        .intervalDodge()
        .position('date*value')
        .color('type')
      //
      chart.line().position('date*rate')

      //3、定义别名
      chart.cols({
        date: {
          alias: '月份' // 设置属性的别名
        },
        value: {
          alias: '金额'
        },
        rate: {
          alias: '缴费率(%)'
        }
      })

      //图例
      chart.legend({
        mode: false,
        position: 'top', // 图例的显示位置，有 'top','left','right','bottom'四种位置，默认是'right'。
        title: '示例',
        dy: 5
      })

      //最后，绘制组件
      chart.render()
    })

    return (
      <div>
        <Line
          data={data}
          forceFit={true}
          height={500}
          plotCfg={{
            margin: [80, 80, 50, 80]
          }}
        />
      </div>
    )
  }
}

export default Echarts
