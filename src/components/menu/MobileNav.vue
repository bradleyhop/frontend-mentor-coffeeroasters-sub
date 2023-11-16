<script>
export default {
  name: 'AppHeader',

  data() {
    return {
      toggleMenu: false, // state for menu toggle
    };
  },
};
</script>

<template>
  <div class="mobile-btn-container">
    <button @click="toggleMenu = !toggleMenu" class="header-btn">
      <img
        v-if="!toggleMenu"
        :src="`./img/shared/mobile/icon-hamburger.svg`"
        alt="mobile menu open"
        class="mobile-btn-img"
      />
      <img
        v-else
        :src="`./img/shared/mobile/icon-close.svg`"
        alt="mobile menu close"
        class="mobile-btn-img"
      />
    </button>
  </div>
  <nav
    class="mobile-nav-container"
    :class="toggleMenu ? 'active-mobile-menu' : 'hide-mobile-menu'"
  >
    <ul class="mobile-nav">
      <li class="mobile-nav-link">
        <RouterLink to="/" @click="toggleMenu = !toggleMenu">Home</RouterLink>
      </li>
      <li class="mobile-nav-link">
        <RouterLink to="/about" @click="toggleMenu = !toggleMenu"
          >About Us</RouterLink
        >
      </li>
      <li class="mobile-nav-link">
        <RouterLink to="/createplan" @click="toggleMenu = !toggleMenu"
          >Create Your Plan</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.mobile-btn-container {
  height: 1.1rem;
}

.header-btn {
  cursor: pointer;
}

.mobile-nav-container {
  background: linear-gradient(
    180deg,
    #fefcf7 50%,
    rgba(254, 252, 247, 0.5) 100%
  );
  position: absolute;
  /* position over body content */
  top: 5.55rem;
  min-width: 100vw;
  min-width: 100dvw;
  overflow: hidden;
  left: 0;
  transition: all 0.3s;

  &.hide-mobile-menu {
    height: 0vh;
    height: 0dvh;
  }

  &.active-mobile-menu {
    height: 90vh;
    height: 90dvh;
  }
}

.mobile-nav {
  margin-top: 2.5rem;
  text-align: center;
}

.mobile-nav-link {
  color: $dark-grey-blue;
  font-family: 'Fraunces 9pt Black', serif;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.33;
  margin-bottom: 2rem;
}
</style>
