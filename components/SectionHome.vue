<template>
  <section class="app-section home" id="home">
    <Banner />
    <div class="home__card-wrapper">
      <CardQuidditch />
      <CardHogsmeade />
    </div>
    <HouseStudents />
  </section>
</template>

<script>
import Banner from '@/components/SectionHomeBanner.vue';
import CardQuidditch from '@/components/SectionHomeCardQuidditch.vue';
import CardHogsmeade from '@/components/SectionHomeCardHogsmeade.vue';
import HouseStudents from '@/components/SectionHomeHouseStudents.vue';

export default {
  name: 'SectionHome',
  components: {
    Banner,
    CardQuidditch,
    CardHogsmeade,
    HouseStudents,
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
  &__card-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 16px;
    margin-top: 60px;
  }
}
</style>
