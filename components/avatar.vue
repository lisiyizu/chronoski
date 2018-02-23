<template>
  <div class="Avatar">
    <component :is="avatar"/>
  </div>
</template>

<script>
import girl from '@/components/svg/girl'
import boy from '@/components/svg/boy'
import santa from '@/components/svg/santa'
import snowman from '@/components/svg/snowman'
import gingerbread from '@/components/svg/gingerbread'
import angel from '@/components/svg/angel'
import star from '@/components/svg/star'
import tree from '@/components/svg/tree'
import mountain from '@/components/svg/mountain'
import snow from '@/components/svg/snow'
import pist from '@/components/svg/pist'
import avalanche from '@/components/svg/avalanche'
import ski from '@/components/svg/ski'
import goggle from '@/components/svg/goggle'
import gant from '@/components/svg/gant'

export default {
  props: {
    number: Number,
    default: 0
  },
  components: {
    girl,
    boy,
    santa,
    snowman,
    gingerbread,
    angel,
    star,
    tree,
    mountain,
    snow,
    pist,
    avalanche,
    ski,
    goggle,
    gant
  },
  computed: {
    avatar () {
      return ['girl', 'boy', 'santa', 'snowman', 'gingerbread', 'angel', 'star', 'tree', 'mountain', 'snow', 'pist', 'avalanche', 'ski', 'goggle', 'gant'][this.number]
    }
  }
}
</script>

