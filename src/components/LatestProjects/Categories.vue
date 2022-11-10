<template>
<span v-for="(categoryID, index) of projectCategories" :key="index" :class="['text-sm', isActive ? 'text-gray-300' : 'text-gray-600']">
  {{categories.find(c => { return c.id === categoryID }).name}}<span v-if="(index + 1) < projectCategories.length ">, </span>
</span>
</template>

<script>
export default {
  props: {
    projectCategories: {
      type: Array,
      required: false
    },
    categories: {
      type: Array,
      required: false
    },
    isActive: {
      type: Boolean,
      required: true
    }
  }
}
</script>
