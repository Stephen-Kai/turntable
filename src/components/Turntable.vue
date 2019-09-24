<template>
  <div id="app">
    <LuckDraw
      v-model="currIndex"
      :awards="awards"
      :rate="rate"
      @start="handleStart"
      @end="handleEnd"
      :btnText="btnText"
      :textFontSize="textFontSize"
      :lineHeight="lineHeight"
      :textColor="textColor"
    />
    <div class="reset">
      <button class="reset-btn" @click="resetData">重置</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currIndex: 0,
      awards: [
        { name: '离线平台', color: '#368ff7' },
        { name: '实时平台', color: '#3d8f92' },
        { name: 'Kafka', color: '#f9efbb' },
        { name: 'Hadoop', color: '#ffa384' }
      ],
      rate: 40,
      btnText: '开始',
      textFontSize: '23px',
      lineHeight: 40,
      textColor: '#1d548e',
    }
  },
  methods: {
    handleStart () {
      this.currIndex = Math.floor(Math.random() * this.awards.length)
      console.log('current：'+ this.currIndex)
    },
    handleEnd (index) {
      console.log(index)
      alert('轮到：' + this.awards[this.currIndex].name)
      this.awards.splice(this.currIndex, 1)
      this.rate = this.rate - 10
    },
    resetData() {
      this.awards = [
        { name: '离线平台', color: '#368ff7' },
        { name: '实时平台', color: '#3d8f92' },
        { name: 'Kafka', color: '#f9efbb' },
        { name: 'Hadoop', color: '#ffa384' }
      ],
      this.currIndex = 0
      this.rate = 40
    }
  }
}
</script>

<style>
  .reset {
    margin: 20px auto;
  }
  .reset-btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    padding: 10px 20px;
    -webkit-appearance: button;
  }

  .reset-btn:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
</style>>