<template>
  <div class="container">
    <div class="package">
      <img src="../../assets/img_1.png" alt="photo-profile">
      <div class="concise_information">
        <span class="name">{{ user.username }}</span>
        <span class="email">{{ user.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-package',
  props: {
    user: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
@import 'src/styles';

.container {
  width: 240px;
  height: 70px;
  background: #FFFFFF;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 18px 0 18px 20px;
  font-family: $f_family;
  cursor: pointer;

  img {
    width: 69px;
    height: 70px;
    background-color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: 1px solid #E0E0E0;
  }

  .package {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-height: 70px;
    max-width: 240px;
  }

  .concise_information {
    font-weight: $regular;
    width: 165px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 15px;
    font-size: 14px;
    overflow: hidden;

    .email {
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 140px;
      overflow: hidden;
    }

    span {
      max-width: 140px;
      width: 100%;
      word-break: break-all;
    }

    .name {
      font-weight: $semi_bold;
    }
  }

  .package:active {
    background-color: #E0E0E0;
    border-radius: 10px;
  }
}
</style>