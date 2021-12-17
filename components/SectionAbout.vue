<template>
  <section class="about">
    <SectionHeader subtitle="Know More">Meet The Houses</SectionHeader>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  name: 'SectionAbout',
  components: {
    SectionHeader,
  },
};
</script>

<style lang="scss" scoped>
.about {
  min-height: 50vh;
  p {
    width: 200px;
    height: 200px;
    overflow: scroll;
  }
}
</style>
