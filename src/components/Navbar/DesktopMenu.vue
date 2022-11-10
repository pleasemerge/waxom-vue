<template>
<ul class="hidden sm:flex gap-4">
  <li v-for="(link, index) of links" :key="index">
    <a href="javascript:;" v-scroll-to="link.scrollTo || ''" class="opacity-90">{{link.text}}</a>
  </li>
</ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: false
    }
  }
}
</script>
