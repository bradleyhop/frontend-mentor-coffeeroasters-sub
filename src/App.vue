<script>
import AppFooter from './components/persistant/AppFooter.vue';
import AppHeader from './components/persistant/AppHeader.vue';

export default {
  name: 'App',

  components: {
    AppFooter,
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />

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

main {
  padding: 0rem 1.5rem;
}
</style>
