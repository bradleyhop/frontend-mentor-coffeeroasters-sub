import { defineStore } from 'pinia';

export const useCustomerPlan = defineStore('customerPlan', {
  state: () => {
    return {
      plan: {
        how: '',
        type: '',
        size: '',
        grind: '',
        delivery: '',
        frequency: '',
        totalCost: 0,
      },
    };
  },

  getters: {
    total: () => {
      // TODO: update logic to change proprty value reactively
      this.plan.totalCost = 54; // doesn't work yet
    },
  },

  actions: {
    setPlan(plan, value) {
      this.plan[value] = value;
    },
  },
});
