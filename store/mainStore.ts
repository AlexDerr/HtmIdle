import { defineStore } from "pinia";

export const useMainStore = defineStore('mainStore', {
	state: () => ({
		availableLines: 0,
		totalLines: 0,
		clickIncrement: 1,
		autoIncrement: 1
	}),
	actions: {
		calculateAutoIncrement(){
			console.log("pass")
		},

		handleMainClick(){
			this.totalLines += this.clickIncrement;
			this.availableLines += this.clickIncrement;
		},
	},
})