<!--qiu.bl-->
<style rel="stylesheet/scss" lang="scss" scoped>
  ul{
    padding: 0 0;
    margin: 0 0;
    li {list-style: none;}
  }
  .photo-list{
    display: inline-block;
    width: 555px;
    height: 100px;
    ul{
      display: flex;
      align-items: stretch;
      height: 100%;
      li{
        flex-direction: row;
        flex-grow: 1;
        background: orange;
        margin-right: 20px;
        div {
          display: block;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
    }
  }
</style>
<template>
  <div>
    <p>album index.vue</p>
    <div class="photo-list">
      <ul class="photo-list-ul">
        <template v-for="(item, key) in albumList" v-if="key < 5">
          <li :key="key" class="photo-li" @click="showAlbumClk(item, key)" >
            <div :style="{backgroundImage: 'url(' + item.image + ')'}" class="photo-img">
              <!-- 空内容 -->
            </div>
          </li>
        </template>
      </ul>
    </div>
    <Album v-if="isShow" :files="albumList" :index="current" :name="'image'" :close="() => isShow=false">
      <!-- 相册组件 -->
      <!-- name: 图片路径对应展示的字段  -->
      <!-- prefix: 前缀 -->
      <!-- albumList: 数据源 -->
      <!-- current: 当前页 -->
      <!-- close: 关闭的Function-->
    </Album>
  </div>
</template>
<script>
import { getAlbumList } from '@/api/files'
export default {
  components: { },
  data() {
    return {
      albumList: [],
      isShow: false,
      current: 0
    }
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      getAlbumList().then(response => {
        if (Number(response.code) === 200) {
          this.albumList = response.data.items
          console.log(this.albumList)
        }
      })
    },
    showAlbumClk(item, index) {
      console.log(item, index)
      this.current = index
      this.isShow = true
    }
  }
}
</script>
