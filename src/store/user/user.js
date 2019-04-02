const namespaced = true

const state = {
  user: {
    firstName: null,
    lastName: null,
    login: null,
    email: null,
    id: null,
    langKey: null,
    authorities: []
  }
}

const getters = {
  isAuthenticated: state => {
    return state.user.id != null
  }
}

const mutations = {
  login: (state, user) => {
    state.user = user
  },

  logout: (state) => {
    state.user = {}
  }
}

const actions = {
  login: ({ commit }, user) => {
    commit('login', user)
  },

  logout: ({ commit }) => {
    commit('logout')
  }
}

export default {
  namespaced,
  getters,
  mutations,
  actions,
  state
}
