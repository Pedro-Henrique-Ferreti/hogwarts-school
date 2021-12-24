<template>
  <div class="house-students">
    <div class="house-students__card house-students__card--red sr-load-hidden">
      <span class="house-students__quantity">12.875</span>
      <h3 class="house-students__house-name">Griffyndor</h3>
    </div>
    <div class="house-students__card house-students__card--blue sr-load-hidden">
      <span class="house-students__quantity">9.334</span>
      <h3 class="house-students__house-name">Ravenclaw</h3>
    </div>
    <div class="house-students__card house-students__card--yellow sr-load-hidden">
      <span class="house-students__quantity">6.982</span>
      <h3 class="house-students__house-name">Hufflepuff</h3>
    </div>
    <div class="house-students__card house-students__card--green sr-load-hidden">
      <span class="house-students__quantity">4.776</span>
      <h3 class="house-students__house-name">Slytherin</h3>
    </div>
  </div>
</template>

<script>
import scrollReveal from '@/plugins/scrollReveal.js';

export default {
  name: 'SectionHomeHouseStudents',
  mounted() {
    scrollReveal('.house-students__card--red', { origin: 'right' });
    scrollReveal('.house-students__card--blue', { origin: 'right', delay: 400 });
    scrollReveal('.house-students__card--yellow', { origin: 'right', delay: 500 });
    scrollReveal('.house-students__card--green', { origin: 'right', delay: 600 });
  },
};
</script>

<style lang="scss" scoped>
.house-students {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  @media (min-width: $large-tablet-landscape-up) {
    flex-wrap: unset;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    width: 280px;
    max-width: unset;
    margin: unset;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 90px;
    @media (min-width: $large-tablet-landscape-up) {
      flex-direction: row-reverse;
      justify-content: space-between;
      height: unset;
      padding: 16px 24px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      &--red {
        width: 100%;
      }
      &--blue {
        width: 90%;
      }
      &--yellow {
        width: 80%;
      }
      &--green {
        width: 70%;
      }
    }
    &--red {
      background-color: $red-1;
    }
    &--blue {
      background-color: $blue-1;
    }
    &--yellow {
      background-color: $golden-1;
    }
    &--green {
      background-color: $green-1;
    }
  }
  &__quantity {
    font-size: 24px;
    color: $white;
  }
  &__house-name {
    color: $white;
    font-family: $font-family-arbutus-slab;
  }
}
</style>
