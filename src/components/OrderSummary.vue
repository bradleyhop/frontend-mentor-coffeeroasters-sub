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
      customerPlan: useCustomerPlan(),
    };
  },
};
</script>

<template>
  <p class="summary-copy">
    &ldquo;I drink my coffee
    {{ customerPlan.plan.how === 'Capsule' ? 'using' : 'as' }}
    <span class="summary-highlight">{{
      customerPlan.plan.how
        ? customerPlan.plan.how === 'Capsule'
          ? 'Capsules'
          : customerPlan.plan.how
        : '____'
    }}</span
    >, with a
    <span class="summary-highlight">{{
      customerPlan.plan.type ? customerPlan.plan.type : '____'
    }}</span>
    type of bean.
    <span class="summary-highlight">{{
      customerPlan.plan.size ? customerPlan.plan.size : '____'
    }}</span
    >{{ customerPlan.plan.how === 'Capsule' ? '' : ' ground ala '
    }}<span class="summary-highlight">{{
      customerPlan.plan.how === 'Capsule'
        ? ''
        : customerPlan.plan.grind
        ? customerPlan.plan.grind
        : '____'
    }}</span
    >, sent to me
    <span class="summary-highlight">{{
      customerPlan.plan.frequency ? customerPlan.plan.frequency : '____'
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
