<template>
  <v-app>
    <top-nav />
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
  </v-app>
</template>

<script>
import TopNav from '@/components/TopNav'

export default {
  name: 'App',
  components: {
    TopNav
  },
  data: () => ({
    //
  })
}
</script>
