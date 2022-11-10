<template>
<div class="grid grid-cols-1 grid-rows-1 text-center gap-2">
  <img :src="imgSrc" class="mx-auto" />
  <h1>{{title}}</h1>
  <p class="text-gray-600">
    {{text}}
  </p>
  <animated-svg wrapperClass='our-skills-square-wrapper' width="w-1/3" :imgSrc="`${$publicPath}img/rect-blue.svg`" />
</div>
</template>

<script>
import AnimatedSvg from '@/components/AnimatedSvg/Index'

export default {
  components: {
    AnimatedSvg
  },
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isIntersecting: false
    }
  },
  mounted () {
    const target = document.querySelector('.our-skills-square-wrapper')
    if (!target) return
    const callback = (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isIntersecting = true
        } else {
          this.isIntersecting = false
        }
      })
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px',
      threshold: 0
    })
    observer.observe(target)
  }
}
</script>
