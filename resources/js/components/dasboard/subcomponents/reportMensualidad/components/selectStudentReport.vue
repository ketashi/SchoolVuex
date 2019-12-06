<template>
    <div>
        <v-container>
            <v-row class="justify-center">
                <v-col md="12">
                    <h2 class="align-center">Estudiantes</h2>
                    <v-text-field
                        v-model="dataStudent"
                        :rules="nameRules"
                        label="Asignar un Estudiante"
                        required
                        disabled
                        :state="getStudent"
                    ></v-text-field>
                    <div>
                        <v-chip
                            class="ma-2"
                            color="error"
                            text-color="white"
                            v-for="(item, index) in students"
                            :key="index"
                        >
                            <v-avatar left>
                                <v-icon>{{ mdiAccount }}</v-icon>
                            </v-avatar>
                            {{ item.student }}
                        </v-chip>
                    </div>
                </v-col>
                    <br />
                    <v-divider></v-divider>
                <v-col sm = "12" md="8">
                    <v-text-field
                        v-model="search"
                        :append-icon="mdiTableSearch"
                        label="Buscar"
                        single-line
                        hide-details
                    ></v-text-field>
                    <v-data-table
                        v-model="students"
                        :headers="student.headers"
                        :items="itemsStudent"
                        :search="search"
                        item-key="id"
                        show-select
                        single-select
                        class="elevation-1"
                    >
                        <template
                            v-slot:item.data-table-select="{
                                isSelected,
                                select
                            }"
                        >
                            <v-simple-checkbox
                                color="red"
                                :value="isSelected"
                                @input="select($event)"
                            ></v-simple-checkbox>
                        </template>
                        <v-alert
                            slot="no-results"
                            :value="true"
                            dense
                            outlined
                            type="error"
                            class="mt-4"
                        >
                            No hay Resultados de:
                            <strong>"{{ search }}"</strong>
                        </v-alert>
                        <v-alert
                            slot="no-data"
                            :value="true"
                            dense
                            outlined
                            type="warning"
                            class="mt-4"
                        >
                            No hay Datos que mostrar
                    </v-alert>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import {
    mdiFormatAnnotationPlus,
    mdiTableSearch,
    mdiAlert,
    mdiAccount,
} from "@mdi/js";
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
            isSelected: "",
            search: "",
            mdiFormatAnnotationPlus: mdiFormatAnnotationPlus,
            mdiTableSearch: mdiTableSearch,
            mdiAlert: mdiAlert,
            mdiAccount: mdiAccount,
            valid: true,
            nameRules: [v => !!v || "Debe elegir almenos un Curso"],
            students: [],
            dataStudent: [],
        }
    },
    computed: {
       ...mapState('reportM', ['student', 'itemsStudent']),
        getStudent() {
            const data = this.students.map(student => {
                return student.student;
            });
            this.dataStudent = data;
            this.getSelectStudentReport(this.students)
        },
    },
    methods: {
        ...mapMutations('reportM', ['getDataStudentHeaders','getSelectStudentReport'])
    },
    created() {
        this.getDataStudentHeaders()
    },
}
</script>
<style>
</style>