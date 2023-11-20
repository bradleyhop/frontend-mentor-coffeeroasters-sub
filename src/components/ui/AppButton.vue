<script>
export default {
  name: 'AppButton',

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button class="app-button">{{ text }}</button>
</template>

<style lang="scss" scoped>
.app-button {
  background-color: $dark-cyan;
  border-radius: 0.375rem;
  cursor: pointer;
  color: $light-cream;
  font-family: 'Fraunces 9pt Black', serif;
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 1.39;
  padding: 0.94rem 1.94rem 1rem 1.94rem;

  &:hover {
    background-color: $light-cyan;
  }

  &:disabled {
    background-color: $light-grey;
    cursor: not-allowed;
  }
}
</style>
