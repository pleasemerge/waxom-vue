<template>
<div class="grid grid-cols-1 md:grid-cols-4 grid-rows-1 gap-4">
  <the-item
    v-for="(item, index) of items"
    :key="index"
    :imgSrc="item.imgSrc"
    :title="item.title"
    :text="item.text"
  />
</div>
</template>

<script>
import { publicPath } from '@/helpers/path'
import TheItem from './Item'
const loremIpsum = 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.'

export default {
  components: {
    TheItem
  },
  data () {
    return {
      items: [
        { imgSrc: `${publicPath}img/skills/1.png`, title: 'Web & App Design', text: loremIpsum },
        { imgSrc: `${publicPath}img/skills/2.png`, title: 'Development', text: loremIpsum },
        { imgSrc: `${publicPath}img/skills/3.png`, title: 'Customization', text: loremIpsum },
        { imgSrc: `${publicPath}img/skills/4.png`, title: 'Marketing', text: loremIpsum }
      ]
    }
  }
}
</script>
