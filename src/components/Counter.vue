<template>
  <div class="counter">
    <h1>VueX 4 Counter App</h1>
    <h2 class="counter-value">{{ counterValue }}</h2>
    <div class="controls">
      <div>
        <button
          @click="subtractFromCounterValue(parseInt(number))"
          class="math subtraction"
        >
          -
        </button>
        <input v-model="number" type="number" />
        <button
          @click="addToCounterValue(parseInt(number))"
          class="math addition"
        >
          +
        </button>
      </div>
      <button @click="addRandomNumber" class="random" type="button">
        Add by Random Number
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Counter',
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    ...mapMutations(['addToCounterValue', 'subtractFromCounterValue']),
    ...mapActions(['addRandomNumber']),
  },
  computed: {
    // https://vuex.vuejs.org/guide/state.html#object-spread-operator
    ...mapState(['counterValue']),
  },
};
</script>

<style>
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.counter .counter-value {
  font-size: 5rem;
}

.counter .controls {
  display: flex;
  flex-direction: column;
}

.counter .controls > div {
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
}

.counter button {
  border: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  outline: none;
}

.counter button.math {
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
}

.counter button.math.subtraction {
  background-color: palevioletred;
}

.counter button.math.addition {
  background-color: palegreen;
}

.counter button.random {
  height: 1.5rem;
  font-size: 1rem;
  background-color: palegoldenrod;
}

input[type='number'] {
  outline: none;
  border: none;
  font-size: 1rem;
  padding: 0;
  text-align: center;
}
</style>
