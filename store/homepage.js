export const state = () => ({
  hero_section: {},
  benefits_section: {},
})

export const mutations = {
  setHeroSection(state, section) {
    state.hero_section = section;
  },

  setBenefitsSection(state, section) {
    state.benefits_section = section;
  }
}

export const actions = {
  async load(context) {
    let homepage = await require('~/assets/content/static_pages/home.json');

    await context.commit('setHeroSection', homepage.hero_section);
    await context.commit('setBenefitsSection', homepage.membership_benefits_section);
  }
}
