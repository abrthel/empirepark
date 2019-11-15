<template>
  <main>
    <section class="hero flex justify-center items-center">
      <div class="container">
        <h1 class="text-white text-3xl font-black">We're a non-profit community organization for</h1>
      </div>
    </section>

    <section>
      <div class="container flex justify-between">
        <div class="px-6 mx-4 py-4 w-1/3 bg-red-600 text-white">
          <h2>Community Crime Survey</h2>
          <p>
            City of edmonton is asking residents of Empire Park to fill
            out a crime survey. It can be located at <a href="https://bit.ly/33Ei5ta">https://bit.ly/33Ei5ta</a>
          </p>
        </div>
        <div class="p-4 w-1/3 bg-blue-600 text-white">
          <h2>WinterFest! 2020</h2>
          <p>
            Our annual WinterFest! is back on <strong>Saturday, January 4th</strong>
          </p>
          <ul>
            <li>free skating, outdoor winter activities & crafts</li>
            <li>roasted marshmallows and 'smores at the firepit</li>
            <li>warm up with hot chocolate or coffee</li>
          </ul>
        </div>
        <div class="p-4 w-1/3 bg-purple-600 text-white">
          <h2>Ice Making Workshop</h2>
          <p>
            Are you interested in building and maintaining your community ice rink? The City of Edmonton
            is hosting a <strong>free</strong> training session on Thursday, November 14th @ 6:00pm - light supper included.
            Call Brian at (587) 709-0100 to secure a spot!
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="container mt-20">
        <h1 class="text-3xl font-black uppercase text-center mb-2">{{membership_section.title}}</h1>
        <h2 class="text-center mb-6">{{membership_section.sub_title}}</h2>
        <div class="flex justify-around">
          <div class="flex flex-col items-center px-3 w-full md:w-1/4" v-for="benefit in benefits" :key="benefit.title">
            <i class="block fa-4x mb-4" :class="benefit.icon"></i>
            <h3 class="text-center mb-2">{{benefit.title}}</h3>
            <p class="mb-4 text-center">{{benefit.description}}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import Logo from '~/components/Logo.vue'

// export default {
//   components: {
//     Logo
//   }
// }

export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  computed: {
    hero_section: state => {
      return this.$store.state.homepage.hero_section;
    },

    benefits() {
      return this.$store.state.homepage.benefits_section.benefits;
    },

    membership_section() {
      return this.$store.state.homepage.benefits_section;
    }
  }
};
</script>

<style>
  .hero {
    background-image: url(/images/ep-banner.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 595px;
  }
</style>
