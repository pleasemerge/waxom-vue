<template>
  <app-navbar />
  <router-view/>
</template>

<script>
import AppNavbar from '@/components/Navbar/Index'

export default {
  components: {
    AppNavbar
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Jost', sans-serif;
  scroll-behavior: smooth;
}
.app-container {
  @apply w-full md:w-8/12 mx-auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
