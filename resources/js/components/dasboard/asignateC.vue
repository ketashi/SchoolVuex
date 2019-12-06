<template>
    <div>
        <admin-asignate-course-register v-if="stateRegister"></admin-asignate-course-register>
        <admin-asignate-course-edit v-else></admin-asignate-course-edit>
        <admin-asignate-course-table></admin-asignate-course-table>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('asignateC', ['stateRegister'])
    },    
}
</script>
