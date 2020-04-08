<template>
    <div id="chart">
        <apexchart type="radialBar" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    export default 
    {
        data()
        {
            return {
                series: [(80/100)*100],

                chartOptions: 
                {
                    chart: 
                    {
                        type: 'donut',
                    },
                    
                    responsive: 
                    [{
                        breakpoint: 480,
                    }],

                    labels: ['DB Storage Usage'],
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>