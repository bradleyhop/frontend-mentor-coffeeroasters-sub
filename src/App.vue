<script>
import AppFooter from './components/persistant/AppFooter.vue';

export default {
  name: 'App',

  components: {
    AppFooter,
  },
};
</script>

<template>
  <main>
    <RouterView />
  </main>

  <AppFooter />
</template>

<style lang="scss">
body {
  background-color: $light-cream;
  color: $dark-grey-blue;
}
</style>
