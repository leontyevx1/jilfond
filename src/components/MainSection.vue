<template>
  <div class="main_container">
    <div class="children_container">
      <div class="search_column">
        <h3>Поиск сотрудников</h3>
        <my-input
            class="input_search"
            type="text"
            placeholder="Введите имя сотрудника"
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
        />
        <h3>Результаты</h3>
        <p v-if="!searchQuery" class="results">Начните поиск</p>
        <p v-else-if="!searchedUsers?.length" class="results">Ничего не найдено</p>
        <div v-else class="user_container">
          <user-package
              @click="$router.push(`/users/${user.id}`)"
              :user="user"
              v-for="user in searchedUsers"
              :key="user.id"
              @remove="$emit('remove', user)"
          />
        </div>
      </div>
      <div class="default_block">
        <my-preloader v-if="isUsersLoading"/>
        <router-view v-else></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import UserPackage from "@/components/UserPackage/UserPackage";
import {mapActions, mapGetters, mapState, mapMutations} from 'vuex';
import MyInput from "@/components/UI/MyInput";
import DefaultBlock from "@/components/defaultBlock";
import MyPreloader from "@/components/UI/MyPreloader";

export default {
  components: {MyPreloader, DefaultBlock, MyInput, UserPackage},
  name: 'main-section',
  methods: {
    ...mapMutations({
      setSearchQuery: 'user/setSearchQuery',
      setLoading: 'user/setLoading'
    }),
    ...mapActions({
      fetchUsers: 'user/fetchUsers',
    }),
  },
  mounted() {
    this.fetchUsers();
  },
  computed: {
    ...mapState({
      users: state => state.user.users,
      usersFiltered: state => state.user.usersFiltered,
      isUsersLoading: state => state.user.isUsersLoading,
      searchQuery: state => state.user.searchQuery,
      isUserLoading: data => data.pop.isUserLoading
    }),
    ...mapGetters({
      searchedUsers: 'user/searchedUsers',
    }),
  }
}

</script>

<style scoped lang="scss">
@import 'src/styles';

a {
  text-decoration: inherit;
  color: inherit;
}

.main_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  font-family: $f_family;

  .children_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1266px;
    height: 575px;
    background: #FDFDFD;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
  }

  .default_block {
    width: 975px;
    height: 575px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .search_column {
    padding: 0;
    width: 291px;
    height: 100%;
    border-right: 1px solid $border_color;

    .input_search {
      width: 210px;
      height: 46px;
      border: 1.5px solid $border_color;
      border-radius: 8px;
      padding: 0 15px;
      margin-left: 20px;
    }

    h3 {
      padding-left: 20px;
      font-size: 16px;
      font-weight: $semi_bold;
      padding-top: 11px;
    }

    .results {
      font-size: 14px;
      font-weight: $regular;
      padding-left: 20px;
    }
  }

  .user_container {
    height: 400px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

</style>
