import { defineStore } from "pinia";

export const useShopStore = defineStore('shopStore', {
	state: () => ({
		autoTypers: 0,
		costAutoTyper: 10,
		// mainStore: useMainStore
	}),
	actions: {
		purchaseAutoTyper(){
			if(this.availableLines >= this.costAutoTyper){
				// availableLines.value -= costAutoTyper.value;
				// autoTypers.value += 1;
				// costAutoTyper.value = Math.floor(costAutoTyper.value * 1.25);
				console.log("purchased")
			}
		}
	},
})