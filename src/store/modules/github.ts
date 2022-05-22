import * as Vuex from 'vuex'
import axios from "axios"
import * as yup from "yup"

const gitHubUserSchema = yup.object({
  id: yup.number().required(),
  login: yup.string().required(),
  avatar_url: yup.string().url().required(),
  url: yup.string().url().required(),
})

type GithubUser = yup.InferType<typeof gitHubUserSchema>;

export type GithubState = {
  users: GithubUser[],
  fetched: boolean,
  fetching: boolean,
  error: string | null
}

const state: GithubState = {
  users: [],
  fetched: false,
  loading: false,
  error: null
}

const getters = {
  getUsers: (state: GithubState): GithubUser[] => state.users,
  isUsersFetched: (state: GithubState): boolean => state.fetched,
  isLoading: (state: GithubState): boolean => state.loading,
  hasError: (state: GithubState): boolean => !!state.error,
  getError: (state: GithubState): string => state.error || '',
}

const actions = {
  async fetchUsers({ commit, dispatch } : { commit: Vuex.Commit, dispatch: Vuex.dispatch }) {
    dispatch('setLoading', true)
    try {
      const { data } = await axios.get('https://api.github.com/users')
      const users = await yup.array(gitHubUserSchema).validate(data)
      commit('SET_USERS', users.slice(0, 10))
    } catch (e) {
      commit('SET_ERROR', e.message)
    } finally {
      dispatch('setLoading', false)
    }
  },

  setLoading({ commit } : { commit: Vuex.Commit }, loading) {
    commit('SET_LOADING', loading)
  },

  removeUser({ commit, getters } : { commit: Vuex.Commit, getters: Vuex.Getters }, userId) {
    const filteredUsers = getters.getUsers.filter(user => user.id !== userId)
    commit('SET_USERS', filteredUsers)
  }
}

const mutations = {
  SET_USERS(state: GithubState, users: GithubUser[]) {
    state.users = users
    state.fetched = true
  },

  SET_LOADING(state: GithubState, loading: boolean) {
    state.loading = loading
  },

  SET_ERROR(state: GithubState, error: string) {
    state.error = error
  }
}


const store: Vuex.Module<GithubState, unknown> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default store

