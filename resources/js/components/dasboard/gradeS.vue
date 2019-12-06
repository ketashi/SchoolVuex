<template>
    <div>
        <admin-grade-register v-if="stateRegister"></admin-grade-register>
        <admin-grade-edit v-else></admin-grade-edit>
        <admin-grade-table></admin-grade-table>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('grade', ['stateRegister'])
    },
}
</script>