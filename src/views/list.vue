<template>
    <div  class="dashboard-list">
        <Card :bordered="false" class="table-card">
            <Row :gutter="20">
                <Col :span="8">
                  <label>组件页名称：</label>
                  <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
                </Col>
                <Col :span="4" offset="12">
                    <Button type="primary" class="btn" @click="addDashboard">新建组件页</Button>
                </Col>
            </Row>
            <Row>
              <filterTable :columns="columns" :data="listData"></filterTable>
            </Row>
        </Card>
        <!-- 新建仪表盘弹窗 -->
        <Modal
            title="添加仪表盘"
            v-model="newDashboard"
            :width="400"
            >
            <Form ref="newDashboard" :v-model="dashboardInfo" :rules="rule">
                <FormItem prop="name" label="仪表盘名称">
                    <Input
                        type="text"
                        v-model="dashboardInfo.name"
                        placeholder="以字母开头，字母下划线数字组成" />
                </FormItem>
            </Form>
            <div slot="footer">
                <Button @click="addCancel">取消</Button>
                <Button type="primary" @click="addAction" style="margin-right:0">确定</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import { getList, createLayout } from '../api/service/eidt';
export default {
  name: 'list',
  data () {
    return {
      value: '',
      newDashboard: false,
      dashboardInfo: {
        name: ''
      },
      rule: {
        name: [
          {
            required: true,
            message: '不能为空',
            trigger: 'blur'
          }
        ]
      },
      columns: [
        {
            title: '组件标识',
            key: '_id',
            align: 'center'
        },
        {
            title: '组件名称',
            slot: 'title',
            align: 'center'
        },
        {
            title: '时间',
            key: 'date',
            align: 'center'
        },{
          title: '修改',
          slot: 'modify',
          align: 'center'
        }
      ],
      listData:[]
    }
  },
  methods: {
    addDashboard () {
      this.newDashboard = true
    },
    async addAction() {
      let { _id:id } = await createLayout(this.dashboardInfo.name)
      this.$router.push({
        path:'edit',
        query:{
          id
        }
      })
    },
    addCancel() {

    }
  },
  async mounted() {
    this.listData = await getList('/getList')
  }
}
</script>

<style lang="less" scoped>

</style>
