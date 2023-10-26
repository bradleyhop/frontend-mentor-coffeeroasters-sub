<script>
import AppButton from '@/components/AppButton.vue';
// coffee collection as list; more prone to future changes
import coffees from '@/assets/data/coffeeCollection.js';
// how it works steps
import howItWorks from '@/assets/data/howItWorks.js';

export default {
  name: 'HomeView',

  components: {
    AppButton,
  },

  data() {
    return {
      coffeCollection: Object.freeze(coffees),
      steps: Object.freeze(howItWorks),
      // why us card content
      benefits: Object.freeze([
        {
          img: 'icon-coffee-bean.svg',
          title: 'Best quality',
          copy: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
        },
        {
          img: 'icon-gift.svg',
          title: 'Exclusive benefits',
          copy: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
        },
        {
          img: 'icon-truck.svg',
          title: 'Free shipping',
          copy: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
        },
      ]),
    };
  },
};
</script>

<template>
  <div class="home-container">
    <section class="hero-container">
      <picture>
        <source
          :srcset="`./src/assets/img/home/mobile/image-hero-coffeepress.jpg`"
          media="(max-width: 600px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./src/assets/img/home/tablet/image-hero-coffeepress.jpg`"
          media="(min-width: 601px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./src/assets/img/home/tablet/image-hero-coffeepress.jpg`"
          media="(min-width: 1200px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <img
          :src="`./src/assets/img/home/desktop/image-hero-coffeepress.jpg`"
          alt="decorative image of coffee"
          class="hero-img"
        />
      </picture>
      <div class="hero-content-container">
        <h1 class="main-heading">Great coffee made simple.</h1>
        <p class="main-paragraph">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisa coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <RouterLink to="/createplan">
          <AppButton text="Create your own plan" />
        </RouterLink>
      </div>
    </section>

    <section class="collection-container">
      <h2 class="collection-heading">our collection</h2>
      <div v-for="coffee in coffeCollection" :key="coffee.name">
        <img
          :src="`./src/assets/img/home/desktop/${coffee.src}`"
          alt="decorative image of coffee"
          class="coffee-img"
        />
        <h3 class="coffee-name">{{ coffee.name }}</h3>
        <p class="coffee-copy">{{ coffee.copy }}</p>
      </div>
    </section>

    <section class="why-us-container">
      <div class="why-us-background">
        <div class="why-us-content-container">
          <h2 class="why-us-heading">Why choose us?</h2>
          <p class="why-us-paragraph">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
          <div class="benefits-card-container">
            <div
              v-for="benefit in benefits"
              :key="benefit.title"
              class="benefit-card"
            >
              <img
                :src="`./src/assets/img/home/desktop/${benefit.img}`"
                class="benefit-img"
              />
              <h3 class="benefit-title">{{ benefit.title }}</h3>
              <p class="benefit-copy">{{ benefit.copy }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works-container">
      <h2 class="how-it-works-heading">How it works</h2>
      <div v-for="step in steps" :key="step.numb" class="how-it-works-card">
        <h3 class="how-it-works-numb">{{ step.numb }}</h3>
        <h4 class="how-it-works-title">{{ step.title }}</h4>
        <p class="how-it-works-copy">{{ step.copy }}</p>
      </div>
      <RouterLink to="/createplan">
        <AppButton
          text="Create your own plan"
          class="how-it-works-button"
        />
      </RouterLink>
    </section>
  </div>
</template>

<style lang="scss">
.main-heading {
  @include header-1;
  color: $light-cream;
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.main-paragraph {
  @include app-body;
  color: $light-cream;
  padding: 0 1.5rem 1.5rem 1.5rem;
  opacity: 0.8;
}

.collection-container {
  text-align: center;
}
.collection-heading {
  @include header-1;
  background: linear-gradient(180deg, $grey 0%, $light-cream 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  height: 4.5rem;
}

.coffee-img {
  height: 8rem;
}
.coffee-name {
  @include header-4;
  margin-bottom: 1rem;
}

.coffee-copy {
  @include app-body;
  width: 17.6rem;
  margin: 0 auto 3rem auto;
}

.why-us-container {
  // pushes next section down, hacky
  min-height: calc(56.375rem * 1.85);
}

.why-us-background {
  // sets div as a background image
  display: grid;
  place-items: center;
  height: 56.375rem;
  background-color: $dark-grey;
  border-radius: 0.625rem;
}

.why-us-content-container {
  // overlays content on top of background
  grid-area: inner-div;
  padding: 4rem 1.5rem;
  text-align: center;
}

.why-us-heading {
  @include header-2;
  color: $light-cream;
  margin-bottom: 1.5rem;
}

.why-us-paragraph {
  @include app-body;
  color: $light-cream;
  margin-bottom: 4rem;
}

.benefit-card {
  background-color: $dark-cyan;
  border-radius: 0.5rem;
  color: $light-cream;
  min-height: 23.875rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.benefit-img {
  width: 4.5rem;
  height: auto;
  margin-bottom: 3.5rem;
}

.benefit-title {
  @include header-4;
  margin-bottom: 1.5rem;
}

.benefit-copy {
  @include app-body;
}

.how-it-works-container {
  text-align: center;
}

.how-it-works-button {
  margin-bottom: 7.5rem;
}
</style>
