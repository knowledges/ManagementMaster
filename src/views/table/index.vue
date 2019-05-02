<template>
  <div class="app-container">
    <tableView
      v-loading="listLoading"
      :data="list"
      :columns="columnHeader"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :total="200"
      :fetchData="fetchData"
      :sortChange="sortChange"
      :reqParame="reqParame"
      :selectAll="selectAll"
      :select="select"
      border
      pagination
      columnType="selection"
    >
      <!--表格-->
    </tableView>
  </div>
</template>

<script>
  import { getList } from '@/api/table'
  import tableView from '@/components/Table/index.vue'
  export default {
    filters: { },
    components: { tableView },
    data() {
      return {
        list: null,
        listLoading: true,
        currentPage: 1,
        pageSize: 50,
        reqParame: {
          currentPage: 1,
          pageSize: 50,
          url: ''
        },
        columnHeader: [
          {
            prop: 'title',
            label: '标题',
            columnsProps: {align: 'center'}
          },
          {
            prop: 'author',
            label: '作者',
            columnsProps: {align: 'center'}
          },
          {
            prop: 'pageviews',
            label: '页面视图',
            columnsProps: {align: 'center', sortable: 'custom'}
          },
          {
            prop: 'status',
            label: '状态',
            columnsProps: {align: 'center', formatter: this.formatterClk}
          },
          {
            prop: 'display_time',
            label: '创建时间',
            columnsProps: {align: 'center'}
          },
          {
            label: '操作',
            prop: 'operation',
            columnsProps: {width: 90, type: 'button'},
            cptProperties: [
              {
                label: '设置',
                value: 'setting',
                icon: 'edit',
                size: 'small',
                type: 'success',
                eventClick: this.setting
              }
            ]
          }
        ]
      }
    },
    created() {
      var param = {}
      param.currentPage = 1
      this.fetchData(param)
    },
    methods: {
      fetchData(params) {
        this.currentPage = params.currentPage
        this.pageSize = params.pageSize
        console.log(this.reqParame)
        this.listLoading = true
        getList(this.listQuery).then(response => {
          this.list = response.data.items
          this.listLoading = false
        })
      },
      sortChange (column, prop, order) {
        console.log(column.order)
      },
      selectAll(data) {
        console.log(data)
      },
      select (selection, index) {
        console.log(selection, index2)
      },
      formatterClk (row, column) {
        return row.status
      }
    }
  }
</script>

