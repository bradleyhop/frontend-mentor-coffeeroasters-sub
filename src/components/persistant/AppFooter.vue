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
  <footer>
    <div class="footer-container">
      <div class="footer-logo-container">
        <img
          :src="`./img/shared/desktop/logo-white-text.svg`"
          class="footer-logo"
          alt="logo"
        />
      </div>
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
          aria-label="Facebook"
        >
          <IconFacebook class="footer-social-link" />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Twitter"
        >
          <IconTwitter class="footer-social-link" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer nofollow"
          aria-label="Instagram"
        >
          <IconInsta class="footer-social-link" />
        </a>
      </div>
    </div>

    <div class="attribution">
      <div class="att-container">
        Challenge by
        <a
          href="https://www.frontendmentor.io/solutions/coffee-subscription-site-using-vuejs-e_YtQBmo65"
          target="_blank"
          rel="noopener noreferrer"
          >Frontend Mentor</a
        >
        <span class="att-separator">|</span>
      </div>
      <div class="att-container">
        Code by
        <a
          href="https://bradleysmith.tech"
          target="_blank"
          rel="noopener noreferrer"
          >Bradley Smith</a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-container {
  background-color: $dark-grey;
  margin: 0 1.5rem 4.5rem 1.5rem;
  text-align: center;
  margin: 0 1.5rem 0 1.5rem;
  /* not sure why this works for the margin-top of the logo, but it does */
  border: 0.5px solid transparent;

  @include desktop-breakpoint {
    margin: 0 5rem 1rem 5rem;
    display: flex;
    align-items: center;
  }
}

.footer-logo-container {
  height: 1.5rem;
  margin: 3.38rem auto 3.03rem auto;

  @include tablet-breakpoint {
    height: 1.625rem;
  }

  @include desktop-breakpoint {
    margin: 2.94rem 6.43rem 2.94rem 5.31rem;
  }
}

.footer-nav-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3.03rem;

  @include tablet-breakpoint {
    flex-direction: row;
  }

  @include desktop-breakpoint {
    flex-grow: 1;
    justify-content: flex-start;
    margin: 0;
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

    @include desktop-breakpoint {
      margin: 0;
    }
  }

  @include desktop-breakpoint {
    justify-self: flex-end;
    margin: 0 5.31rem 0 0;
  }
}

.footer-social-link {
  fill: $light-cream;

  &:hover {
    fill: $pale-orange;
  }
}

.attribution {
  font-size: 1rem;
  font-family: 'Barlow', sans-serif;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  & a {
    color: $dark-cyan;

    &:hover {
      text-decoration: underline;
    }
  }

  @include tablet-breakpoint {
    font-size: 1.5rem;
    flex-direction: row;
    margin-bottom: 5.5rem;
  }
}

.att-separator {
  padding: 0 0.5rem;
}
</style>
