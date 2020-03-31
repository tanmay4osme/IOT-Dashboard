<template>
    <div>
        <apexchart type="radialBar" height="418" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
    import fakedata from "./fakedata.js";

    export default {
        data() {
            return {
                options : 
                {
                    chart: 
                    {
                        type: 'radialBar',
                    },

                    plotOptions: 
                    {
                        radialBar: 
                        {
                            dataLabels: 
                            {
                                name: 
                                {
                                    fontSize: '22px',
                                },
                                value: 
                                {
                                    fontSize: '16px',
                                },
                                total: 
                                {
                                    show: true,
                                    label: 'Average',
                                    formatter: function (w) 
                                    {
                                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                        return (fakedata.fakeData_2[0]+fakedata.fakeData_2[1]+fakedata.fakeData_2[2]+fakedata.fakeData_2[3])/4+"%";
                                    }
                                }
                            }
                        }
                    },
                    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],

                    title: 
                    {
                        text: 'Verloop Sensor Percentage',
                        align: 'middle'
                    }
                },
                series: fakedata.fakeData_2,
            }
        },
    }
</script>

<style scoped>

</style>