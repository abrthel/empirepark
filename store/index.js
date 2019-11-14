export const state = () => ({
  pages: [],
});

export const mutations = {
  setPages(state, list) {
    state.pages = list;
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context('~/assets/content/pages/', false, /\.json$/);
    let pages = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setPages', pages);
  }
}
