import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useViewStore = defineStore('viewState',{
    state: () => {
        return {
            viewState: "default",
        }

//   return { viewState, switchState }
}})
