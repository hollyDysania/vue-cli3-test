<template>
  <div>
    <h1>首页</h1>
    <hl-button @click.native="getMockArr">
      <div>点击获取列表数据</div>
    </hl-button>
    <div class="table-wrapper">
      <Table v-if="data.length" :columns="columns" :data="data" border width="80%"></Table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [],
      lastColumns: [{
        title: '操作',
        key: 'handler',
        width: 150,
        align: 'center',
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  this.show(params.index)
                }
              }
            }, '展示'),
            h('Button', {
              props: {
                type: 'error',
                size: 'small'
              },
              on: {
                click: () => {
                  this.delete(params.index)
                }
              }
            }, '删除')
          ])
        }
      }],
      data: [],
      num: 1
    }
  },
  methods: {
    getMockArr () {
      let num
      let url = '/list'
      // 获取动态数据
      if (this.num > 5) {
        num = this.num--
      } else if (this.num <= 1) {
        num = this.num++
      }
      let params = {
        page: num
      }
      this.$http.get(url, { params }).then(({ data }) => {
        let list = data.data.list
        // 处理表头 合并 操作列
        this.columns = [ ...Object.keys(list[0])
          .slice(0, 5)
          .map(v => {
            return {
              title: v.toUpperCase(),
              key: v
            }
          }), ...this.lastColumns]
        this.data = list
      })
    },
    show (index) {
      this.$Modal.info({
        title: '提示消息',
        content: `点击了第${index + 1}行信息`
      })
    },
    delete (index) {
      this.data.splice(index, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.table-wrapper {
  margin: 20px auto;
  text-align: center;
  .ivu-table-wrapper {
    display: inline-block;
  }
}
</style>
