<template>
    <div>
        <v-container>
            <v-row>
                <v-col md="12">
                    <h2 class="align-center">Alumnos</h2>
                    <v-text-field
                        v-model="dataStudent"
                        :rules="nameRules"
                        label="Asignar Alumnos"
                        required
                        disabled
                        :state="getStudent"
                    ></v-text-field>
                    <div class="chips-container">
                        <v-chip
                            class="ma-2"
                            color="success"
                            text-color="white"
                            v-for="(item, index) in students"
                            :key="index"
                        >
                            <v-avatar left>
                                <v-icon>{{ mdiAccount }}</v-icon>
                            </v-avatar>
                            {{ item.lastName + ", " + item.name }}
                        </v-chip>
                    </div>

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
                        v-model="students"
                        :headers="student.headers"
                        :items="student.items"
                        :search="search"
                        item-key="id"
                        show-select
                        class="elevation-1"
                    >
                        <template
                            v-slot:item.data-table-select="{
                                isSelected,
                                select
                            }"
                        >
                            <v-simple-checkbox
                                color="green"
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
            nameRules: [v => !!v || "Debe elegir almenos un Estudiante"],
            students: [],
            dataStudent: []
        }
    },
    computed: {
       ...mapState('asignateM', ['student']),
        getStudent() {
            const data = this.students.map(student => {
                return student.lastName
            });
            this.dataStudent = data;
            this.getSelectMatriculaStudent(this.students)
        },
    },
    methods: {
        ...mapMutations('asignateM', ['getDataMatriculaStudent','getSelectMatriculaStudent'])
    },
    created() {
        this.getDataMatriculaStudent()
    },
}
</script>
<style>
.chips-container{
    height: 100px;
    overflow-y: auto;
}
</style>