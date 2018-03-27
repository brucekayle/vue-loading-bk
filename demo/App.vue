<template>
  <div>
    <!-- 想要在区域内显示，请把父元素的position设置为非static值 -->
    <div style="background-color:red;height:300px;width:500px;position:relative">
    <Loading :size="60" v-show="true" :type="type" location="inner-center"></Loading>
    </div>
    <button @click="nextType">NEXT TYPE</button>
    
  </div>
</template>

<script>
import Loading from '../src/Loading.vue'
export default {
  name: 'dashboard',
  components: {
    Loading
  },
  data () {
  	return {
  	  type: 'circle',
  	  types: ['circle', 'circle10', 'letterCube', 'mikepad', 'hourGlass'],
  	  currentType: 0
  	}
  },
  methods: {
  	nextType () {
  		if (this.currentType === this.types.length - 1) {
  			this.currentType = -1
  		}
  		this.currentType = this.currentType + 1
  	  	this.type = this.types[this.currentType]
  	  	
  	  	console.log(this.type)
  	}
  }
}
</script>
<style>

</style>
