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
  <div class="how-it-works-steps-container">
    <div v-for="step in steps" :key="step.numb" class="how-it-works-card">
      <div class="line-circle-container">
        <div class="circle"></div>
        <div v-if="step.numb < 3" class="line"></div>
      </div>
      <h3 class="how-it-works-numb">{{ step.numb }}</h3>
      <h4 class="how-it-works-title">{{ step.title }}</h4>
      <p class="how-it-works-copy">{{ step.copy }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$tablet-gap: 0.62rem;
$desktop-gap: 5.94rem;
$circle-size: 1.9375rem;

.line-circle-container {
  display: none;

  @include tablet-breakpoint {
    display: block;
    margin-bottom: 3rem;
  }

  @include desktop-breakpoint {
    margin-bottom: 4rem;
  }
}

.circle {
  @include tablet-breakpoint {
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid $dark-cyan;
    height: $circle-size;
    width: $circle-size;
  }
}

.line {
  @include tablet-breakpoint {
    background-color: $pale-orange;
    height: 2px;
    width: calc(100% + $tablet-gap - $circle-size);
    position: relative;
    left: $circle-size;
    top: calc($circle-size / -2);
  }

  @include desktop-breakpoint {
    width: calc(100% + $desktop-gap - $circle-size);
  }
}

.how-it-works-steps-container {
  @include tablet-breakpoint {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: $tablet-gap;
  }

  @include desktop-breakpoint {
    grid-gap: $desktop-gap;
  }
}

.how-it-works-card {
  min-height: 23.1875rem;
}

.how-it-works-numb {
  color: $pale-orange;
  font-family: 'Fraunces 9pt Black', serif;
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
  padding: 0 1.5rem;

  @include tablet-breakpoint {
    padding: 0;
  }

  @include desktop-breakpoint {
    font-size: 1rem;
    line-height: 1.625;
  }
}
</style>
