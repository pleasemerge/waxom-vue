<template>
<span :class="['block text-lg font-medium', isActive ? 'text-white' : 'text-primary-dark']">
  <a href="javascript:;" @click="setActiveProject()">
    {{title}}
  </a>
</span>
</template>

<script>
export default {
  emits: ['setActiveProject'],
  props: {
    title: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    setActiveProject () {
      this.$emit('setActiveProject')
    }
  }
}
</script>
