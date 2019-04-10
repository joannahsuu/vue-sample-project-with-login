<template>
  <div class="page2">
    <div class="title">{{title}}</div>
    <div class="title">我是父組件</div>
    <div class="bottom-block">
      <div v-for="(val, dIndex) in dataList" :key="dIndex" class="list-box" @click="openDialog(dIndex)">
        <ul>
          <li>FIRST_NAME: {{val.first_name}}</li>
          <li>LAST_NAME: {{val.last_name}}</li>
          <li>PHONE_NUM: {{val.phone}}</li>
        </ul>
        <img class="icon-nextpage" src="@/assets/common/images/icon_nextpage.png" alt="next-icon">
      </div>
      <p>子組件傳給父：{{msg}}</p>
    </div>
     <!--
       <dialog-box
        @自定義事件="父方法"
        :props="父數據"></dialog-box> -->
    <dialog-box
      v-show="dialogShow"
      :firstName="firstName"
      :lastName="lastName"
      :phoneNum="phoneNum"
      @to-parent="getDialog"></dialog-box>
  </div>
</template>

<script>
/* 引入子組件 */
import dialogBox from '../components/dialogBox'

export default {
  components: {
    dialogBox
  },
  data () {
    return {
      title: '父組件＆子組件的關係',
      dataList: [],
      dialogShow: false,
      firstName: '',
      lastName: '',
      phoneNum: '',
      msg: '',
      test: 'page'
    }
  },
  created () {
    console.log('created')
    console.log(this)
    console.log('test', this.test)
  },
  mounted () {
    console.log('mounted')
    console.log(this)
    console.log('test', this.test)
    this.initData()
  },
  methods: {
    initData () {
      console.log('page2 - initData')
      this.$http({
        method: 'GET',
        url: '/customers'
      }).then((res) => {
        if (res && (res.status === 200)) {
          this.dataList = res.data
        }
      })
    },
    openDialog (i) {
      console.log(i)
      this.firstName = this.dataList[i].first_name
      this.lastName = this.dataList[i].last_name
      this.phoneNum = this.dataList[i].phone
      this.dialogShow = !this.dialogShow
    },
    getDialog (t) {
      // t 為由子傳給父的數據
      this.dialogShow = false
      console.log('getDialog')
      console.log(t)
      this.msg = t
    }
  }
}
</script>

<style>
.page2 {
  height: calc(100vh - 84px);
  background-color: rgb(243, 243, 243);
}

.page2 > .title {
  height: 35px;
  line-height: 35px;
  font-weight: bolder;
  font-size: 14px;
  padding-left: 12px;
}

.page2 > .bottom-block > .list-box {
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

.page2 > .bottom-block > .list-box ul {
  list-style-type: none;
  padding-left: 12px;
}

.page2 > .bottom-block > .list-box > .icon-nextpage {
  width: 23px;
  height: 23px;
  position: absolute;
  right: 8px;
  top: calc(50% - 8px);
}
</style>
