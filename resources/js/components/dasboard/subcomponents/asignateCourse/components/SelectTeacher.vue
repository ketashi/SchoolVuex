<template>
    <div>
        <v-container>
            <v-row>
                <v-col md="12">
                    <h2 class="align-center">Docentes</h2>
                    <v-text-field
                        v-model="dataTeacher"
                        :rules="teacherRules"
                        label="Asignar Docente"
                        required
                        disabled
                        :state="getTeacher"
                    ></v-text-field>
                    <v-chip
                        class="ma-2"
                        color="indigo"
                        text-color="white"
                        v-for="(item, index) in teachers"
                        :key="index"
                    >
                        <v-avatar left>
                            <v-icon>{{ mdiAccountTie }}</v-icon>
                        </v-avatar>
                        {{ item.lastName + ", " + item.name }}
                    </v-chip>
                    <br />
                    <v-divider></v-divider>
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
                        :items="teacher.items"
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
                                color="indigo"
                                :value="isSelected"
                                @input="select($event)"
                                nultiple
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
            mdiAccountTie: mdiAccountTie,
            valid: true,
            teacherRules: [v => !!v || "Debe elegir almenos un Profesor"],
            teachers: [],
            dataTeacher: []
        }
    },
    computed: {
         ...mapState('asignateC', ['teacher']),
        getTeacher() {
            const data = this.teachers.map(teacher => {
                return teacher.lastName;
            });
            this.dataTeacher = data;
            this.getSelectTeacher(this.teachers)
            this.getSelectTeacherNote(this.teachers)
        }
    },
    methods:{
        ...mapMutations('asignateC', ['getDataTeacher','getSelectTeacher']),
        ...mapMutations('asignateN', ['getSelectTeacherNote'])
    },
    created() {
        this.getDataTeacher()
    },
}
</script>
<style>
.chips-container{
    height: 100px;
    overflow-y: auto;
}
</style>
