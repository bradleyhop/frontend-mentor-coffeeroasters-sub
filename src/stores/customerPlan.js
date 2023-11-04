import { defineStore } from 'pinia';

export const useCustomerPlan = defineStore('customerPlan', {
  state: () => ({
      plan: {
        how: '',
        type: '',
        size: '',
        grind: '',
        delivery: '',
        frequency: '',
        totalCost: 1, // placeholder until getters is implemented
      }
  }),

  getters: {
    // TODO: update logic to change proprty value per plan
    totalCost: (state) => {
      state.plan.totalCost = 54;
    }
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
