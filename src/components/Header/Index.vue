<template>
<div class="relative header home h-screen flex items-center justify-center text-white bg-cover transition-all duration-500" :style="{ backgroundImage: `url('${currentItem.img}')` }">
  <div class="text-center">
    <h1>{{currentItem.title}}</h1>
    <h2>{{currentItem.subtitle}}</h2>
    <p class="py-6">
      {{currentItem.text}}
    </p>
    <br/>
    <a
      href="javascript:;"
      v-scroll-to="currentItem.scrollTo || ''"
      class="px-4 py-3 rounded text-white bg-primary border-b-2 border-primary-darkest hover:border-primary transition-colors duration-300 hover:text-amber-100"
    >
      Learn more
    </a>
  </div>
  <div class="absolute bottom-10 flex items-center gap-2">
    <a href="javascript:;"
      v-for="(item, index) of items"
      :key="item"
      :class="['rounded-full h-4 w-4 border border-white', isActive({ index }) ? 'bg-white' : '']"
      @click="setItemIndex({ index })"
    ></a>
  </div>
</div>
</template>

<script>
const loremIpsum = 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.'
const publicPath = process.env.BASE_URL
export default {
  data () {
    return {
      items: [
        { img: `${publicPath}img/img1.jpg`, title: 'Unique and modern design', subtitle: 'Content goes there', text: loremIpsum, scrollTo: '#our-skills-wrapper' },
        { img: `${publicPath}img/img2.jpg`, title: 'Title', subtitle: 'Content goes there', text: loremIpsum, scrollTo: '#presentation' },
        { img: `${publicPath}img/img3.jpg`, title: 'Title', subtitle: 'Content goes there', text: loremIpsum, scrollTo: '#presentation' },
        { img: `${publicPath}img/img4.jpg`, title: 'Title', subtitle: 'Content goes there', text: loremIpsum, scrollTo: '#presentation' }
      ],
      currentItem: {},
      currentItemIndex: 0
    }
  },
  methods: {
    setItemIndex ({ index }) {
      this.currentItemIndex = index
    },
    isActive ({ index }) {
      return this.currentItemIndex === index
    }
  },
  watch: {
    currentItemIndex (val) {
      this.currentItem = this.items[val]
    }
  },
  created () {
    this.currentItem = this.items[0]
    // Preload bg images
    for (const item of this.items) {
      const img = new Image()
      img.src = item.img
    }
  }
}
</script>
