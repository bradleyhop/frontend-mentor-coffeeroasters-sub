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
