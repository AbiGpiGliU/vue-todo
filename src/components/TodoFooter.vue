<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll"/>
      <span>已完成:{{doneNum}}/全部:{{todos.length}}</span>
    </label>
    <div class="btn">
        <button @click="clearAllDoneTodo">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'TodoFooter',
  computed:{
    isAll(){
      return this.doneNum === this.todos.length
    },
    ...mapState({todos:'todos'}),
    ...mapGetters({doneNum:'doneNum'})
  },
  methods:{
    checkAll(e){
      this.$store.dispatch('checkAll',e.target.checked)
    },
    clearAllDoneTodo(){
      this.$store.dispatch('clearAllDoneTodo')
    }
  }
}
</script>

<style scoped lang="less">
.todo-footer {
  margin: 0 auto;
  width: 700px;
  height: 44px;
  line-height: 44px;
  .btn {
    float: right;
  }
  label {
    cursor: pointer;
    input {
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
</style>