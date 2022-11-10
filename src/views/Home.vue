<template>
<div>
  <app-header />
</div>
<div id="our-skills-wrapper" class="app-container my-4 md:my-16">
  <our-skills />
</div>
<div class="bg-secondary">
  <div class="app-container my-2">
    <app-promo />
  </div>
</div>

<div class="app-container" id="latest-projects">
  <latest-projects />
</div>

<div class="mt-0 md:mt-4" id="presentation">
  <app-video :videoSrc="`${$publicPath}video/placeholder.webm`" />
</div>

<div id="stats">
  <app-stats />
</div>

<div id="customers">
  <our-customers />
</div>

<footer id="footer" class="bg-black">
  <app-footer class="app-container" />
</footer>
</template>

<script>
import AppHeader from '@/components/Header/Index'
import OurSkills from '@/components/OurSkills/Index'
import AppPromo from '@/components/Promo/Index'
import LatestProjects from '@/components/LatestProjects/Index'
import AppVideo from '@/components/Video/Index'
import AppStats from '@/components/Stats/Index'
import OurCustomers from '@/components/OurCustomers/Index'
import AppFooter from '@/components/Footer/Index'

export default {
  name: 'Home',
  components: {
    AppHeader,
    OurSkills,
    AppPromo,
    LatestProjects,
    AppVideo,
    AppStats,
    OurCustomers,
    AppFooter
  }
}
</script>
