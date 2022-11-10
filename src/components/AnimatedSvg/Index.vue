<template>
<div :class="[wrapperClass, 'h-8']">
  <img :src="`${imgSrc}?q=${new Date().getMilliseconds()}`" :class="['mx-auto', width, isIntersecting ? 'visible' : 'hidden']" />
</div>
</template>

<script>
export default {
  props: {
    wrapperClass: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: 'w-2/3',
      required: false
    }
  },
  data () {
    return {
      isIntersecting: false
    }
  },
  mounted () {
    const target = document.querySelector(`.${this.wrapperClass}`)
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
