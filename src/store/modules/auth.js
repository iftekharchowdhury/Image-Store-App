const state = {
    // token is property and null is value
    token: null
};

const getters = {
    // es6 arrow function 
    // isLoggedIn is function - automatically call state object(upper state).
    // this state is a argument 
    // !!null = false || !!'jsfjlksjf39430' = true 
    isLoggedIn: state => !!state.token
};

const actions = {

    logout: ({ commit }) =>{

        commit('setToken', null);

    }
};

const mutations = {

    setToken: (state, token) => {

        state.token = token;

    }
};