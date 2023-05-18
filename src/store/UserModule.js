import axios from "axios";

export const userModule = {
    state: () => ({
        users: [],
        isUsersLoading: false,
        searchQuery: '',
    }),
    //Так как эта api не позволяет делать live search через запрос, то приходится сначала получать массив пользователей, а после его фильтровать
    getters: {
        searchedUsers(state) {
            return state.users.filter(user => user.username.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setLoading(state, bool) {
            state.isUsersLoading = bool;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {
        async fetchUsers({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                commit('setUsers', response.data);
            } catch (e) {
                alert('Ошибка при запросе сотрудников')
                alert(e)
            } finally {
                commit('setLoading', false);
            }
        },
    },
    namespaced: true
}
