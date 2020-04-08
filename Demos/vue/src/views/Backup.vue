<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="my-5" align="center">
        <h1>Database maintenance</h1>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="6">
        <!-- Chart --->
        <singlePieChart />
      </v-col>

      <v-col cols="6">
        <h3>Toggle automatic backup</h3>
        <v-switch v-model="switch1" inset :label="`Automatic backup is ${switch1.toString()}`"></v-switch>

        <h3>Backup database manually</h3>
        <v-btn class="my-5" rounded color="primary"><v-icon left dark>mdi-cloud-upload</v-icon> Backup now</v-btn>
        <!-- controls -->
      </v-col>
    </v-row>
      
    
  </v-container>
</template>

<script>
import singlePieChart from "../components/charts/singlePieChart.vue";
export default {
  components:
  {
    singlePieChart,
  },
  
  data() {
    return {
      switch1: false
    }
  },
}
</script>

<style>

</style>