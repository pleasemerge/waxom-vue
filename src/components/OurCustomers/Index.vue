<template>
<div
  class="h-94 py-10 w-full flex justify-center items-center flex-wrap bg-cover"
  :style="{ backgroundImage: `url('${$publicPath}img/customers_bg.png')`}"
>
  <img v-for="(item, index) of customers" :key="index" :src="item.img" class="mx-8">
</div>
</template>

<script>
import { publicPath } from '@/helpers/path'

export default {
  data () {
    return {
      customers: [
        { img: `${publicPath}img/customers/1.png` },
        { img: `${publicPath}img/customers/2.png` },
        { img: `${publicPath}img/customers/3.png` },
        { img: `${publicPath}img/customers/4.png` }
      ]
    }
  }
}
</script>
