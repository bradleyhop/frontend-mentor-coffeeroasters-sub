<script>
import MobileNav from '@/components/menu/MobileNav.vue';
import ListNav from '@/components/menu/ListNav.vue';

export default {
  name: 'AppHeader',

  components: {
    MobileNav,
    ListNav,
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
    <div class="list-nav-container">
      <ListNav />
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  margin: 2rem 1.5rem 2.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include tablet-breakpoint {
    margin: 2.5rem 2.5rem 2.5rem 3.31rem;
  }
}

.list-nav-container {
  display: none;

  @include tablet-breakpoint {
    display: block;
  }
}

.header-logo {
  height: 1.125rem;
}

.mobile-nav {
  display: block;

  @include tablet-breakpoint {
    display: none;
  }
}
</style>
