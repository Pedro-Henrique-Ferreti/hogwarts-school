<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <HomeSection />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import HomeSection from '@/components/HomeSection.vue';

export default {
  name: 'IndexPage',
  components: {
    TheHeader,
    HomeSection,
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding-top: $header-height__mobile;
  @media (min-width: $desktop-up) {
    padding-top: $header-height__desktop;
  }
}
</style>