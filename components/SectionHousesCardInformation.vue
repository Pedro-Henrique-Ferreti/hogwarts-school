<template>
  <div class="card-information">
    <p>Hogwarts is divided into four houses, each bearing the last name of its founder: </p>
    <br />
    <p>
      Godric Gryffindor <br />
      Salazar Slytherin <br />
      Rowena Ravenclaw <br />
      Helga Hufflepuff
    </p>
    <br />
    <p>
      Throughout the school year, the houses compete for the House Cup, gaining and losing points based on actions such as performance in class and rule violations. The house with the highest end-of-year total wins and has its colours displayed in the Great Hall for the following school year. Each house also has its own Quidditch team that competes for the Quidditch Cup. These two competitions breed rivalries between the houses.
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionHousesCardInformation',
};
</script>

<style lang="scss" scoped>
.card-information {
  @include card-height;
  width: 100%;
  max-width: 500px;
  padding: $spacing__mobile;
  margin: auto;
  overflow: auto;
  @media (min-width: $large-tablet-landscape-up) {
    padding-left: $spacing__desktop;
  }
  &::-webkit-scrollbar {
    background-color: $white;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $red-1;
    border-radius: 15px;
  }
}
</style>
