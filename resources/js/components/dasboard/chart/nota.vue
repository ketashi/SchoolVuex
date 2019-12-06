<template>
  <div class="small">
    <line-chart :chart-data="datacollection" :height="100"></line-chart>
  </div>
</template>

<script>

import LineChart from './notas'

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
        labels: [10,11,12,13,14,15,16,17,18,19,20],
        datasets: [
          {
            label: 'Promedio de Notas',
            backgroundColor: '#f87979',
            data: [20,60,40,30,25,50,60,80,70,50,42]
          },
        ]
      }
    }
  }
}
</script>