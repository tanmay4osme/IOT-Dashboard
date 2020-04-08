<template>
  <div>
    <v-tabs v-model="tab" fixed-tabs background-color="#0071D9"  dark >
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="transparent">
      <v-tab-item>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card class="pa-2">                  
                <negativeValueChart />
              </v-card> 
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-container>
          <v-row>
            <v-col cols="12">
              <h1>tab2</h1>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item>
        <v-container>
          <v-row>
            <v-col cols="12">
              <h1>tab3</h1>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      
    </v-tabs-items>
    </div>
</template>

<script>
import negativeValueChart from "../components/charts/negativeValueChart.vue";
  export default {
    components: {
      negativeValueChart,
    },

    data() {
      return {
        tab: null,
        items: [
          { tab: 'One'},
          { tab: 'Two' },
          { tab: 'Three'},
        ],
      }
    },
  }
</script>

  <!-- <v-tabs fixed-tabs background-color="#0071D9" dark app>
