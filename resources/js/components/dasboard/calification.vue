<template>
    <div>
        <admin-calification-register v-if="stateRegister"></admin-calification-register>
        <admin-calification-edit v-else></admin-calification-edit>
        <admin-calification-table></admin-calification-table>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('calification', ['stateRegister'])
    },
}
</script>