<template>
<div>
  <div class="flex flex-wrap items-center justify-center">
    <div class="w-full text-center pt-8">
      <h1>Waxom is Realization of your Ideas.</h1>
    </div>
    <p class="w-1/2 text-center py-4 text-gray-600">
      Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.
    </p>
  </div>
  <div class="relative flex">
    <div class="my-20 hidden md:block border">
      <img :src="`${$publicPath}img/realization/2.png`" />
    </div>
    <div class="my-20 hidden md:block">
      <img :src="`${$publicPath}/img/realization/3.png`" />
    </div>
    <div class="relative md:absolute absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-1/2">
      <img :src="`${$publicPath}/img/realization/1.png`" />
    </div>
  </div>
</div>
</template>
