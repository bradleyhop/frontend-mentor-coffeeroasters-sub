import { defineStore } from 'pinia';

export const useCustomerPlan = defineStore('customerPlan', {
  state: () => {
    return {
      // check for local storage first before using default
      plan: {
        how: '',
        type: '',
        size: '',
        grind: '',
        delivery: '',
        frequency: '',
        // costs key: index 0: weekly; 1: bi-weekly; 2: monthly
        // using an array for v-for rendering
        costs: [],
        totalCost: 0,
      },
    };
  },

  getters: {
    weeklyCost: (state) => {
      if (state.plan.size === '250g') {
        state.plan.costs[0] = 7.2;
        state.plan.costs[1] = 9.6;
        state.plan.costs[2] = 12;
      } else if (state.plan.size === '500g') {
        state.plan.costs[0] = 13;
        state.plan.costs[1] = 17.5;
        state.plan.costs[2] = 22;
      } else if (state.plan.size === '1000g') {
        state.plan.costs[0] = 22;
        state.plan.costs[1] = 32;
        state.plan.costs[2] = 42;
      } else {
        // default values for rendering
        state.plan.costs[0] = 0;
        state.plan.costs[1] = 0;
        state.plan.costs[2] = 0;
      }
    },

    totalCost: (state) => {
      if (state.plan.frequency === 'Every Week') {
        state.plan.totalCost = state.plan.costs[0] * 4;
      } else if (state.plan.frequency === 'Every 2 Weeks') {
        state.plan.totalCost = state.plan.costs[1] * 2;
      } else if (state.plan.frequency === 'Every Month') {
        state.plan.totalCost = state.plan.costs[2];
      }
    },
  },

  actions: {
    setPlan(planName, value) {
      if (Object.hasOwn(this.plan, planName)) {
        this.plan[planName] = value;
      } else {
        throw new Error(`Invalid plan property: ${planName}`);
      }
    },
  },
});
