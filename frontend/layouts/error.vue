<template>
  <v-card style="height: 80%" class="mt-4">
    <h1
      v-if="error.statusCode === 404"
      class="d-flex justify-center flex-column align-center"
    >
      <v-card-title>
        <v-icon> mdi-arrow-left </v-icon> Упс вышла ошибка. Зайди снова на свою
        страницу
      </v-card-title>
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
  </v-card>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
