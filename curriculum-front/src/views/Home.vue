<template>
  <v-row no-gutters class="home-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <div class="page-header">
      <h1>All Curriculum</h1>
      <v-btn>Create New</v-btn>
      </div>
      <div class="curricula-list">
        <v-card class="mx-auto" outlined>
          <v-card-title class="headline">Title</v-card-title>
          <v-card-subtitle>description text</v-card-subtitle>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
