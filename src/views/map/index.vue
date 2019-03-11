<!--qiu.bl-->
<style rel="stylesheet/scss" lang="scss" scoped>
  #maps {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: #FFF;
  }
  .bm-view {
    width: 100%;
    height: 620px;
  }
</style>
<template>
  <div id="maps">
    <baidu-map :center="{lng: '118.779142', lat: '31.981107'}" :zoom="15" class="bm-view">
      <!-- map -->
      <bm-view style="width: 100%; height: 100%; flex: 1;"> <!-- solt --> </bm-view>
      <bm-scale :anchor="'BMAP_ANCHOR_BOTTOM_LEFT'" :offset="{width: 0, height: 50}"> <!--比例尺--></bm-scale>
      <bm-navigation :anchor="'BMAP_ANCHOR_TOP_LEFT'" :type="'BMAP_NAVIGATION_CONTROL_LARGE'"><!--导航--></bm-navigation>
      <bm-marker :position="{lng: '118.779142', lat: '31.981107', title: '东软大楼'}" :loffset="{width: 15, height: -15}" :label-style="labelStyle" :animation="'BMAP_ANIMATION_DROP'" @click="markerInfo"><!--坐标--></bm-marker>
    </baidu-map>
  </div>
</template>
<script>
export default {
  name: 'Map',
  components: {},
  data() {
    return {
      labelStyle: {
        'box-shadow': '0 0 5px #000',
        'border': '0px solid #000',
        'border-radius': '2px',
        'backgroundColor': 'rgba(0, 0, 0, 0.9)',
        'color': '#FFF',
        'padding': '6px'
      },
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
  created() {},
  mounted() {
  },
  methods: {
    markerInfo(item) {
      console.log(item)
    }
  }
}
</script>
