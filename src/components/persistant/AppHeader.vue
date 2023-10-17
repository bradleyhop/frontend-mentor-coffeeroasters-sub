<script>
import MobileNav from '@/components/menu/MobileNav.vue';

export default {
  name: 'AppHeader',

  components: {
    MobileNav,
  },
};
</script>

<template>
  <header class="app-header">
    <img
      :src="`./src/assets/img/shared/desktop/logo.svg`"
      alt="coffeeroasters logo"
      class="header-logo"
    />
    <div class="mobile-nav">
      <MobileNav />
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  margin: 2rem 1.5rem 2.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logo {
  height: 1.125rem;
}

.mobile-nav {
  display: block;

  // placeholder for non-mobile view
}
</style>
