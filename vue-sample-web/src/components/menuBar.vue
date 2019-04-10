<template>
  <div v-if="this.$store.state.menu" class="menu-bar">
    <div class="tab-item">
      <router-link tag="div" to="/home">
        <img src="@/assets/menuBar/icon_home.png" alt="home">
        <span>home</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link tag="div" to="/page2">
        <img src="@/assets/menuBar/icon_button.png" alt="setting">
        <span>page 2</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link tag="div" to="/pageIView">
        <img src="@/assets/menuBar/icon_button.png" alt="setting">
        <span>page 3</span>
      </router-link>
    </div>
    <div class="tab-item">
      <img src="@/assets/menuBar/icon_button.png" alt="setting">
      <span>page 4</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme1: 'light'
    }
  }
}
</script>

<style>
.menu-bar {
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4px;
}

.menu-bar > .tab-item {
  width: 120px;
  height: 100%;
  position: relative;
}

.menu-bar > .tab-item > div {
  width: 100%;
  height: 100%;
}

.menu-bar > .tab-item img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.menu-bar > .tab-item span {
  width: 100%;
  text-align: center;
  display: inline-block;
  position: absolute;
  bottom: 0;
}

.menu-bar .tab-item .router-link-active img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.menu-bar > .tab-item > .router-link-exact-active > span {
  width: 100%;
  text-align: center;
  display: inline-block;
  position: absolute;
  bottom: 0;
  color: #3abdff;
  font-weight: 800;
}

.menu-bar > .tab-item > .router-link-exact-active > span::before {
  content: '';
  position: absolute;
  width: 40%;
  border-bottom: 2px solid #3abdff;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;
}
</style>
