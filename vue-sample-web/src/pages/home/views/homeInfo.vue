<template>
  <div class="homeInfo">
    <div class="top-block">
      <img class="icon-nextpage" src="@/assets/common/images/icon_nextpage.png" alt="next-icon" @click="goBack()">
    </div>
    <div class="bottom-block">
      由前頁所獲取的參數：{{customerId}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      customerId: ''
    }
  },
  mounted () {
    /* 隱藏 menuTab */
    this.$store.dispatch('hideMenu')
    console.log(this.$route.params)
    this.customerId = this.$route.params.id
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.homeInfo {
  width: 100vw;
  height: 100vh;
  background: #f3f3f3;
}

.homeInfo > .top-block {
  width: 100%;
  height: 50px;
  position: relative;
}

.homeInfo > .top-block > .icon-nextpage {
  width: 23px;
  height: 23px;
  position: absolute;
  left: 8px;
  top: calc(50% - 8px);
  transform: rotate(180deg);
}
</style>
