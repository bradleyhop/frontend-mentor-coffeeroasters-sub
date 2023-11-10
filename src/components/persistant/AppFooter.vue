<script>
// SVG icons; inline for styling
import IconFacebook from '@/components/svg/IconFacebook.vue';
import IconTwitter from '@/components/svg/IconTwitter.vue';
import IconInsta from '@/components/svg/IconInsta.vue';

export default {
  name: 'AppFooter',

  components: {
    IconFacebook,
    IconTwitter,
    IconInsta,
  },
};
</script>

<template>
  <footer class="footer-container">
    <img
      :src="`./src/assets/img/shared/desktop/logo-white-text.svg`"
      class="footer-logo"
      alt="logo"
    />
    <div class="footer-nav-container">
      <RouterLink to="/" class="footer-nav-link"> HOME </RouterLink>
      <RouterLink to="/about" class="footer-nav-link"> ABOUT </RouterLink>
      <RouterLink to="/createplan" class="footer-nav-link"
        >CREATE YOUR PLAN
      </RouterLink>
    </div>
    <div class="footer-socials-container">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer nofollow"
      >
        <IconFacebook class="footer-social-link" />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noreferrer nofollow"
      >
        <IconTwitter class="footer-social-link" />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer nofollow"
      >
        <IconInsta class="footer-social-link" />
      </a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-container {
  background-color: $dark-grey;
  margin: 0 1.5rem 4.5rem 1.5rem;
  text-align: center;
}

.footer-logo {
  height: 1.5rem;
  margin: 3.38rem auto 3.03rem auto;
}

.footer-nav-container {
  display: flex;
  padding-right: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3.03rem;

  @include tablet-breakpoint {
    flex-direction: row;
  }
}

.footer-nav-link {
  color: $grey;
  font-family: 'Barlow', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05769rem;
  line-height: 1.25;
  text-transform: uppercase;

  &:hover {
    color: $light-cream;
  }
}

.footer-socials-container {
  width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  & a {
    margin-bottom: 3.38rem;
  }
}

.footer-social-link {
  fill: $light-cream;

  &:hover {
    fill: $pale-orange;
  }
}
</style>
