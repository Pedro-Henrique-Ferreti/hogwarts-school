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
  background-image: url('@/assets/images/home-background@1920_1280.png');
  background-position: center 15%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media (min-width: $large-tablet-landscape-up) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    min-height: 500px;
    height: calc(100vh - $header-height__desktop);
    padding: 0;
    position: relative;
  }
  @media (min-width: $desktop-up) {
    background-image: url('@/assets/images/home-background@2400_1600.png');
  }
  &__card-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 16px;
    margin-top: 60px;
    @media (min-width: $large-tablet-landscape-up) {
      gap: unset;
      margin-top: 0;
      justify-content: unset;
    }
  }
}
</style>
