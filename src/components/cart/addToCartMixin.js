export default {
  methods: {
    addToCart (product) {
      this.$store.dispatch( 'Cart/addProduct' , product );
    }
  }
};
