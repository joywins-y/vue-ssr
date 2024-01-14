export const actions = {
  nuxtServerInit({ commit }, { req }) {
    const cookie = req && req.headers.cookie;
    const val = getCookie(cookie, "session");
    if (val) {
      const user = getCookie(cookie, "username");
      commit("setUser", user);
      commit("setLogin", true);
    }
  },
};

function getCookie(cookie, key) {
  if (!cookie) {
    return;
  }
  const cookies = cookie.split("");
  for (let i = 0; i < cookies.length; i++) {
    const c = cookies[i];
    const [k, v] = c.split("=");
    if (k == key) {
      return v;
    }
  }
}
export const state = () => ({
  user: null,
  isLogin: false,
});

export const mutations = {
  setUser(state, val) {
    state.user = val;
  },
  setLogin(state, val) {
    state.isLogin = val;
  },
};
