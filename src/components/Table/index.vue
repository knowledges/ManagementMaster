/**
*                                         ,s555SB@@&
*                                      :9H####@@@@@Xi
*                                     1@@@@@@@@@@@@@@8
*                                   ,8@@@@@@@@@B@@@@@@8
*                                  :B@@@@X3hi8Bs;B@@@@@Ah,
*             ,8i                  r@@@B:     1S ,M@@@@@@#8;
*            1AB35.i:               X@@8 .   SGhr ,A@@@@@@@@S
*            1@h31MX8                18Hhh3i .i3r ,A@@@@@@@@@5
*            ;@&i,58r5                 rGSS:     :B@@@@@@@@@@A
*             1#i  . 9i                 hX.  .: .5@@@@@@@@@@@1
*              sG1,  ,G53s.              9#Xi;hS5 3B@@@@@@@B1
*               .h8h.,A@@@MXSs,           #@H1:    3ssSSX@1
*               s ,@@@@@@@@@@@@Xhi,       r#@@X1s9M8    .GA981
*               ,. rS8H#@@@@@@@@@@#HG51;.  .h31i;9@r    .8@@@@BS;i;
*                .19AXXXAB@@@@@@@@@@@@@@#MHXG893hrX#XGGXM@@@@@@@@@@MS
*                s@@MM@@@hsX#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,
*              :GB@#3G@@Brs ,1GM@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B,
*            .hM@@@#@@#MX 51  r;iSGAM@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8
*          :3B@@@@@@@@@@@&9@h :Gs   .;sSXH@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:
*      s&HA#@@@@@@@@@@@@@@M89A;.8S.       ,r3@@@@@@@@@@@@@@@@@@@@@@@@@@@r
*   ,13B@@@@@@@@@@@@@@@@@@@5 5B3 ;.         ;@@@@@@@@@@@@@@@@@@@@@@@@@@@i
*  5#@@#&@@@@@@@@@@@@@@@@@@9  .39:          ;@@@@@@@@@@@@@@@@@@@@@@@@@@@;
*  9@@@X:MM@@@@@@@@@@@@@@@#;    ;31.         H@@@@@@@@@@@@@@@@@@@@@@@@@@:
*   SH#@B9.rM@@@@@@@@@@@@@B       :.         3@@@@@@@@@@@@@@@@@@@@@@@@@@5
*     ,:.   9@@@@@@@@@@@#HB5                 .M@@@@@@@@@@@@@@@@@@@@@@@@@B
*           ,ssirhSM@&1;i19911i,.             s@@@@@@@@@@@@@@@@@@@@@@@@@@S
*              ,,,rHAri1h1rh&@#353Sh:          8@@@@@@@@@@@@@@@@@@@@@@@@@#:
*            .A3hH@#5S553&@@#h   i:i9S          #@@@@@@@@@@@@@@@@@@@@@@@@@A.
*
*
*    又看源码，看你妹妹呀！
*/
<!--qiu.bl-->
<style rel="stylesheet/scss" lang="scss" scoped>
.tab-div{
  display: block;
  width: 100%;
  height: calc(100vh - 170px);
  background: #f3f3f3;
  overflow: hidden;
}
.footer {
  background: #eef1f6;
  width: 100%;
  height: 40px;
}
.pagination-footer .description{
  float:left;
  margin-left:20px;
  margin-top:12px;
}
.pagination-footer .el-pagination{
  float:right;
  margin-top:5px;
  margin-bottom:5px;

}
</style>

<template>
    <div class="tab-div">
      <el-table
        :data="data"
        :height="tab_height"
        @select="select"
        @select-all="selectAll"
        @sort-change="sortChange"
        v-bind="tablePropertites"
        v-on="$listeners"
        style="width: 100%;"
      >
        <template v-for="(tp, key) in columnTypes">
          <el-table-column :type="tp" :key="key"></el-table-column>
        </template>
        <template v-for="(col, key) in renderColumns">
          <el-table-column v-if="col.columnsProps.type !== 'text'" v-bind="getColBind(col)">
            <template slot-scope="scope">
              <!-- 动态绑定组建 -->
              <component
                :is="col.component"
                v-bind="getCptBind(scope, col)"
                v-on="col.listeners"
              ></component>
            </template>
          </el-table-column>
          <el-table-column v-else v-bind="getColBind(col)"></el-table-column>
        </template>
      </el-table>
      <div class="footer">
        <div v-if="pagination" class="pagination-footer">
          <span class="description"></span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="pageSizes"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
</template>

