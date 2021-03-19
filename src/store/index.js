import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    counterValue: 10,
    history: [5, 2, 6, 5, 2, 4, 7, 2, 2, 5, 2, 3, 5, 2, 5, 6],
  },
  mutations: {
    addToCounterValue(state, payload) {
      state.counterValue += payload;

      if (state.history[state.history.length - 1] !== state.counterValue) {
        state.history.push(state.counterValue);
      }
    },
    subtractFromCounterValue(state, payload) {
      state.counterValue -= payload;

      if (state.history[state.history.length - 1] !== state.counterValue) {
        state.history.push(state.counterValue);
      }
    },
  },
  actions: {
    async addRandomNumber(context) {
      // Getting a random integer from the endpoint.
      const response = await axios.get(
        'https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new'
      );
      const randomNumber = response.data;

      context.commit('addToCounterValue', randomNumber);
    },
  },
  getters: {
    activeIndexes: (state) => (payload) => {
      let indexes = [];

      state.history.forEach((number, index) => {
        if (number === payload) {
          indexes.push(index);
        }
      });

      return indexes;
    },
  },
  modules: {},
});
