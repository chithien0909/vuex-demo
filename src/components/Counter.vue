<template>
  <div>
    <button
      class="btn btn-primary"
      @click="increment({by: 10})">Increment</button>
    <button
      class="btn btn-primary"
      @click="decrement({
      by: 10})"
    >Decrement</button>
  </div>
</template>

<script>
    import * as types from '../store/types';
    export default {
      methods: {
        increment: function (payload) {
          this.$store.dispatch(types.COUNTER_INCREMENT, payload);
        },
        decrement: function (payload) {
          this.$store.dispatch(types.COUNTER_DECREMENT, payload);
        }
      }
    }
</script>

<style scoped>

</style>
