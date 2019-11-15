<template>
  <header class="w-full bg-transparent">
    <div class="container h-24 flex items-center justify-between">
       <nuxt-link class="block" to="/">
        <img src="/images/logo.png" alt="Empire Park Community League">
       </nuxt-link>

      <nav class="flex">
        <nuxt-link to="/test-page">Test Page</nuxt-link>
        <a class="px-2" href="/">Programs & Events</a>
        <a class="px-2" href="/">Hall Rentals</a>
        <div>
          <p>Newsletters</p>
          <a href="/">June/July 2018</a>
        </div>
      </nav>
    </div>
  </header>
</template>
