<script>
/*
 * text for order summary parapgraph
 */

// cart stores
import { useCustomerPlan } from '@/stores/customerPlan.js';

export default {
  name: 'OrderSummary',

  data() {
    return {
      customerPlan: useCustomerPlan().plan,
    };
  },
};
</script>

<template>
  <p class="summary-copy">
    &ldquo;I drink my coffee
    {{ customerPlan.how === 'Capsule' ? 'using' : 'as' }}
    <span class="summary-highlight">{{
      customerPlan.how
        ? customerPlan.how === 'Capsule'
          ? 'Capsules'
          : customerPlan.how
        : '____'
    }}</span
    >, with a
    <span class="summary-highlight">{{
      customerPlan.type ? customerPlan.type : '____'
    }}</span>
    type of bean.
    <span class="summary-highlight">{{
      customerPlan.size ? customerPlan.size : '____'
    }}</span
    >{{ customerPlan.how === 'Capsule' ? '' : ' ground ala '
    }}<span class="summary-highlight">{{
      customerPlan.how === 'Capsule'
        ? ''
        : customerPlan.grind
        ? customerPlan.grind
        : '____'
    }}</span
    >, sent to me
    <span class="summary-highlight">{{
      customerPlan.frequency ? customerPlan.frequency : '____'
    }}</span
    >.&rdquo;
  </p>
</template>

<style lang="scss" scoped>
.summary-copy {
  @include header-4;
  line-height: 1.66;
}

.summary-highlight {
  color: $dark-cyan;
}
</style>
