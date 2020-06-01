<template>
  <div class="container mt-4">
    <div v-if="mostrarVenta > 0" class="jumbotron jumbotron-fluid border border-secondary rounded">
      <div class="container">
        <h1 class="display-4">Total Venta:</h1>
        <p class="lead text-center">{{mostrarVenta | formato}} CLP</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'HelloWorld',
    computed: {
    ...mapGetters(['mostrarVenta'])
  },

}
</script>

<style scoped>
</style>
