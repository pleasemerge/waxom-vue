<template>
<a href="javascript:;">
  <img :src="imgSrc" class="object-cover w-full" @click="setActiveProject()" />
</a>
</template>

<script>
export default {
  emits: ['setActiveProject'],
  props: {
    imgSrc: {
      type: String,
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

<style scoped>
.triangle {
  width: 0;
  height: 0;
  border-style: solid;
}
</style>
