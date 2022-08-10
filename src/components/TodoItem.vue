<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span v-show="!isEdit">{{todo.title}}</span>
      <input type="text" v-show="isEdit" @blur="editTodo(todo,$event)" :value="title" ref="inputTitle">
    </label>
    <div class="li-right">
      <button @click="handleEdit(todo)">编辑</button>
      <button @click="handleDelete(todo.id)">删除</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props:['todo'],
  data(){
    return {
      isEdit:false,
      title:''
    }
  },
  methods:{
    handleDelete(id){
      if(confirm('确定删除吗?')){
        this.deleteTodo(id)
      }
    },
    deleteTodo(id){
      this.$store.dispatch('deleteTodo',id)
    },
    editTodo(todo,e){
      if(!e.target.value.trim()){
        return alert('输入不能为空')
      }
      todo.title = e.target.value.trim()
      this.$store.dispatch('editTodo',todo)
      this.isEdit = false
    },
    handleCheck(id){
      this.$store.dispatch('checkTodo',id)
    },
    handleEdit(todo){
      this.isEdit = true
      this.title = todo.title
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    }
  }
}
</script>

<style scoped lang="less">
li {
  &:first-child {
    border-top: 1px solid #767676;
  }
  background-color: #fff;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid #767676;
  label {
    display: inline-block;
    position: relative;
    height: 44px;
    cursor: pointer;
    input {
      position: absolute;
      bottom: 14px;
      display: inline-block;
      margin: 0px 4px 0;
      cursor: pointer;
    }
    span {
      display: inline-block;
      width: 500px;
      margin-left: 30px;
      overflow: hidden;
    }
  }
  .li-right {
    float: right;
    button {
      margin: 0 5px;
    }
  }
}
</style>