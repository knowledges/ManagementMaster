<!--qiu.bl-->
<style rel="stylesheet/scss" lang="scss" scoped>
  #maps {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: #FFF;
  }
</style>
<template>
  <div id="maps">
    <baidu-map class="bm-view" :center="{lng: '118.779142', lat: '31.981107'}" :zoom="15">
      <!-- map -->
      <!--<bm-view style="width: 100%; height: 100%; flex: 1;"></bm-view>-->
    </baidu-map>
  </div>
</template>
<script>
import BaiduMap from 'BaiduMap'
import BmView from 'BmView'
export default {
  name: 'Map',
  data() {
    return {
      MyLocation: [{
        lng: '118.759319',
        lat: '31.969347',
        title: '牛首坊'
      }],
      coords: [
        {
          lng: '118.783549',
          lat: '31.990869',
          title: '阅城国际花园'
        },
        {
          lng: '118.779142',
          lat: '31.981107',
          title: '东软大楼'
        },
        {
          lng: '118.77444',
          lat: '31.981409',
          title: '新华汇'
        },
        {
          lng: '118.775859',
          lat: '31.971451',
          title: '南京徐工汽车制造有限公司'
        },
        {
          lng: '118.792675',
          lat: '31.981804',
          title: '中兴通讯'
        },
        {
          lng: '118.79197',
          lat: '31.986325',
          title: '江苏舜天凯信贸易有限公司'
        }
      ]
    }
  },
  computed: {
  },
  components: { BaiduMap, BmView },
  created() {},
  mounted() {
  },
  methods: {}
}
</script>
