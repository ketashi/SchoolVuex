<template>
    <div>
        <admin-register v-if="formRegister" transition="scroll-x-reverse-transition"></admin-register>
        <admin-table :state='stateData' :title="title" :headers='headers' :items='items'></admin-table>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    computed: {
        ...mapState('user',['title','headers','items','formRegister']),
        stateData () {
            this.getData()
        }
    },
    methods:{
        ...mapMutations('user',['getData'])
    },
    created() {
        this.getData()
    },
};
</script>
