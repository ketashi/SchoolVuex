<template>
    <div>
        <v-container>
            <v-row class="justify-center">
                <v-col sm="12">
                    <h2 class="align-center">Docentes</h2>
                    <v-text-field
                        v-model="dataTeacher"
                        :rules="nameRules"
                        label="Asignar Apoderado"
                        required
                        disabled
                        :state="getTeacher"
                    ></v-text-field>
                    <div>
                        <v-chip
                            class="ma-2"
                            color="error"
                            text-color="white"
                            v-for="(item, index) in teachers"
                            :key="index"
                        >
                            <v-avatar left>
                                <v-icon>{{ mdiAccountTie }}</v-icon>
                            </v-avatar>
                            {{ item.teacher }}
                        </v-chip>
                    </div>
                </v-col>
                    <br />
                    <v-divider></v-divider>
                <v-col sm="12" md="8">
                    <v-text-field
                        v-model="search"
                        :append-icon="mdiTableSearch"
                        label="Buscar"
                        single-line
                        hide-details
                    ></v-text-field>
                    <v-data-table
                        v-model="teachers"
                        :headers="teacher.headers"
                        :items="itemsTeacher"
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
    mdiAccountTie
} from "@mdi/js";
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            isSelected: "",
            search: "",
            mdiFormatAnnotationPlus: mdiFormatAnnotationPlus,
            mdiTableSearch: mdiTableSearch,
            mdiAlert: mdiAlert,
            mdiAccount: mdiAccount,
            mdiAccountTie: mdiAccountTie,
            valid: true,
            nameRules: [v => !!v || "Debe elegir almenos un Curso"],
            teachers: [],
            dataTeacher: [],
        }
    },
    computed: {
       ...mapState('reportN', ['teacher','itemsTeacher']),
        getTeacher() {
            const data = this.teachers.map(teacher => {
                return teacher.teacher;
            });
            this.dataTeacher = data;
            this.getSelectReportTeacher(this.teachers)
        },
    },
    methods: {
        ...mapMutations('reportN', ['getSelectReportTeacher', 'getDataTeacher'])
    },
    created() {
        this.getDataTeacher()
    },
}
</script>
<style>
</style>