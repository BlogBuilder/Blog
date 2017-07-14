import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


import list from '../demo/list.json'

//Vuex实例
const store = new Vuex.Store({
    state: {
        // count: 0,
        // todos: [
        //     {id: 1, text: 'A', done: true},
        //     {id: 2, text: 'B', done: false}
        // ],
        article_list: []
    },
    mutations: {
        setArticles(list){

        },
        // increment (state) {
        //     state.count++;
        // }
    },
    getters: {
        // doneTodos: state => {
        //     return state.todos.filter(todo => todo.done)
        // },
        // doneTodosCount: (state, getters) => {
        //     return getters.doneTodos.length
        // }
    },
    actions: {
        fetchArticles(){
            store.commit('setArticles', list.results);

            // var me = this;
            // Vue.http.get("../demo/list.json").then(response => {
            //     var data = response.data;
            //     me.commit('setArticles', data.results);
            // }, response => {
            //     alert("失败");
            // });
        }
    }
});

module.exports = store;