<script>
/*
 * text for order summary parapgraph
 */

export default {
  name: 'OrderSummary',

  props: {
    how: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    grind: {
      type: String,
      required: false, // b/c of 'Capsule'
    },
    frequency: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <p class="summary-copy">
    &ldquo;I drink my coffee
    {{ how === 'Capsule' ? 'using' : 'as' }}
    <span class="summary-highlight">{{
      how ? (how === 'Capsule' ? 'Capsules' : how) : '____'
    }}</span
    >, with a
    <span class="summary-highlight">{{ type ? type : '____' }}</span>
    type of bean.
    <span class="summary-highlight">{{ size ? size : '____' }}</span
    >{{ how === 'Capsule' ? '' : ' ground ala '
    }}<span class="summary-highlight">{{
      how === 'Capsule' ? '' : grind ? grind : '____'
    }}</span
    >, sent to me
    <span class="summary-highlight">{{ frequency ? frequency : '____' }}</span
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
