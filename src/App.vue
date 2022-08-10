<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
}
</script>

<style lang="less">
#app {
  border: 1px solid #767676;
  margin: 20px auto 0;
  width: 720px;
  background-color: #fff;
}
</style>
