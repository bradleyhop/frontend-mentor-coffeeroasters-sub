<script>
// how it works steps
import howItWorks from '@/assets/data/howItWorks.js';

export default {
  name: 'CreatePlan',

  data() {
    return {
      steps: Object.freeze(howItWorks),
    };
  },
};
</script>

<template>
  <div class="create-plan-container">
    <section class="hero-container">
      <picture>
        <source
          :srcset="`./src/assets/img/plan/mobile/image-hero-blackcup.jpg`"
          media="(max-width: 600px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./src/assets/img/plan/tablet/image-hero-blackcup.jpg`"
          media="(min-width: 601px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./src/assets/img/plan/desktop/image-hero-blackcup.jpg`"
          media="(min-width: 1200px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <img
          :src="`./src/assets/img/plan/desktop/image-hero-blackcup.jpg`"
          alt="decorative image of coffee"
          class="hero-img"
        />
      </picture>
      <div class="hero-content-container">
        <h1 class="main-plans-heading">Create a plan</h1>
        <p class="main-plans-copy">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
    </section>

    <section class="steps-container">
      <div v-for="step in steps" :key="step.numb" class="how-it-works-card">
        <h3 class="how-it-works-numb">{{ step.numb }}</h3>
        <h4 class="how-it-works-title steps-color">{{ step.title }}</h4>
        <p class="how-it-works-copy steps-color">{{ step.copy }}</p>
      </div>
    </section>

    <section class="select-plan-container"></section>
  </div>
</template>

<style lang="scss">
.main-plans-heading {
  font-family: 'Fraunces', serif;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.1;
  color: $light-cream;
  margin-bottom: 1.38rem;
}

.main-plans-copy {
  @include app-body;
  padding: 0 1.5rem;
  color: $light-cream;
}

.steps-container {
  background-color: $dark-grey-blue;
  border-radius: 0.625rem;
  /* override parent padding */
  margin: 0 -1.5rem 7.5rem -1.5rem;
  text-align: center;
  padding: 5rem 0;
}

.steps-color {
  color: $white;
}
</style>
