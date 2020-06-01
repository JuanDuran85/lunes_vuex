import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalVentas: 0,
    productos: [
      {id: '01',name:'Guitarra Eléctrica', stock: "5", precio: "830000",activo: false},
      {id: '02',name:'Bajo Eléctrico', stock: "2", precio: "570000", activo: true},
      {id: '03',name:'Teclado Electrónico', stock: "10", precio: "900000", activo: true},
    ]
  },
  getters: {
    stockProductos(state ) {
      return state.productos.filter((result) => {return result.stock > 0});
    },
    mostrarVenta(state){
      return state.totalVentas;
    }
  },
  mutations: {
    venderProducto(state,productoVendido){
      state.productos.forEach(producto => {
        if (producto.id == productoVendido.id){
          producto.stock--;
          state.totalVentas += parseFloat(productoVendido.precio)
        }
      })
    }
  },
  actions: {
    ventaProductoMutation(context,productoVendido){
      context.commit('venderProducto',productoVendido)
    }
  }
})