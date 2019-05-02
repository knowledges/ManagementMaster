<!--qiu.bl-->
<style rel="stylesheet/scss" lang="scss" scoped>

</style>

<template>
  <el-progress :percentage="percentage"></el-progress>
</template>

<script>
  export default {
    name: 'tableProgress',
    props: {
      row: Object,
      col: Object,
      data: Array
    },
    components: {},
    data() {
      return {
        percentage: 0
      }
    },
    computed: {},
    created() {
      this.percentage = this.row.pageviews
    },
    mounted() {
    },
    watch: {},
    methods: {}
  }
</script>
