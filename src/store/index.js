import Vue from 'vue'

import Vuex from 'vuex'



const actions = {
    addTodo(context,value){
        context.commit('ADDTODO',value)
    },
    deleteTodo(context,value){
        context.commit('DELETETODO',value)
    },
    checkTodo(context,value){
        context.commit('CHECKTODO',value)
    },
    editTodo(context,value){
        context.commit('EDITTODO',value)
    },
    checkAll(context,value){
        context.commit('CHECKALL',value)
    },
    clearAllDoneTodo(context){
        context.commit('CLEARALLDONETODO')
    }
}

const mutations = {
    ADDTODO(state,value){
        state.todos.unshift(value)
    },
    DELETETODO(state,value){
        state.todos = state.todos.filter(todo => todo.id !== value)
    },
    CHECKTODO(state,value){
        state.todos.forEach(todo => {
            if(todo.id === value){
                todo.done = !todo.done
            }
        });
    },
    EDITTODO(state,value){
        state.todos.forEach((todo)=>{
            if(todo.id === value.id){
                todo.title = value.title
            }
        })
    },
    CHECKALL(state,value){
        state.todos.forEach(todo => {
            todo.done = value
        });
    },
    CLEARALLDONETODO(state){
        state.todos = state.todos.filter(todo=> todo.done === false)
    }
}

const state = {
    todos:JSON.parse(localStorage.getItem("todos")) || [],
}

const getters = {
    doneNum(){
        return state.todos.filter(todo=> todo.done === true).length
    }
}
Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})