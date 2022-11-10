<template>
<ul class="absolute block sm:hidden top-0 right-0 py-3 bg-white text-black border rounded flex flex-wrap">
    <li
      v-for="(link, index) of links"
      :key="index"
      class="mx-4 hover:text-gray-500 w-full transition-colors duration-200"
      v-scroll-to="link.scrollTo || ''"
      @click.prevent="hideMenu"
    >
      <a href="javascript:;">{{link.text}}</a>
    </li>
</ul>
</template>

<script>
export default {
  emits: ['hideMenu'],
  props: {
    links: {
      type: Array,
      required: false
    }
  },
  methods: {
    hideMenu () {
      // Let page scroll
      setTimeout(() => {
        this.$emit('hideMenu')
      }, 100)
    }
  }
}
</script>
