<template>
  <div class="animated fadeIn">
    <Loading :size="60" v-show="true" type="circle" location="bottom-right"></Loading>
  </div>
</template>

<script>
import Loading from '../src/Loading.vue'
export default {
  name: 'dashboard',
  components: {
    Loading
  }
}
</script>
<style>

</style>
