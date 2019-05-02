<style  rel="stylesheet/scss" lang="scss">
.my-css-class{
  background: #1f2d3d;
  color: #fff;
}
</style>

<template>
  <div class="table">
    <button @click="getSelectedRows()">Get Selected Rows</button>
    <ag-grid-vue
      :column-defs="columnDefs"
      :column-types="columnTypes"
      :default-col-def="defaultColDef"
      :row-data="rowData"
      row-selection="multiple"
      multi-sort-key="ctrl"
      animate-rows
      column-group-show
      style="width: 500px; height: 500px;"
      class="ag-theme-balham"
      @grid-ready="onGridReady">
      <!-- start -->
      <!-- default-col-def 默认全部有排序功能 -->
      <!-- animate-rows 排序动画 -->
      <!-- multi-sort-key 列支持拖拽 -->
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import { getTableList } from '@/api/table'
export default {
  components: {
    AgGridVue
  },
  data() {
    return {
      columnDefs: null,
      rowData: null,
      gridApi: null,
      columnApi: null,
      defaultColDef: {
        sortable: true, // 排序
        editable: true, // 可以编辑
        unSortIcon: true, // 排序图标
        // filter: 'agTextColumnFilter',
        width: 180
      },
      columnTypes: {
        nonEditableColumn: { editable: false }
      }
    }
  },
  beforeMount() {
    // this.columnDefs = [
    //   { headerName: 'Make', field: 'make', checkboxSelection: true },
    //   { headerName: 'Model', field: 'model', sortable: false },
    //   { headerName: 'Price', field: 'price' }
    // ]
    /* or */
    this.columnDefs = [
      {
        headerName: '名称',
        headerClass: 'my-css-class', // 自定义样式
        children: [
          { headerName: 'Make', field: 'make', checkboxSelection: true, filter: 'agTextColumnFilter' },
          { headerName: 'Model', field: 'model', sortable: false, filter: 'agTextColumnFilter' }
        ]
      },
      {
        headerName: '单价',
        headerClass: 'my-css-class', // 自定义样式
        children: [
          { headerName: 'Price', field: 'price',type: 'numberColumn'}
        ]
      }
    ]
    this.columnTypes = {
      numberColumn: {
        width: 118,
        filter: "agNumberColumnFilter"
      },
      medalColumn: {
        width: 100,
        columnGroupShow: "open",
        filter: false
      },
      nonEditableColumn: { editable: false }
    }
  },
  mounted() {
    getTableList().then(response => {
      console.log(response.data)
      this.rowData = response.data.items
    })
  },
  methods: {
    onGridReady(params) {
      console.log(params)
      this.gridApi = params.api
      this.columnApi = params.columnApi
    },
    getSelectedRows() { // 获取选中行的数据
      const selectedNodes = this.gridApi.getSelectedNodes()
      const selectedData = selectedNodes.map(node => node.data)
      const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }
  }
}
</script>
