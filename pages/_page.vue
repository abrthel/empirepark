<template>
  <article>
    <h1>{{page.title}}</h1>
    <div>{{page.body}}</div>
  </article>
</template>

<script>
export default {
  async asyncData({params, payload}) {
    if (payload) return { page: payload }
    else
      return {
        page: await require(`~/assets/content/pages/${params.page}.json`),
      }
  }
}
</script>
