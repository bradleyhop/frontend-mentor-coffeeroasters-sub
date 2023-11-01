<script>
/*
 * modal for checkout
 */

// order summary text
import OrderSummary from '@/components/OrderSummary.vue';
import AppButton from '@/components/AppButton.vue';

export default {
  name: 'CheckoutModal',

  components: {
    OrderSummary,
    AppButton,
  },

  props: {
    show: Boolean,
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header-container" @click="$emit('close')">
          <h1 class="modal-header">Order Summary</h1>
          <!-- Not sure how user is supposed to close modal without checking
          out?
          <button class="modal-default-button" @click="$emit('close')">
            OK
          </button>
          -->
        </div>

        <div class="modal-body">
          <!-- won't work until state implemented -->
          <OrderSummary class="modal-order-summary" />

          <p class="info-text-copy">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
        </div>

        <div class="modal-checkout-button-container">
          <AppButton
            text="Checkout - $ / mo"
            @click="$emit('close')"
            class="modal-checkout-button"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  margin: auto 1.5rem;
  background-color: $light-cream;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  z-index: 1;
}

.modal-header-container {
  background-color: $dark-grey-blue;
  border-radius: 0.5rem 0.5rem 0 0;
  min-height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.modal-header {
  @include header-3;
  color: $white;
}

.modal-body {
  margin: 20px 0;
  margin: 0 1.5rem;
}

.modal-order-summary {
  color: $grey;
}

.info-text-copy {
  @include app-body;
  color: $dark-grey-blue;
  margin-bottom: 1.5rem;
}

.modal-default-button {
  color: white;
  right: 0;
  top: 0;
}

.modal-checkout-button-container {
  margin: 0 1.5rem 1.5rem 1.5rem;
}

.modal-checkout-button {
  text-align: center;
  width: 100%;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}
</style>
