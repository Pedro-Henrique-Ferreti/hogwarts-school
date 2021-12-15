<template>
  <section class="app-section home" id="home">
    <Banner />
  </section>
</template>

<script>
import Banner from '@/components/HomeSectionBanner.vue';

export default {
  name: 'HomeSection',
  components: {
    Banner,
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 100px 0px 64px 0px;
  background-color: $blue-1;
  background-image: url('@/assets/images/home-background@medium.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
