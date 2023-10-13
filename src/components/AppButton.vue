<script>
export default {
  name: 'AppButton',

  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <button class="app-button">{{ text }}</button>
</template>

<style lang="scss">
.app-button {
  height: 3.5rem;
  background-color: $dark-cyan;
  border-radius: 0.375rem;
  cursor: pointer;
  color: $light-cream;
  font-family: Fraunces;
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 1.39;

  &:hover {
    background-color: $light-cyan;
  }

  &:disabled {
    background-color: $light-grey;
    cursor: not-allowed;
  }
}
</style>
