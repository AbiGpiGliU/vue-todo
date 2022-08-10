<template>
  <ul>
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"></todo-item>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
import { mapState } from 'vuex'
export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  computed: {
    ...mapState({ todos: 'todos' }),
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      },
    },
  },
}
</script>

<style scoped lang="less">
ul {
  border-left: 1px solid #767676;
  border-right: 1px solid #767676;
  box-sizing: border-box;
  padding: 0;
  width: 700px;
  margin: 0 10px 10px;
}
</style>