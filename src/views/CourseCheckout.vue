<template>
  <div class="checkout">
    <h1>This is the checkout page</h1>
  </div>
  <div>
    <StripeCheckout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  components: {
    StripeCheckout,
  },
  setup() {
    const publishableKey = "pk_test_51NtaDZKgvg6dyKdReQeTRmly31uZeeR2eRGYAtsymrLsr4uqKu15FyqzLnMvZhJckTNWsbajVSCT5PW9y16CgXUO00K4vuUVTG";
    const loading = ref(false);
    const lineItems = [
      {
        price: 'price_1OFeQrKgvg6dyKdRwnkJWIYv', // The id of the one-time price you created in your Stripe dashboard
        quantity: 1,
      },
    ];
    const successURL = 'http://localhost:8080/account';
    const cancelURL = 'http://localhost:8080/checkout';
    const checkoutRef = ref(null);

    const submit = () => {
      // You will be redirected to Stripe's secure checkout page
      checkoutRef.value.redirectToCheckout();
    };

    return {
      publishableKey,
      loading,
      lineItems,
      successURL,
      cancelURL,
      checkoutRef,
      submit,
    };
  },
};
</script>

<style scoped>
.checkout{
    padding-top: 150px;
}

h1 {
    display: flex;
    justify-content: center;
    color: red;
}
</style>