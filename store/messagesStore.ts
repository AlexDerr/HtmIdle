import { defineStore } from "pinia";

export const useMessagesStore = defineStore('messageStore', {
	state: () => ({
		consoleMessages: ["Welcome to HtmIdle", "", "", "", ""]
	}),
	actions: {
		addMessage(message: string){
			this.consoleMessages.unshift(message);
			this.consoleMessages.splice(5, 1);
		},
	},
})