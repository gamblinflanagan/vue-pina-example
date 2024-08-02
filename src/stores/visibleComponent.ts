import { defineStore } from 'pinia'

export const useVisible = defineStore({
  id: 'visible',

  state: () => ({
    isCounterVisible: true,
    isImageVisible: true,
  }),

  //   getters: {
  //     double: (state) => state.n * 2,
  //   },

  actions: {
    changeCounter() {
      this.isCounterVisible = !this.isCounterVisible
    },
    changeImage() {
      this.isImageVisible = !this.isImageVisible
    },
  },
})
