<template>
  <div class="history">
    <label for="searchTerm">Search in History</label>
    <input
      v-model="searchTerm"
      name="searchTerm"
      type="number"
      placeholder="Number"
    />
    <div class="items">
      <p
        :class="
          activeIndexes(parseInt(searchTerm)).includes(index) && 'highlighted'
        "
        v-for="(item, index) in history"
        :key="index"
      >
        {{ item }}
      </p>
    </div>
    <p>
      <small>Indexes: {{ activeIndexes(parseInt(searchTerm)) }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'History',
  data() {
    return {
      searchTerm: 0,
    };
  },
  computed: {
    ...mapState(['history']),
    ...mapGetters(['activeIndexes']),
  },
};
</script>

<style>
.history {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;
}

.history label {
  color: paleturquoise;
  font-size: 1.2rem;
}

.history .items {
  display: flex;
  width: 20rem;
  max-height: 300px;
  overflow: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  margin: 0 auto;
}

.history .items > p {
  margin: 0.7rem;
}

.history input[type='number'] {
  outline: none;
  border: none;
  font-size: 1rem;
  height: 2rem;
  padding: 0;
  text-align: center;
}
</style>
