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
  <button @click="toggleMenu = !toggleMenu" class="header-btn">
    <img
      :src="`./src/assets/img/shared/mobile/icon-hamburger.svg`"
      v-if="!toggleMenu"
      alt="mobile menu"
      class="header-btn-img"
    />
    <img
      :src="`./src/assets/img/shared/mobile/icon-close.svg`"
      v-else
      alt="mobile menu"
      class="header-btn-img"
    />
  </button>
  <nav v-if="toggleMenu" class="mobile-nav-container">
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
        <RouterLink to="/plans" @click="toggleMenu = !toggleMenu"
          >Create Your Plan</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.header-btn {
  cursor: pointer;
}

.mobile-nav-container {
  min-height: 36rem;
  min-width: 100%;
  background: linear-gradient(
    180deg,
    #fefcf7 50%,
    rgba(254, 252, 247, 0.5) 100%
  );
  position: absolute;
  /* position over body content */
  top: 5.6rem;
  left: 0;
}

.mobile-nav {
  margin-top: 2.5rem;
  text-align: center;
}

.mobile-nav-link {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: $dark-grey-blue;
  font-weight: 900;
  line-height: 1.33;
}
</style>
