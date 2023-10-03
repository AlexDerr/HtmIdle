import { useMessagesStore } from "~/store/messagesStore"

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useMessagesStore($pinia)
    }
  }
})
