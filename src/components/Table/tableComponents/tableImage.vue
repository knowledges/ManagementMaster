<!--qiu.bl-->
<style rel="stylesheet/scss" lang="scss" scoped>

</style>

<template>
  <div>
    <template  v-for="(item, key) in row.files">
      <img :src="newPrefix+item.fileData"  class="thumbnail">
    </template>
  </div>
</template>

<script>
  export default {
    name: 'tablemages',
    props: {
      row: Object,
      col: Object,
      data: Array
    },
    components: {},
    data() {
      return {
        newPrefix: process.env.FILE_URL,
      }
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    watch: {},
    methods: {}
  }
</script>
