<template>
<div>
  <figure class="w-full">
    <project-image :imgSrc="project.img" @setActiveProject="setActiveProject" />
  </figure>
  <div class="p-4">
    <project-title :isActive="isActive" :title="project.title" @setActiveProject="setActiveProject" />
    <project-categories :categories="categories" :projectCategories="project.categories" :isActive="isActive" />
  </div>
</div>
</template>

<script>
import projectImage from './Image'
import projectTitle from './Title'
import projectCategories from './Categories.vue'

export default {
  emits: ['setActiveProject'],
  components: { projectImage, projectTitle, projectCategories },
  props: {
    project: {
      type: Object,
      required: true
    },
    categories: {
      type: Array,
      required: false
    },
    isActive: {
      type: Boolean
    }
  },
  methods: {
    setActiveProject () {
      this.$emit('setActiveProject', { id: this.project.id })
    }
  }
}
</script>
