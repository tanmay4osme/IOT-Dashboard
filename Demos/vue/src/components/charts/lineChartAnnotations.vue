<template>
    <div>
        <apexchart type="line" height="500" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
import fakedata from "./fakedata.js";
    export default 
    {
        data() 
        {
            return {
                series: [{
                    data: fakedata.fakeData_3a
                }],

                chartOptions: 
                {
                    chart: 
                    {
                        type: 'line',
                        id: 'areachart-2'
                    },
                    
                    annotations: 
                    {
                        yaxis: 
                        [{
                            y: fakedata.fakeData_3a[3][1], // Support
                            borderColor: '#00E396',
                            label: 
                            {
                                borderColor: '#00E396',
                                style: 
                                {
                                    color: '#fff',
                                    background: '#00E396',
                                },
                                
                            text: 'Support',
                            }
                        }, 
                        {
                            y: fakedata.fakeData_3a[6][1], // Y-Axis Range + 
                            y2: fakedata.fakeData_3a[5][1], // Y-Axis Range -
                            borderColor: '#000',
                            fillColor: '#FEB019',
                            opacity: 0.2,

                            label: 
                            {
                                borderColor: '#333',
                                style: 
                                {
                                    fontSize: '10px',
                                    color: '#333',
                                    background: '#FEB019',
                                },
                            
                            text: 'Y-axis range',
                            }
                        }],

                        xaxis: [{
                            x: fakedata.fakeData_3a[4][0], // Anno Test
                            strokeDashArray: 0,
                            borderColor: '#775DD0',
                            
                            label: 
                            {
                                borderColor: '#775DD0',
                                style: 
                                {
                                    color: '#fff',
                                    background: '#775DD0',
                                },
                                text: 'Anno Test',
                            }
                        }, 
                        {
                            x: fakedata.fakeData_3a[7][0], // X-Axis Range + 
                            x2: fakedata.fakeData_3a[6][0], // X-Axis Range -
                            fillColor: '#B3F7CA',
                            opacity: 0.4,

                            label: 
                            {
                                borderColor: '#B3F7CA',
                                style: 
                                {
                                    fontSize: '10px',
                                    color: '#fff',
                                    background: '#00E396',
                                },
                                offsetY: -10,
                                text: 'X-axis range',
                            }
                        }],

                        points: 
                        [{
                            // Point Annotation
                            x: fakedata.fakeData_3a[11][0],
                            y: fakedata.fakeData_3a[11][1],

                            marker: 
                            {
                                size: 8,
                                fillColor: '#fff',
                                strokeColor: 'red',
                                radius: 2,
                                cssClass: 'apexcharts-custom-class'
                            },
                            
                            label: 
                            {
                                borderColor: '#FF4560',
                                offsetY: 0,
                                style: 
                                {
                                    color: '#fff',
                                    background: '#FF4560',
                                },
                        
                            text: 'Point Annotation',
                            }
                        }]
                    },
                    dataLabels: 
                    {
                        enabled: true
                    },

                    stroke: 
                    {
                        curve: 'straight'
                    },

                    grid: 
                    {
                        padding: 
                        {
                            right: 30,
                            left: 20
                        }
                    },

                    title: 
                    {
                        text: 'Line with Annotations',
                        align: 'left'
                    },

                    //labels: fakedata.fakeData_timestamps,

                    xaxis: 
                    {
                        type: 'datetime',
                    },
                },
          
            }
        },
    }
</script>

