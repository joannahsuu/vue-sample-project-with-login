<template>
  <div class="home">
    <div class="title">{{title}}</div>
    <div class="bottom-block">
      <div v-for="(val, dIndex) in dataList" :key="dIndex" class="list-box" @click="goHomeInfo(val.id)">
        <ul>
          <li>FIRST_NAME: {{val.first_name}}</li>
          <li>LAST_NAME: {{val.last_name}}</li>
          <li>PHONE_NUM: {{val.phone}}</li>
        </ul>
        <img class="icon-nextpage" src="@/assets/common/images/icon_nextpage.png" alt="next-icon">
      </div>
      <!-- <button @click="changeColor">換膚</button> -->
    </div>
    <account-dialog v-show="false"></account-dialog>
  </div>
</template>
<script>
import accountDialog from './home/components/accountDialog'

export default {
  components: {
    accountDialog
  },
  data () {
    return {
      title: 'HOME LIST',
      dataList: []
    }
  },
  created () {
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      console.log('initData')
      this.$http({
        method: 'GET',
        url: '/customers'
      }).then((res) => {
        console.log(res)
        if (res && (res.status === 200)) {
          this.dataList = res.data
        }
        // request 發完，做跳轉頁面
        // this.$router.push({
        //   name: 'page2'
        // })
      })
    },
    goHomeInfo (id) {
      console.log('goHomeInfo')
      console.log(id)
      this.$router.push({
        name: 'homeInfo',
        params: {
          id: id
        }
      })
    },
    getStr () {
      console.log('getStr')
    },
    changeColor () {
      console.log('changeColor')
    }
  }
}
</script>

<style>
.home {
  height: calc(100vh - 84px);
  background-color: rgb(243, 243, 243);
}

.home > .title {
  height: 35px;
  line-height: 35px;
  font-weight: bolder;
  font-size: 14px;
  padding-left: 12px;
}

.home > .bottom-block > .list-box {
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 96%;
  display: block;
  margin: 5px auto;
  background-repeat: no-repeat;
  background-size: 7px 100%;
  border-radius: 5px;
  background: #ffffff;
  -webkit-box-shadow: 3px 3px 5px 0px #e0e0e0;
  box-shadow: 3px 3px 5px 0px #e0e0e0;
}

.home > .bottom-block > .list-box ul {
  list-style-type: none;
  padding-left: 12px;
}

.home > .bottom-block > .list-box > .icon-nextpage {
  width: 23px;
  height: 23px;
  position: absolute;
  right: 8px;
  top: calc(50% - 8px);
}
</style>
