import UploadPreview from './components/upload-preview.vue'

const install = Vue => {
  if (install.installed) return
  Vue.component('UploadPreview', UploadPreview)
}

if (window && window.Vue) {
  install(window.Vue)
}

export default {
  install
}