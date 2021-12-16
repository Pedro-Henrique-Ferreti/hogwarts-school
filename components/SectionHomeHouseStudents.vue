<template>
  <div class="house-students">
    <div class="house-students__card house-students__card--red">
      <span class="house-students__quantity">12.875</span>
      <h3 class="house-students__house-name">Griffyndor</h3>
    </div>
    <div class="house-students__card house-students__card--blue">
      <span class="house-students__quantity">9.334</span>
      <h3 class="house-students__house-name">Ravenclaw</h3>
    </div>
    <div class="house-students__card house-students__card--yellow">
      <span class="house-students__quantity">6.982</span>
      <h3 class="house-students__house-name">Hufflepuff</h3>
    </div>
    <div class="house-students__card house-students__card--green">
      <span class="house-students__quantity">4.776</span>
      <h3 class="house-students__house-name">Slytherin</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionHomeHouseStudents',
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
  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 124px;
    height: 90px;
    &--red {
      background-color: $red-1;
    }
    &--blue {
      background-color: $blue-1;
    }
    &--green {
      background-color: $green-1;
    }
    &--yellow {
      background-color: $golden-1;
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
