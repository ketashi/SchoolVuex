<template>
    <div>
        <admin-course-register v-if="active"></admin-course-register>
        <admin-course-edit v-else></admin-course-edit>
        <admin-course-table></admin-course-table>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('course', ['active'])
    },
}
</script>