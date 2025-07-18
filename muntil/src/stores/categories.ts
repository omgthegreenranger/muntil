import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoriesList = defineStore('categories', () => {
    const categories = ref<Category[]>([]);

  function initCategories(data: Category[]) {
    categories.value = data;
  }

  function addNewcategorieCategory(category: Category) {
    categories.value.push(category);
  }

  function removeCategory(id: number) {
    const idx = categories.value.findIndex((s) => s.id === id);
    if (idx === -1) return;
    categories.value.splice(idx, 1);})