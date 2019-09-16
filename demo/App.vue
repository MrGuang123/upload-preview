<template>
  <div id="app">
    <img alt="Vue logo" src="./logo.png">
    <div class="com-wrap">
      <upload-showed :imageSrc="logo"
      ></upload-showed>
    </div>
  </div>
</template>

<script>
import UploadShowed from '../src/components/upload-showed.vue'
import logo from './logo.png'

export default {
  name: 'app',
  data() {
    return {
      logo: logo
    }
  },
  components: {
    UploadShowed
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.com-wrap {
  width: 800px;
  height: 450px;
  margin: auto;
}
</style>
