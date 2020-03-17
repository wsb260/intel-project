<template>
    <div class="table">
        <Table :columns="columns" :data="nowData" @on-row-click="jumpView">
            <template slot-scope="{ row }" slot="title">
                <Button type="primary" size="small">{{ row.title }}</Button>
            </template>
            <template slot-scope="{ row }" slot="modify">
                <Button type="primary" size="small" @click.prevent.stop="modifyView(row)">修改</Button>
            </template>
        </Table>
        <Page class="page" :total="total" :page-size="pageSize" @on-change="changepage" @on-page-size-change="_nowPageSize" show-sizer show-total />
    </div>
</template>

<script>
    export default {
        name: '',
        props:{
            columns:{
                type:Array,
                default:() => []
            },
            data:{
                type:Array,
                default:() => []
            }
        },
        data() {
            return {
                nowData:[],
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                total:0, //  总条数
                pageSize:10, // 每页显示多少条
                pageCurrent:1 // 当前页
            }
        },
        methods: {
             changepage(index) {
                this.pageCurrent = index;
                //需要显示开始数据的index,(因为数据是从0开始的，页码是从1开始的，需要-1)
                let _start = (this.pageCurrent - 1) * this.pageSize;
                //需要显示结束数据的index
                let _end = this.pageCurrent * this.pageSize;
                //截取需要显示的数据
                this.nowData = this.data.slice(_start, _end);
                //储存当前页
            },
            _nowPageSize(index) {
                //实时获取当前需要显示的条数
                this.pageSize = index;
            },
            // 跳转到预览页面
            jumpView(rows,index) {
                const { _id:id } = rows
                this.$router.push({
                    path:"view",
                    query:{
                        id
                    }
                })
            },
            // 编辑页面
            modifyView(rows) {
                const { _id:id } = rows
                this.$router.push({
                    path:'edit',
                    query:{
                        id
                    }
                })
            }
        },
        watch:{
            data(newVal){
                this.total = newVal.length;
                this.changepage(1)
            }
        }
    }
</script>

<style lang="less" scoped>
    .table {
        padding:20px;
        .page {
            margin-top:25px;
        }
    }
</style>