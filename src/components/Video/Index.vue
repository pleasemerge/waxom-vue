<template>
<div class="relative h-100 min-h-full bg-cover flex items-center justify-center text-white">
  <div
    v-if="showVideoBg"
    class="absolute flex items-center justify-center bottom-0 left-0 w-full h-full z-10"
    :style="{ backgroundImage: `url('/img/video-bg.png')` }"
  >
    <div>
      <a href="javascript:;" @click="playVideo"><img src="/img/video_play.png" class="block mx-auto" /></a>
      <div class="text-center">
        <h1><a href="javascript:;" @click="playVideo">Waxom Video Presentation</a></h1>
        <p class="py-4">
          Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius, qui sequitur mutationem consuetudium.
        </p>
      </div>
    </div>
  </div>
  <div class="absolute left-0 bottom-0 w-full h-full">
    <video controls="controls" class="w-full h-full object-fill" id="placeholder-video">
      <source :src="videoSrc" type="video/webm" />
    </video>
  </div>
</div>
</template>

<script>
export default {
  props: {
    videoSrc: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      video: null,
      videoStopped: true,
      showVideoBg: true
    }
  },
  methods: {
    playVideo () {
      this.showVideoBg = false
      this.video.play()
    }
  },
  mounted () {
    this.video = document.getElementById('placeholder-video')
    this.video.addEventListener('play', (e) => {
      this.showVideoBg = false
    })
    this.video.addEventListener('pause', (e) => {
      if (this.video.readyState === 4) {
        this.showVideoBg = true
        this.video.currentTime = 0
      }
    })
  }
}
</script>
