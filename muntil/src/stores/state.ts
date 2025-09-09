import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalState',{
    state: () => {
        return {
            viewState: "default",
            eventState: "all",
            topState: "default"
        }

//   return { viewState, switchState }
}})
