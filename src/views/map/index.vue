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
    <!-- Map Dom -->
  </div>
</template>
<script>
import BaiduMap from 'BaiduMap'
// import MarkerClusterer from 'BaiduMap.markerclusterer'
export default {
  name: 'Map',
  data() {
    return {}
  },
  computed: {
  },
  created() {},
  mounted() {
    console.log(BaiduMap)
//    console.log (MarkerClusterer)
    var map = new BaiduMap.Map('maps') // 创建地图实例
    var point = new BaiduMap.Point(118.779102, 31.981199) // 创建中心点坐标
    map.centerAndZoom(point, 16) // 初始化地图，设置中心点坐标和地图级别

    var marker = new BaiduMap.Marker(point) // 创建标注
    map.addOverlay(marker) // 将标注添加到地图中

    map.enableScrollWheelZoom() //启用滚轮放大缩小
    map.addControl(new BaiduMap.ScaleControl()) // 比例尺
  },
  methods: {}
}
</script>
