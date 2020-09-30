import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//Vuu używaj biblioteki Vuex

export default new Vuex.Store({
    state: {
        counter: 0,
    },
    mutations: {
        adds(state){
            state.counter++;//zwiększamy nasz stan licznika o 1
        },
        subtract(state){
            state.counter--;//zmniejszamy nasz stan licznika o 1
        }
    },
    actions: {//akcje które będą wywoływały mutacje
        increaseCounter({commit}){//zwiększ licznik
            commit('adds');
        },
        decreaseCounter({commit}){//zmniejsz licznik
            commit('subtract');
        }
    },
    getters:{
        downloadCounter: (state)=>{//pobierz licznik
            return state.counter;
        }
    }
})