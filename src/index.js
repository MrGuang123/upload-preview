import UploadShowed from './components/upload-showed.vue'

const install = Vue => {
  if (install.installed) return
  Vue.component('UploadShowed', UploadShowed)
}

if (window && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
