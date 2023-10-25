<script>
// how it works steps
import howItWorks from '@/assets/data/howItWorks.js';
// plans selection
import planSelectionsData from '@/assets/data/planSelections.js';
// accordion class
import Accordian from '@/assets/js/Accordian.js';

export default {
  name: 'CreatePlan',

  data() {
    return {
      // how it works steps
      steps: Object.freeze(howItWorks),
      // plan selection copy, values, and boolean class selection
      planSelections: planSelectionsData,
      // user selected plan; filled by @click event selectPlan()
      customerPlan: {},
    };
  },

  methods: {
    // populate customerPan object upon user selection on @click event
    selectPlan(type, select) {
      this.customerPlan[type] = select;
    },

    // toggle .activeChoice on user select
    toggleActiveSelect(questionId, selectionId) {
      for (let i = 0; i < this.planSelections[questionId].selections.length; i++) {
        this.planSelections[questionId].selections[i].isSelected = false;
      }

      this.planSelections[questionId].selections[selectionId].isSelected = true;
    },
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
        :key="selection.id"
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
          <div class="content-wrapper" :id="`planDetails${selection.id}`">
            <div
              v-for="plan in selection.selections"
              :key="plan.id"
              class="select-plan-selection-container"
              :class="{ activeChoice: plan.isSelected }"
              :value="plan.cost"
              @click="
                selectPlan(selection.selectionType, plan.selectionName),
                  toggleActiveSelect(selection.id, plan.id)
              "
            >
              <h4 class="select-plan-title">{{ plan.selectionName }}</h4>
              <p class="select-plan-copy">{{ plan.selectionDescription }}</p>
            </div>
          </div>
        </details>
      </div>
    </section>

    <section class="summary-container">
      <h2 class="summary-title">ORDER SUMMARY</h2>
      <p class="summary-copy">
        &ldquo;I drink my coffee as
        <span class="summary-highlight">{{
          customerPlan.how ? customerPlan.how : '____'
        }}</span
        >, with a
        <span class="summary-highlight">{{
          customerPlan.type ? customerPlan.type : '____'
        }}</span>
        type of bean.
        <span class="summary-highlight">{{
          customerPlan.size ? customerPlan.size : '____'
        }}</span>
        ground ala
        <span class="summary-highlight">{{
          customerPlan.grind ? customerPlan.grind : '____'
        }}</span
        >, sent to me
        <span class="summary-highlight">{{
          customerPlan.frequency ? customerPlan.frequency : '____'
        }}</span
        >.&rdquo;
      </p>
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
}

.activeChoice {
  background-color: $dark-cyan;
  color: $white;
}

.select-plan-title {
  @include header-4;
  margin-bottom: 0.5rem;
}

.select-plan-copy {
  @include app-body;
}

.summary-container {
  background-color: $dark-grey;
  border-radius: 0.625rem;
  color: $white;
  padding: 2rem 1.5rem;
  margin-bottom: 3.5rem;
}

.summary-title {
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625;
  text-transform: uppercase;
  opacity: 0.5037;
}

.summary-copy {
  @include header-4;
  line-height: 1.66;
}

.summary-highlight {
  color: $dark-cyan;
}
</style>
