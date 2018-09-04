<script>
    //Importing Line class from the vue-chartjs wrapper
    import {Doughnut} from 'vue-chartjs'
    //Exporting this so it can be used in other components
    export default {

        extends: Doughnut,

        props: ['value'],

        data () {
            return {

                dataCollection: {
                    //Data to be represented on x-axis
                    datasets: [{

                        backgroundColor: [
                            '#E46651',
                            '#e2e2e2'
                        ],
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: '#249EBF',
                        data: [this.value, 100-this.value]
                    }]
                },
                //Chart.js options that controls the appearance of the chart
                options: {
                    // scales: {
                    //     yAxes: [{
                    //         ticks: {
                    //             beginAtZero: true
                    //         }
                    //     }],
                    //     xAxes: [ {
                    //         gridLines: {
                    //             display: false
                    //         }
                    //     }]
                    // },
                    legend: {
                        display: false
                    },
                    // title: {
                    //     display: true,
                    //     text: 'Capture Rate'
                    // },
                    responsive: true,
                    maintainAspectRatio: true
                }
            }
        },

        created() {

            this.addPlugin({

                id: 'data-label',

                beforeDraw(chart) {

                    let width = chart.chart.width,
                        height = chart.chart.height,
                        ctx = chart.chart.ctx;

                    ctx.restore();
                    let fontSize = (height / 114).toFixed(2);
                    ctx.font = fontSize + "em sans-serif";
                    ctx.textBaseline = "middle";

                    let text = chart.data.datasets[0].data[0] + '%',
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height/2;

                    ctx.fillText(text, textX, textY);
                    ctx.save();

                }
            });

        },

        mounted () {
            //renderChart function renders the chart with the datacollection and options object.
            this.renderChart(this.dataCollection, this.options)
        }
    }
</script>