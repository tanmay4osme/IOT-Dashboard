<template>
  <v-container>
    <v-btn @click="allow = ! allow"> enable requests</v-btn>
    <v-row justify="center">
      <v-col cols="10">
        <canvas id="lineChart" height="300" width="0"></canvas>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
var Chart = require('chart.js');

export default {
  data() {
    return {
      allow: false,
      chart: null,
      light: [],
    };
  },

  mounted() {
    window.setInterval(async () => {
      if (this.allow) {
        await this.getData();
      }
    }, 1000);

    var ctx = document.getElementById('lineChart');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Light"],
        datasets: [
        {
          label: "Light intensity (H)",
          backgroundColor: ["#3e95cd"],
          data: this.light
        }
      ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Grafiek van sensor data over een periode van 3 weken',
        },
        tooltips: {
          mode: 'nearest',
          intersect: true,
        },
        legend: {
          position: 'top',
        },
        scales: {
          yAxes: [
            {
              type: 'linear',
              position: 'left',
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },

  methods: {
    addData(chart, label, data) {
      chart.data.labels.push(label);
      chart.data.datasets.forEach((dataset) => {
          dataset.data.push(data);
      });
      chart.update();
    },

     removeData(chart) {
          chart.data.splice(-1,10)
          chart.update();
      },
    async getData() {
      const response = await axios.get('http://intelliflow.pxl-ea-ict.be:24074/api/v1/light');
      //this.light.push(response.data[response.data.length - 1].light);
      this.addData(this.chart, response.data[response.data.length - 1].time, response.data[response.data.length - 1].light);
    },
  },
};
</script>
