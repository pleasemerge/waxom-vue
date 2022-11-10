<template>
<div class="bg-gradient-to-r from-primary-dark to-primary-darkest">
  <div class="app-container py-4 md:py-10 grid grid-cols-1 md:grid-cols-4 grid-rows-1">
    <div v-for="(item, index) of stats" :key="index" class="py-4 flex flex-wrap items-center justify-center text-white">
      <div class="w-full"><img :src="item.imgSrc" class="mx-auto" /></div>
      <div class="w-full text-center py-2"><h1>{{item.value}}</h1></div>
      <div class="w-full text-center text-amber-100">{{item.text}}</div>
      <div class="text-white">
        <animated-svg :imgSrc="`${$publicPath}img/rect-white.svg`" wrapperClass="stats-rect" width="w-1/3" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AnimatedSvg from '@/components/AnimatedSvg/Index'
import { publicPath } from '@/helpers/path'

export default {
  components: {
    AnimatedSvg
  },
  data () {
    return {
      stats: [
        { value: 3587, text: 'Satisfied clients', imgSrc: `${publicPath}img/stats/1.png` },
        { value: 207, text: 'Cups of coffee', imgSrc: `${publicPath}img/stats/2.png` },
        { value: 2500, text: 'Blog posts', imgSrc: `${publicPath}img/stats/3.png` },
        { value: 873, text: 'Likes', imgSrc: `${publicPath}img/stats/4.png` }
      ]
    }
  }
}
</script>
