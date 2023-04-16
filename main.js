const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeCart(id) {
            const index = this.cart.indexOf(id);
            if (index > -1) { // only splice array when item is found
                this.cart.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
    }
})
  