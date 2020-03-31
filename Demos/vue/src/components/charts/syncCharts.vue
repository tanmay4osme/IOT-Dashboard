<template>
    <v-col cols="12" class=" my-5" > 
        <v-row>
            <v-col cols="3">
                <v-card id="chart-line" class="pa-2">   
                    <apexchart type="line" height="250" :options="chartOptions" :series="series"></apexchart>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card id="chart-line" class="pa-2">   
                    <apexchart type="line" height="250" :options="chartOptions2" :series="series"></apexchart>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card id="chart-line" class="pa-2">   
                    <apexchart type="line" height="250" :options="chartOptionsLine2" :series="series"></apexchart>
                </v-card>
            </v-col>


            <v-col cols="3">
                <v-card id="chart-line" class="pa-2">   
                    <apexchart type="line" height="250" :options="chartOptionsArea" :series="series"></apexchart>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>


<script>
import fakedata from "./fakedata.js"

export default 
{
    data()
    {
        return {
            chartOptions: 
            {
                chart:
                {
                    toolbar: 
                    {
                        show: false
                    },
                    
                    id: 'fb',
                    group: 'social'
                },
                
                colors: ['#008FFB'],
                stroke: 
                {
                    width: 7,
                    curve: 'smooth'
                },
                yaxis: 
                {
                    labels: 
                    {
                        show: false
                    },

                    floating: true,

                    axisTicks: 
                    {
                        show: false
                    },

                    axisBorder: 
                    {
                        show: false
                    },
                },

                xaxis: 
                {
                    type: 'datetime',

                    labels: 
                    {
                        show: false
                    },

                    floating: true,

                    axisTicks: 
                    {
                        show: false
                    },

                    axisBorder: 
                    {
                        show: false
                    },
                },
                
                grid: 
                {
                    show: false
                }
            },

            chartOptions2: 
            {
                chart:
                {
                    toolbar: 
                    {
                        show: false
                    },
                    
                    id: 'fb2',
                    group: 'social'
                },
                
                colors: ['#FF0000'],
                stroke: 
                {
                    width: 7,
                    curve: 'smooth'
                },
                yaxis: 
                {
                    labels: 
                    {
                        show: false
                    },

                    floating: true,

                    axisTicks: 
                    {
                        show: false
                    },

                    axisBorder: 
                    {
                        show: false
                    },
                },

                xaxis: 
                {
                    type: 'datetime',

                    labels: 
                    {
                        show: false
                    },

                    floating: true,

                    axisTicks: 
                    {
                        show: false
                    },

                    axisBorder: 
                    {
                        show: false
                    },
                    
                },
                
                grid: 
                {
                    show: false
                }
            },



            chartOptionsLine2: 
            {
                chart: 
                {
                    id: 'tw',
                    group: 'social',
                },

                colors: ['#546E7A'],

                stroke: 
                {
                    width: 7,
                    curve: 'smooth'
                },
                yaxis: 
                {
                    labels: 
                    {
                        show: false
                    },

                    floating: true,

                    axisTicks: 
                    {
                        show: false
                    },

                    axisBorder: 
                    {
                        show: false
                    },
                },
                
                xaxis: 
                {
                    type: 'datetime',
                    labels: 
                    {
                        show: false
                    },

                    floating: true,

                    axisTicks: 
                    {
                        show: false
                    },

                    axisBorder: 
                    {
                        show: false
                    },
                },

                grid: 
                {
                    show: false
                }
            },

            chartOptionsArea: 
            {
                chart: 
                {    
                    id: 'yt',
                    group: 'social',
                },

                colors: ['#00E396'],

                stroke: 
                {
                    width: 7,
                    curve: 'smooth'
                },

                yaxis: 
                {
                    labels: 
                    {
                        show: false
                    },

                    floating: true,

                    axisTicks: 
                    {
                        show: false
                    },

                    axisBorder: 
                    {
                        show: false
                    },
                },
                xaxis: 
                {
                    type: 'datetime',
                    labels: 
                    {
                        show: false
                    },
                    
                    floating: true,
                    axisTicks: 
                    {
                        show: false
                    },
                    axisBorder: 
                    {
                        show: false
                    },
                },

                grid: 
                {
                    show: false
                }
            },

            series: 
            [{
                data: fakedata.fakeData_3a
            }],

            seriesLine2: 
            [{
                data: fakedata.fakeData_3b
            }],

            seriesArea: 
            [{
                data: fakedata.fakeData_3c
            }],
        }
    },
}

</script>
