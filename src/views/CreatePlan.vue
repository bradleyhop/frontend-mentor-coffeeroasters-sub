<script>
// plans selection
import planSelectionsData from '@/assets/data/planSelections.js';
// accordion class
import Accordian from '@/assets/js/Accordian.js';
// summary paragraph text
import OrderSummary from '@/components/OrderSummary.vue';
// app button for checkout
import AppButton from '@/components/AppButton.vue';
// checkout modal
import CheckoutModal from '@/components/CheckoutModal.vue';
// cart stores
import { useCustomerPlan } from '@/stores/customerPlan.js';
// steps card block
import HowItWorksCards from '@/components/blocks/HowItWorksCards.vue';

export default {
  name: 'CreatePlan',

  components: {
    AppButton,
    HowItWorksCards,
    OrderSummary,
    CheckoutModal,
  },

  data() {
    return {
      // plan selection copy, values, and boolean class selection;
      //  NB: do not freeze!! Need reactivity for user selection
      planSelections: planSelectionsData,
      // user selected plan in store
      customerPlan: useCustomerPlan(),
      // add/remove disabled attr to checkout button
      checkoutBtnDisabled: true,
      // hide modal by default
      showModal: false,
    };
  },

  methods: {
    // populate customerPan object upon user selection on @click event
    /*
     * customerPlan.setPlan(type, select) {
     *   this.customerPlan[type] = select;
     *   // console.log(this.customerPlan);
     * },
     */

    // toggle .activeChoice on user select
    toggleActiveSelect(questionId, selectionId) {
      this.planSelections[questionId].selections.map((el) => {
        el.isSelected = false;
      });

      this.planSelections[questionId].selections[selectionId].isSelected = true;
    },

    // toggle disabled attribute when all choices are made

    toggleDisabled() {
      // do not check for 'grind' property if user selects 'Capsule'
      if (
        this.customerPlan.plan.how === 'Capsule' &&
        this.customerPlan.plan.type &&
        this.customerPlan.plan.size &&
        this.customerPlan.plan.frequency
      ) {
        this.checkoutBtnDisabled = false;
      } else if (
        this.customerPlan.plan.how &&
        this.customerPlan.plan.type &&
        this.customerPlan.plan.size &&
        this.customerPlan.plan.grind &&
        this.customerPlan.plan.frequency
      ) {
        // check for all properties
        this.checkoutBtnDisabled = false;
      } else {
        // disable button for checkout
        this.checkoutBtnDisabled = true;
      }
    },
  },

  watch: {
    'customerPlan.plan.how': {
      // disable grind question, close section if open, and clear any
      //  selections the user made before selecting coffee type
      handler() {
        // using vanilla JS since accordians are rendered in a loop and we only
        //  need one group
        const grindEl = document.getElementById('grind');

        if (this.customerPlan.plan.how === 'Capsule') {
          // add class to disable user selection
          grindEl.classList.add('disabled');
          // close grind selection details if open
          if (grindEl.hasAttribute('open')) {
            grindEl.removeAttribute('open');
          }
          if (this.customerPlan.plan.grind) {
            // remove grind property from customerPlan
            delete this.customerPlan.plan.grind;
            // remove any active class selections from coffee array object
            // 'grind'; isSelected property will only be true if user made a
            // selection
            this.planSelections[3].selections.map((el) => {
              el.isSelected = false;
            });
          }
        } else {
          // remove class to enable user selection
          grindEl.classList.remove('disabled');
        }
      },
    },

    customerPlan: {
      handler() {
        this.toggleDisabled();
      },
      deep: true,
    },
  },

  mounted() {
    // apply animation to all details content
    document.querySelectorAll('details').forEach((el) => {
      new Accordian(el);
    });
    // check store for completed user selection
    this.toggleDisabled();
  },
};
</script>

