<template>
  <div id="app">
    <img alt="Vue logo" src="./logo.png">
    <div class="com-wrap">
      <upload-preview :imageSrc="logo"
      ></upload-preview>
    </div>
  </div>
</template>

<script>
import UploadPreview from '../src/components/upload-preview.vue'
import logo from './logo.png'

export default {
  name: 'app',
  data() {
    return {
      logo: logo
    }
  },
  components: {
    UploadPreview
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
