<template>
    <div>
        <admin-asignate-note-register v-if="stateRegister"></admin-asignate-note-register>
        <admin-asignate-note-edit v-else></admin-asignate-note-edit>
        <admin-asignate-note-table></admin-asignate-note-table>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('asignateN',['stateRegister'])
    },
}
</script>