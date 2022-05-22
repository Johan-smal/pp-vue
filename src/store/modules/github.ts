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
  fetching: boolean
}

const state: GithubState = {
  users: [],
  fetched: false,
  loading: false,
}

const getters = {
  getUsers: (state: GithubState) : GithubUser[] => state.users,
  isUsersFetched: (state: GithubState) : boolean => state.fetched,
  isLoading: (state: GithubState) : boolean => state.loading,
}

const actions = {
  async fetchUsers({ commit, dispatch } : { commit: Vuex.Commit, dispatch: Vuex.dispatch }) {
    dispatch('setLoading', true)
    try {
      const { data } = await axios.get('https://api.github.com/users')
      const users = await yup.array(gitHubUserSchema).validate(data)
      commit('SET_USERS', users.slice(0, 10))
    } catch (e) {
      // TODO handle errors
      alert('error')
      console.log(e)
    } finally {
      dispatch('setLoading', false)
    }
  },

  setLoading({ commit } : { commit: Vuex.Commit }, loading) {
    commit('SET_LOADING', loading)
  }
}

const mutations = {
  SET_USERS(state: GithubState, users: GithubUser[]) {
    state.users = users
    state.fetched = true
  },

  SET_LOADING(state: GithubState, loading: boolean) {
    state.loading = loading
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

