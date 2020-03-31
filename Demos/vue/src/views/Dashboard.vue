<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-alert type="success">
            I'm a success alert.
          </v-alert>
        </v-col>

        <v-col cols="12">
          <v-alert type="info">
              I'm an info alert.
          </v-alert>
        </v-col>

        <v-col cols="12">
          <v-alert type="warning">
            I'm a warning alert.
          </v-alert>
        </v-col>

        <v-col cols="12">
          <v-alert type="error">
            I'm an error alert.
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <!-- <v-btn @click="addChart"><v-btn> -->
        <v-col cols="7" class=" my-5">
          <v-card class="pa-2">   
            <datetimeChart />
          </v-card>
        </v-col>

        <v-col cols="5" class=" my-5" >
          <v-card class="pa-2"> 
            <radialBar />   
          </v-card>
        </v-col>
      </v-row>

      <v-row>
          <!-- Linkse Chart-->
          <syncCharts />
          <v-col cols="12" class=" my-5" >
              <v-card class="pa-2"> 
                <!-- Rechste Chart-->
                <lineChartAnnotations />
              </v-card>
          </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
import datetimeChart from "../components/charts/barDateTime.vue";
import radialBar from "../components/charts/radialBar.vue";
import syncCharts from "../components/charts/syncCharts.vue";
import lineChartAnnotations from "../components/charts/lineChartAnnotations.vue";
export default 
{
  components: 
  {
    datetimeChart, radialBar, syncCharts, lineChartAnnotations,
  }
}
</script>

<style lang="scss" scoped>

</style>