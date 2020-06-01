<template>
  <div class="container">
    <h1>Productos</h1>
    <div class="">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Activo</th>
            <th>Comprar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in stockProductos" :key="index">
            <th>{{item.id}}</th>
            <td>{{item.name}}</td>
            <td>{{item.stock}}</td>
            <td>{{item.precio | formato}}</td>
            <td>{{item.activo}}</td>
            <td><button class="btn btn-primary" @click="comprarProducto(item)">Comprar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <hello-world></hello-world>
    <hr>
    <button @click="buscarInfo">Traer informacion</button>
    <p v-if="valido">{{info}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      info: [],
      valido: false,
    }
  },
  components: { HelloWorld },
  computed: {
/*     traerProductos(){
      return this.$store.getters.stockProductos;
    } */
    ...mapGetters(['stockProductos'])
  },
  methods: {
    buscarInfo(){
      this.valido = !this.valido;
      this.info = this.$store.getters.stockProductos;
    },
    comprarProducto(producto){
      this.$store.dispatch('ventaProductoMutation',producto);
    }
  },
}
</script>

<style>

</style>
