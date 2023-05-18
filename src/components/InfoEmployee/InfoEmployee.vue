<template>
  <my-preloader v-if="isUserLoading"/>
  <div v-else class="container">
    <div class="user_card">
      <div class="img_container">
        <img src="../../assets/img.png" alt="photo-profile">
      </div>
      <div class="card_info">
        <div class="contact_info">
          <div class="name">{{ user.name }}</div>
          <div class="email">
            <strong>email: </strong>{{ user.email }}
          </div>
          <div class="phone"><strong>phone: </strong>{{ user.phone }}</div>
        </div>
        <div class="about_me">
          <h4>О себе:</h4>
          <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MyPreloader from "@/components/UI/MyPreloader";

export default {
  name: 'info-employee',
  components: {MyPreloader},
  data() {
    return {
      user: {},
      isUserLoading: false,
    }
  },
  methods: {
    async fetchUser() {
      try {
        this.isUserLoading = true;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`);
        this.user = response.data;
      } catch (e) {
        alert('Ошибка при запросе данных сотрудника')
        alert(e)
      } finally {
        this.isUserLoading = false;
      }
    }
  },
  mounted() {
    this.fetchUser();
  },
  watch: {
    $route(to, from) {
      this.fetchUser();
    }
  }
}
</script>

<style scoped lang="scss">
@import 'src/styles';

.container {
  height: 100%;
  font-family: $f_family;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 976px;
  color: #76787D;
  font-size: 14px;
  font-weight: 400;
  background-color: #FDFDFD;

  .user_card {
    display: flex;
    flex-direction: row;
    margin: 30px 25px 260px 25px;
    max-height: 575px;

    .img_container {
      img {
        width: 424px;
        height: 286px;
      }
    }

    .card_info {
      margin: 0 0 0 61px;
      display: flex;
      flex-direction: column;

      .contact_info {
        display: flex;
        flex-direction: column;

        .name {
          margin: 0 0 5px 0;
          font-size: 16px;
          font-weight: $semi_bold;
          color: $cl_title;
        }

        .email {
          margin: 5px 0 5px 0;

          strong {
            color: $cl_title;
          }
        }

        .phone {
          margin: 5px 0 0 0;

          strong {
            color: $cl_title;
          }
        }
      }
    }

    .about_me {
      h4 {
        color: #333333;
        margin-top: 20px;
        margin-bottom: 25px;
      }

      span {
        font-size: 14px;
        font-weight: $regular;
      }
    }
  }
}
</style>