<script>
import Button from './tableComponents/tableButton'
import Text from './tableComponents/text'
import Image from './tableComponents/tableImage'
import Progress from './tableComponents/tableProgress'
const BOOLEAN_KEYS = [
  'fit',
  'stripe',
  'border',
  'show-header',
  'highlight-current-row',
  'default-expand-all',
  'show-summary',
  'select-on-indeterminate'
]

const TYPES = ['selection', 'index']  // 表格类型[selection：复选框；expand：展开表格；index：序号]

const COLUMN_PROPS = {
  align: 'left',
  components: Text,
  type: 'text'
}

const COLUMN_KEY_MAP = {
  label: 'label',
  prop: 'prop'
}

const tableComponents = {
  'text': Text,
  'img': Image,
  'progress': Progress,
  'button': Button
}

export default {
  name: 'tables',
  props: {
    data: {
      type: Array,
      default: []
    },
    columns: {
      type: Array,
      default: []
    },
    columnType: [String, Array],        // 列类型[序号、复选框、展开]
    select: Function,
    selectAll: Function,
    sortChange: Function, // 服务端分页；当 sortable：custom
    pageSizes: {
      type: Array,
      default: () => [50, 100, 500, 1000]
    },
    pageSize: {
      type: Number,
      default: 50
    },
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    reqParame: Object,
    pagination: Boolean, // 分页开关
    fetchData: Function, // 请求分页方法
    showSummary: Boolean, // 表尾合计行开关
    summaryMethod: Function // 表尾合计行方法
  },
  components: {},
  data() {
    return {
      tab_height: document.body.offsetHeight - 210
    }
  },
  computed: {
    // 处理 $attrs 里面 Boolean 类型的 prop 和统一 prop 命名
    tablePropertites () {
      // 取得table标签下的属性
      const { $attrs } = this
      const properties = {}
      Object.keys($attrs).forEach(key => {
        const v = $attrs[key]
        // 正则表达式，将属性中大写字母替换为-字母，并全部转小写，如maxHeight,转换后得到max-heigth
        const uniformKey = key.replace(/([A-Z])/, '-$1').toLowerCase()
        // 如果属性没有值，并且该属性在boolean值属性列表中，那么给该属性赋值true，否则保持不变
        // ~按位取反运算符--二进制
        // 取反目的，只要结果不为0就是true,代表属性列表中有该属性
        properties[key] = ~BOOLEAN_KEYS.indexOf(uniformKey) && v === '' ? true : v
      })
      return properties
    },
    /* 列组装 */
    renderColumns () {
      const {
        columns, // 列值
      } = this
      const map = Object.assign({}, COLUMN_KEY_MAP)
      /* 循环列，将列的各属性合并 */
      const renderColumns = columns.map(col => {
        const props = !col.columnsProps ? COLUMN_PROPS : col.columnsProps // 列的属性 默认为 COLUMN_PROPS
        const componentType = !props.type ? 'text' : props.type
        this.$set(props, 'component', tableComponents[componentType])
        this.$set(props, 'type', componentType)
        const obj = Object.assign({}, COLUMN_PROPS, props, col)
        obj.label = obj[map.label]
        obj.prop = obj[map.prop]
        obj.num = obj[map.num]
        return obj
      })
      return renderColumns
    },
    // 列类型格式化方法
    columnTypes () { // 获取列类型
      const { columnType: type } = this
      if (!type) return [] // 如果没有设置返回空
      // 如果列类型是String类型，并且存在于列类型数组中，直接返回值
      if (typeof type === 'string' && ~TYPES.indexOf(type)) {
        return [type]
      }
      // 如果是数组类型，并且每个值都存在于列类型数组中，返回
      return Array.isArray(type) && type.filter(it => ~TYPES.indexOf(it)) || []
    }
  },
  created() {
  },
  mounted() {
  },
  watch: {},
  methods: {
    /* 删除列属性中无效值 -- 打印表头 */
    getColBind (col) {
      const bind = Object.assign({}, col)
      delete bind.component
      delete bind.listeners
      delete bind.propsHandler
      return bind
    },
    getCptBind (scope, col) {
      const { row, column } = scope
      const index = scope.$index
      const props = { row, col, column, index, 'data': this.data }
      return props
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.reqParame.currentPage = 1
      this.reqParame.pageSize = val
      this.fetchData(this.reqParame)
      var scroll = document.getElementsByClassName('is-scrolling-none')[0]
      scroll.scrollTop = 0
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.reqParame.currentPage =  val
      this.fetchData(this.reqParame)
      var scroll = document.getElementsByClassName('is-scrolling-none')[0]
      scroll.scrollTop = 0
    }
  }
}
</script>
