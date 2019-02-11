<!--qiu.bl-->
<style rel="stylesheet/scss" lang="scss" scoped></style>
<template>
  <div id="maps" class="container-fluid">map index.vue</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Map',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['BMAP'])
  },
  created() {},
  mounted() {
    this.$store.dispatch('MP')
      .then(respone => {
        console.log('1234')
        console.log(respone)
      })
  },
  methods: {}
}
</script>
