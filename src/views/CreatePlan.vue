<script>
// how it works steps
import howItWorks from '@/assets/data/howItWorks.js';
// plans selection
import planSelections from '@/assets/data/planSelections.js';
// accordion class
import Accordian from '@/assets/js/Accordian.js';

export default {
  name: 'CreatePlan',

  data() {
    return {
      steps: Object.freeze(howItWorks),
      planSelections: Object.freeze(planSelections),
    };
  },

  mounted() {
    // apply animation to all details content
    document.querySelectorAll('details').forEach((el) => {
      new Accordian(el);
    });
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

    <section class="select-plan-container">
      <div
        v-for="selection in planSelections"
        :key="selection.numb"
        class="selection-container"
      >
        <details class="select-plan-details">
          <summary class="select-plan-summary">
            <h3 class="question-title">{{ selection.selectionTitle }}</h3>
            <div class="arrow-container">
              <img
                class="arrow-icon"
                :src="`./src/assets/img/plan/desktop/icon-arrow.svg`"
                alt="arrow icon indicating selection open or close"
              />
            </div>
          </summary>
          <!-- next container for animation, see mounted() -->
          <div class="content-wrapper">
            <div
              v-for="plan in selection.selections"
              :key="plan.selections"
              class="select-plan-selection-container"
            >
              <h4 class="select-plan-title">{{ plan.selectionName }}</h4>
              <p class="select-plan-copy">{{ plan.selectionDescription }}</p>
            </div>
          </div>
        </details>
      </div>
    </section>
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

.selection-container {
  margin-bottom: 2.5rem;
  list-style: none;
}

.select-plan-details {
  user-select: none;
}

.select-plan-summary {
  cursor: pointer;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;

  &::-webkit-details-marker {
    display: none;
  }
}

.question-title {
  color: $grey;
  font-family: 'Fraunces', serif;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.16;
  width: 15rem;
}

.arrow-icon {
  /* match timing to expansion animation */
  transition: all 0.3s ease-in-out;
}

.select-plan-details[open] .arrow-icon {
  transform: rotate(180deg);
}

.select-plan-selection-container {
  background-color: $selection-grey;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  min-height: 8.75rem;
  padding: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  /* selected styling; to change */
  &:active {
    background-color: $dark-cyan;
    color: $white;
  }
}

.select-plan-title {
  @include header-4;
  margin-bottom: 0.5rem;
}

.select-plan-copy {
  @include app-body;
}
</style>
