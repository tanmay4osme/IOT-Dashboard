<template>
    <div>
        <apexchart width="650" type="area" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
    import fakedata from "./fakedata.js"
    
    export default {
        data() {
            return {
                options : 
                {
                    chart: 
                    {
                        id: 'basic-chart'
                    },

                    title: 
                    {
                        text: 'Verloop Sensor 1',
                        align: 'middle'
                    },

                    xaxis: 
                    {
                        type: 'datetime'
                    },
                    
                    dataLabels: 
                    {
                        enabled: false
                    }
                },
                series: 
                [{
                    name: 'series-1',
                    data: fakedata.data
                }]
            }
        },
    }
</script>

<style scoped>

</style>