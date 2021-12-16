<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <SectionHome />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import SectionHome from '@/components/SectionHome.vue';

export default {
  name: 'IndexPage',
  components: {
    TheHeader,
    SectionHome,
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