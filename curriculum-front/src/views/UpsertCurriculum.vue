<template>
  <v-row no-gutters class="home-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <div class="page-header">
        <h1>Create Curriculum</h1>
        <v-btn>Save</v-btn>
      </div>

      <v-form class="upsert-form">
        <v-row>
          <v-col cols="3">
            <v-subheader>Name *</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-subheader>Goal *</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-label>Label</v-label>
            <v-text-area solo name="description" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="curricula-list">
              <v-card class="mx-auto" outlined>
                <v-card-title class="headline">Section #1</v-card-title>
                <v-card-text>
                  <v-row no-gutters >
                    <v-col cols="3">
                      <v-subheader>Name *</v-subheader>
                    </v-col>
                    <v-col cols="9">
                      <v-text-field />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3">
                      <v-subheader>Goal *</v-subheader>
                    </v-col>
                    <v-col cols="9">
                      <v-text-field />
                    </v-col>
                  </v-row>
                  <v-card class="resources-card">
                    <v-card-text>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-text-field
                          placeholder="Enter resource link" />
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <p>List of resources</p>
                          <p>List of resources</p>
                          <p>List of resources</p>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                  <v-card class="projects-card">
                    <v-card-text>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-text-field
                          placeholder="Enter project link" />
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <p>List of projects</p>
                          <p>List of projects</p>
                          <p>List of projects</p>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn>Add section</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>
