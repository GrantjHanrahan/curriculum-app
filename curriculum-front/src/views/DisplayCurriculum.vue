<template>
  <v-row no-gutters class="display-curriculum-page">
    <v-col md="6" offset-md="3" sm="8" offset-sm="2">
      <v-row>
        <v-col>
          <h1>{{ selectedCurriculum.name }}</h1>
          <p>{{ selectedCurriculum.description }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-expansion-panels multiple>
            <v-expansion-panel>
              <v-expansion-panel-header>Item 1</v-expansion-panel-header>
              <v-expansion-panel-content>
                 <v-list
                    subheader
                    two-line
                    flat
                  >
                    <v-subheader>Resources </v-subheader>

                    <v-list-item-group
                      v-model="settings"
                      multiple
                    >
                      <v-list-item>
                          <v-list-item-action>
                            <v-checkbox
                              v-model="active"
                              color="primary"
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                            <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
                          </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                          <v-list-item-action>
                            <v-checkbox
                              v-model="active"
                              color="primary"
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Sound</v-list-item-title>
                            <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
                          </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                          <v-list-item-action>
                            <v-checkbox
                              v-model="active"
                              color="primary"
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Video sounds</v-list-item-title>
                            <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
                          </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                          <v-list-item-action>
                            <v-checkbox
                              v-model="active"
                              color="primary"
                            ></v-checkbox>
                          </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title>Invites</v-list-item-title>
                            <v-list-item-subtitle>Notify when receiving invites</v-list-item-subtitle>
                          </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Item 2</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Item 3</v-expansion-panel-header>
              <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
     </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DisplayCurriculum',
  data () {
    return {
      selectedCurriculum: {}
    }
  },
  computed: {
    ...mapState(['curriculaData'])
  },
  mounted () {
    this.selectedCurriculum = this.curriculaData.find((curriculum) => {
      console.log(this.curriculaData)
      return curriculum.id === this.$route.params.id
    })
  }
}
</script>
