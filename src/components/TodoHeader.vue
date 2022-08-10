<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入任务内容，按回车确认" v-model="title" @keyup.enter="addTodo">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'TodoHeader',
    data(){
      return {
        title:''
      }
    },
    methods:{
      addTodo(){
        if(!this.title.trim()){
          return
        }
        const todoObj = {id:nanoid(),title:this.title.trim(),done:false}
        this.$store.dispatch('addTodo',todoObj)
        this.title = ''
      }
    }
}
</script>

<style scoped lang="less">
.todo-header{
    input{
        box-sizing: border-box;
        width: 700px;
        height: 44px;
        margin: 10px 10px;
    }
}
</style>