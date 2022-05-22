import * as Vuex from 'vuex'

interface GithubUser {
  id: string,
  username: string
}

export type GithubState = {
  users: GithubUser[]
}

const state: GithubState = {
  users: [
    {
      id: 'test',
      username: 'test'
    }
  ]
}

const getters = {
  getUsers: (state: GithubState) : GithubUser[] => state.users
}

const actions = {
  setUsers({ commit } : { commit: Vuex.Commit }, payload: GithubUser[]) {
    commit('UPDATE_USERS', payload)
  }
}

const mutations = {
  UPDATE_USERS(state: GithubState, users: GithubUser[]) {
    state.users = users
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

