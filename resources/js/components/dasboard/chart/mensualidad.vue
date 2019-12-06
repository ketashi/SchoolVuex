<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :height="100"></line-chart>
  </div>
</template>

<script>

import LineChart from './mensualidades'

export default {
  components: {
    LineChart
  },
  data(){
    return {
      datacollection: null
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {

    fillData ()
    {
      this.datacollection = {
        labels: ['Enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Promedio de pagos',
            backgroundColor: '#1c5d99',
            data: [4500,4700,3800,4785,4526,3985,4956,4785,4215,4562,4526,4752]
          },
        ]
      }
    }
  }
}
</script>