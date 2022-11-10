<template>
<div id="navbar" :class="['fixed z-50 top-0 w-full h-20 flex items-center text-white transition-colors duration-700', pageScrolled ? 'bg-black' : 'bg-transparent']">
  <div :class="['app-container flex items-center justify-between']">
    <div>
      <a href="javascript:;" v-scroll-to="'#navbar'">
        <img :src="`${$publicPath}img/logo.png`" width="50" class="inline-block py-2 mx-2 md:mx-0" />
        <span class="align-middle text-3xl">Waxom</span>
      </a>
    </div>
    <div class="relative">
      <nav>
        <desktop-menu :links="links" />
        <a href="javascript:;" class="inline-block px-2 sm:hidden text-2xl" @click="toggleNavMenu()">
          <font-awesome-icon icon="bars" class="text-2xl" />
        </a>
        <mobile-menu :links="links" v-if="showNavMenu" @hideMenu="showNavMenu = false" />
      </nav>
    </div>
  </div>
</div>
<!-- mobile_bg_overlay -->
<div v-if="showNavMenu" class="block sm:hidden fixed top-0 w-screen h-screen min-h-full bg-gray-900 opacity-40 -z-10" @click="toggleNavMenu"></div>
<!-- /mobile_bg_overlay -->
</template>

<script>
import DesktopMenu from './DesktopMenu.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    DesktopMenu,
    MobileMenu
  },
  data () {
    return {
      showNavMenu: false,
      links: [
        { text: 'Home', to: 'Home', scrollTo: '#navbar' },
        { text: 'Projects', to: 'Projects', scrollTo: '#latest-projects' },
        { text: 'Presentation', to: 'Presentation', scrollTo: '#presentation' },
        { text: 'Stats', to: 'Stats', scrollTo: '#stats' },
        { text: 'Customers', to: 'Customers', scrollTo: '#customers' }
      ],
      pageScrolled: false
    }
  },
  methods: {
    toggleNavMenu () {
      this.showNavMenu = !this.showNavMenu
    },
    handleScroll () {
      this.pageScrolled = window.scrollY > 0
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
