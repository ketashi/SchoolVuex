<template>
    <div>
        <admin-asignate-matricula-register v-if="stateRegister"></admin-asignate-matricula-register>
        <admin-asignate-matricula-edit v-else></admin-asignate-matricula-edit>
        <admin-asignate-matricula-table></admin-asignate-matricula-table>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('asignateM', ['stateRegister'])
    },
}
</script>