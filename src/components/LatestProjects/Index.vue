<template>
<div>
  <div class="text-center">
    <h1>Latest projects</h1>
    <p class="py-2">
      Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.
    </p>
  </div>
  <div class="flex flex-wrap justify-center gap-2 text-gray-700 py-4">
    <a
      v-for="(category, index) of categories" :key="index"
      href="javascript:;"
      :class="{ 'px-2 py-1 border rounded': true, 'bg-primary text-white': activeCategoryID === category.id }"
      @click="showCategory({ id: category.id })"
    >
      {{category.name}}
    </a>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-2">
    <transition-group name="fade">
      <project-item
        v-for="(project, index) of projects.filter(p => { return activeCategoryID === 1 ? projects : p.categories.includes(activeCategoryID)})"
        :key="index"
        :class="['flex flex-wrap transition-colors duration-200', isActive({ id: project.id }) ? 'bg-gray-700' : 'bg-secondary']"
        :isActive="isActive({ id: project.id })"
        :categories="categories"
        :project="project"
        @setActiveProject="setActiveProject"
      />
    </transition-group>
  </div>
</div>
</template>

<script>
import ProjectItem from './Item.vue'
import { publicPath } from '@/helpers/path'

export default {
  components: {
    ProjectItem
  },
  data () {
    return {
      categories: [
        { id: 1, name: 'All' },
        { id: 2, name: 'Web Design' },
        { id: 3, name: 'Mobile App' },
        { id: 4, name: 'Illustration' },
        { id: 5, name: 'Photography' }
      ],
      projects: [
        { id: 1, title: 'Claritas Etiam Processum', categories: [5, 2], img: `${publicPath}img/projects/1.png` },
        { id: 2, title: 'Quam Nutamus Farum', categories: [5], img: `${publicPath}img/projects/2.png` },
        { id: 3, title: 'Usus Legentis Videntur', categories: [3, 4], img: `${publicPath}img/projects/3.png` },
        { id: 4, title: 'Claritas Etiam Processum', categories: [1, 5], img: `${publicPath}img/projects/4.png` },
        { id: 5, title: 'Claritas Etiam Processum', categories: [2, 3], img: `${publicPath}img/projects/5.png` },
        { id: 6, title: 'Claritas Etiam Processum', categories: [1, 2, 3], img: `${publicPath}img/projects/6.png` }
      ],
      activeCategoryID: 1,
      activeProjectID: 1
    }
  },
  methods: {
    showCategory ({ id }) {
      this.activeCategoryID = id
      this.activeProjectID = -10
    },
    setActiveProject ({ id }) {
      this.activeProjectID = id
    },
    isActive ({ id }) {
      return this.activeProjectID === id
    }
  }
}
</script>
