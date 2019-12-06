<template>
    <div>
        <admin-asignate-apoderado-register v-if="stateRegister"></admin-asignate-apoderado-register>
        <admin-asignate-apoderado-edit v-else></admin-asignate-apoderado-edit>
        <admin-asignate-apoderado-table></admin-asignate-apoderado-table>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('asignateA', ['stateRegister'])
    },
}
</script>