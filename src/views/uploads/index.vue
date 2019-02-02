<!--qiu.bl-->
<style rel="stylesheet/scss" lang="scss" scoped></style>
<template>
  <div class="container-fluid">
    uploads index.vue
    <UPLOAD>
      <!-- 附件上传-图片 -->
    </UPLOAD>
  </div>
</template>
<script>
import UPLOAD from '@/components/Files/Upload'
export default {
  name: 'UploadP',
  components: { UPLOAD },
  props: {},
  data() {
    return {
      imgList: [],
      maskSrc: '',
      isShow: false,
      datas: new FormData(),
      files: 0,
      size: 0
    }
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>
