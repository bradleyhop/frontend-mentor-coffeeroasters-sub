<script>
// how it works steps copy
import howItWorks from '@/assets/data/howItWorks.js';

export default {
  name: 'HowItWorksCards',

  data() {
    return {
      steps: Object.freeze(howItWorks),
    };
  },
};
</script>

<template>
  <img
    :src="`./src/assets/img/shared/desktop/circles-line.svg`"
    alt="decorative"
    class="circles-line"
  />
  <div class="how-it-works-steps-container">
    <div v-for="step in steps" :key="step.numb" class="how-it-works-card">
      <h3 class="how-it-works-numb">{{ step.numb }}</h3>
      <h4 class="how-it-works-title">{{ step.title }}</h4>
      <p class="how-it-works-copy">{{ step.copy }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.circles-line {
  display: none;

  @include tablet-breakpoint {
    display: block;
    width: 72.25%;
    margin-bottom: 3rem;
  }

  @include desktop-breakpoint {
    display: flex;
    width: 77%;
  }

  @media only screen and (min-width: 1900px) {
    width: 75%;
  }
}

.how-it-works-steps-container {
  @include tablet-breakpoint {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.62rem;
  }

  @include desktop-breakpoint {
    grid-gap: 5.94rem;
  }
}

.how-it-works-card {
  min-height: 23.1875rem;
}

.how-it-works-numb {
  color: $pale-orange;
  font-family: 'Fraunces', serif;
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1.5rem;

  @include desktop-breakpoint {
    margin-bottom: 2.38rem;
  }
}

.how-it-works-title {
  @include header-3;
  /* force text to wrap to two lines */
  max-width: 14rem;
  margin: auto auto 1.5rem auto;

  @include tablet-breakpoint {
    margin: 0 0 1.5rem 0;
  }

  @include desktop-breakpoint {
    margin-bottom: 2.62rem;
  }
}

.how-it-works-copy {
  @include app-body;

  @include desktop-breakpoint {
    font-size: 1rem;
    line-height: 1.625;
  }
}
</style>
