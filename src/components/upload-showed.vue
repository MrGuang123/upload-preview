<template>
  <div class="upload-preview">
    <input type="file" class="image-file" ref="imageFile" @change="fileChange" :disabled="disabled"
      accept="image/gif,image/png,image/jpeg,image/jpg">
    <slot name="icon">
      <div class="add-icon"></div>
    </slot>
    <h4 class="sub-title">{{subTitle}}</h4>
    <p class="sub-describe">{{subDescribe}}</p>
    <section class="img-wrap" v-show="imgSrc">
      <div class="img-control">
        <span class="control-btn" @click="resetImg">重选</span>
        <span class="control-btn" @click="deleteImg">删除</span>
      </div>
      <div class="img-preview" :style="{backgroundImage: `url(${imgSrc})`}"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UploadPreview',
  props: {
    subTitle: {
      default: '图片上传',
      type: String
    },
    subDescribe: {
      default: '描述信息',
      type: String
    },
    limit: {
      default: 2 * Math.pow(1024, 2),
      type: Number
    },
    imageSrc: {
      default: '',
      type: String
    }
  },
  data() {
    return {
      file: null,
      imgSrc: '',
      disabled: false
    }
  },
  mounted() {
    this.supportFileReader()
    this.imgSrc = this.imageSrc
  },
  methods: {
    fileChange(e) {
      let file = e.target.files[0]
      if (!file) {
        return
      }
      if (file.size > this.limit) {
        console.error('选择的文件超出大小限制')
        return
      }

      this.file = file

      let reader = new FileReader()
      reader.onerror = err => {
        console.error('文件读取失败', err)
      }
      reader.onload = e => {
        this.imgSrc = e.target.result
        this.$emit('change', this.file)
      }
      reader.readAsDataURL(this.file)
    },
    resetImg() {
      this.$refs.imageFile.click()
    },
    deleteImg() {
      this.$refs.imageFile.value = ''
      this.file = null
      this.imgSrc = ''
    },
    supportFileReader() {
      if (typeof FileReader === 'undefined') {
        console.error('当前浏览器不支持FileReader读取文件')
        this.disabled = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.upload-preview {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #ccc;
  .image-file {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .add-icon {
    padding: 6%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    background-image: linear-gradient(0deg, #000, #fff), linear-gradient(0deg, #000, #fff);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px 5px, 5px 30px;
  }
  .sub-describe {
    margin: 0;
  }
  .img-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 5;
    overflow: hidden;
    &:hover {
      .img-control {
        bottom: 0;
      }
    }
    .img-control {
      transition: all 0.5s;
      position: absolute;
      left: 0;
      bottom: -40px;
      width: 100%;
      height: 40px;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .control-btn {
        padding: 5px 12%;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    .img-preview {
      height: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
}
</style>
