const namespaced = true;

const state = {
    idToken : null,
    username : null,
    role    : null
};

const getters = {
    isAuthenticated : state => {
        return state.idToken !== null;
    }
};

const mutuations = {
    login: (state, user) => {
        state.idToken = user.idToken;
        state.username = user.username;
        state.role = user.role;
    },

    logout: (state, user) => {
        state.idToken = null;
        state.username = null;
        state.role = null;
    }
};

const actions = {
    login: ({commit}, user) => {
        commit('login', user);
    },

    logout: ({commit}, user) => {
        commit('logout', user);
    }
};


export default {
    namespaced,
    getters,
    mutuations,
    actions,
    state
}