<template>
  <div class="create-plan-container">
    <section class="hero-container plan-hero-conatiner">
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
      <HowItWorksCards />
    </section>

    <section class="select-plan-container">
      <div
        v-for="selection in planSelections"
        :key="selection.id"
        class="selection-container"
      >
        <details class="select-plan-details" :id="selection.selectionType">
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
                customerPlan.setPlan(
                  selection.selectionType,
                  plan.selectionName,
                ),
                  toggleActiveSelect(selection.id, plan.id)
              "
            >
              <h4 class="select-plan-title">{{ plan.selectionName }}</h4>
              <!-- recactively show total based on grind selection -->
              <p v-if="selection.selectionType === 'frequency'">
                &dollar;{{ customerPlan.plan.costs[plan.id].toFixed(2)
                }}{{ plan.selectionDescription }}
              </p>
              <p v-else class="select-plan-copy">
                {{ plan.selectionDescription }}
              </p>
            </div>
          </div>
        </details>
      </div>
    </section>

    <section class="summary-container">
      <h2 class="summary-title">ORDER SUMMARY</h2>
      <OrderSummary />
    </section>

    <div class="checkout-btn-container">
      <AppButton
        class="checkout-btn"
        text="Create My Plan!"
        id="CheckoutBtn"
        :disabled="checkoutBtnDisabled"
        @click="showModal = true"
      />

      <Teleport to="body">
        <CheckoutModal :show="showModal" @close="showModal = false" />
      </Teleport>
    </div>
  </div>
</template>

<style lang="scss">
.plan-hero-conatiner {
  @include tablet-breakpoint {
    min-height: 25rem;
  }
}

.main-plans-heading {
  color: $light-cream;
  font-family: 'Fraunces', serif;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.38rem;

  @include tablet-breakpoint {
    margin-bottom: 1.5rem;
  }
}

.main-plans-copy {
  @include app-body;
  color: $light-cream;
  padding: 0 1.5rem;

  @include tablet-breakpoint {
    font-size: 0.9375rem;
    padding: 0;
    width: 24.875rem;
  }
}

.steps-container {
  background-color: $dark-grey-blue;
  border-radius: 0.625rem;
  /* override parent padding */
  margin: 0 -1.5rem 7.5rem -1.5rem;
  text-align: center;
  padding: 5rem 0;
  color: $white;

  @include tablet-breakpoint {
    margin: 0 -2.5rem 9rem -2.5rem;
    padding: 6.06rem 2.5rem;
    text-align: left;
  }
}

.select-plan-container {
  @include tablet-breakpoint {
    margin-bottom: 9rem;
  }
}

.selection-container {
  margin-bottom: 2.5rem;
  list-style: none;
}

.select-plan-details {
  user-select: none;
}

.disabled {
  cursor: not-allowed;
  user-select: none; /* prevents text selection */
  pointer-events: none; /* prevents click events */

  /* indicate disabled state */
  & > summary {
    opacity: 0.2;
  }
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

  @include tablet-breakpoint {
    width: initial;
    font-size: 2rem;
  }
}

.arrow-container {
  align-self: center;
}

.arrow-icon {
  /* match timing to expansion animation */
  transition: all 0.3s ease-in-out;
}

.content-wrapper {
  @include tablet-breakpoint {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.62rem;
  }
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
    background-color: $pale-orange;
    color: $dark-grey-blue;
    cursor: pointer;
  }

  @include tablet-breakpoint {
    padding: 2rem 1.56rem 5.25rem 1.56rem;
  }
}

.activeChoice {
  background-color: $dark-cyan;
  color: $white;

  /* override unselected hover */
  &:hover {
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

.summary-container {
  background-color: $dark-grey;
  border-radius: 0.625rem;
  color: $white;
  padding: 2rem 1.5rem;
  margin-bottom: 3.5rem;

  @include tablet-breakpoint {
    padding: 1.94rem 2.75rem;
    margin-bottom: 2.5rem;
  }
}

.summary-title {
  font-family: 'Barlow', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625;
  text-transform: uppercase;
  opacity: 0.5037;
}

.checkout-btn-container {
  text-align: center;
  margin-bottom: 7.5rem;

  @include tablet-breakpoint {
    margin-bottom: 9rem;
  }
}
</style>
