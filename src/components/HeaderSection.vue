<template>
  <div class="container">
    <div class="children_container">
      <RouterLink to="/">
        <div class="logo">Жилфонд</div>
      </RouterLink>
      <div class="user">Пользователь</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-section',
}
</script>

<style scoped lang="scss">
@import 'src/styles';

a {
  text-decoration: inherit;
  color: inherit;
}

.container{
  width: $width100;
  display: flex;
  justify-content: center;
  font-family: $f_family;
}

.children_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 115px;
  width: $widthWindowHeader;
  .logo {
    padding-left: 5px;
    width: 171px;
    height: 39px;
    font-style: normal;
    font-weight: $bold;
    font-size: 32px;
    line-height: 39px;
    color: $brand-color;
  }
  .user {
    padding-right: 5px;
    width: 117px;
    height: 20px;
    font-weight: $regular;
    font-size: 16px;
    line-height: 20px;
    color: $header-color-text;
  }
}

</style>