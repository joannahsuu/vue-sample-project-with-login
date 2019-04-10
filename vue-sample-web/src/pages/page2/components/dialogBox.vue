<template>
  <div class="dialog-box">
    <div class="alert-box">
      <div class="dialog-title">
        我是子組件
      </div>
      <div class="dialog-content">
        父組件傳過來的值：<br>
        <span>firstName：{{firstName}}</span><br>
        <span>lastName：{{lastName}}</span><br>
        <span>phoneNum：{{phoneNum}}</span>
      </div>
      <div class="dialog-btn" @click="btnClick">
        <span>确定</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    phoneNum: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      test: 'dialog'
    }
  },
  methods: {
    btnClick () {
      console.log('btnClick')
      // this.$emit('要觸發的事件名稱', 子傳給父的數據);
      this.$emit('to-parent', 'hi from dialogBox.vue')
    }
  }
}
</script>

<style>
.dialog-box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  right: 0;
}

.dialog-box > .alert-box {
  width: 298px;
  min-height: 149px;
  background: #fff;
  text-align: center;
  font-size: 16px;
  position: absolute;
  top: calc((100vh - 149px) / 2);
  left: calc((100vw - 298px) / 2);
  border-radius: 10px;
}

.dialog-box > .alert-box > .dialog-title {
  font-weight: bold;
  color: #292929;
  padding: 22px 0 0 0;
}

.dialog-box > .alert-box > .dialog-content {
  padding-top: 22px;
  padding-bottom: 22px;
}

.dialog-box > .alert-box > .dialog-btn {
  height: 44px;
  line-height: 44px;
  font-weight: bold;
  color: #3ea4ff;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #d1d1d1;
}
</style>
