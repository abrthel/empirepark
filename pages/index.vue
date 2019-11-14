<template>
  <main>
    <section class="">
      <div class="hero">
        <div class="container">
          <h1>We're here to help</h1>
        </div>
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
            <ul>
              <li>free skating, outdoor winter activities & crafts</li>
              <li>roasted marshmallows and 'smores at the firepit</li>
              <li>warm up with hot chocolate or coffee</li>
            </ul>
          </p>
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
  </main>
</template>

<script>
// import Logo from '~/components/Logo.vue'

// export default {
//   components: {
//     Logo
//   }
// }
</script>

<style>
  .hero {
    background-image: url(/images/ep-banner.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 602px;
  }
</style>
