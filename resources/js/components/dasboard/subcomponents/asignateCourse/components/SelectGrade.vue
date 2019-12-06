<template>
    <div>
        <v-container>
            <v-row>
                <v-col md="12">
                    <h2 class="align-center">Grado y Secciones</h2>
                    <v-text-field
                        v-model="dataSection"
                        :rules="sectionRules"
                        label="Selecciona un Grado y Seccion"
                        required
                        disabled
                        :state="getSection"
                    ></v-text-field>
                    <v-chip
                        class="ma-2"
                        color="warning"
                        text-color="white"
                        v-for="(item, index) in sections"
                        :key="index"
                    >
                        <v-avatar left>
                            <v-icon>{{ mdiFormatSection }}</v-icon>
                        </v-avatar>
                        {{ item.category + ", " + item.grade }}
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
                        v-model="sections"
                        :headers="section.headers"
                        :items="section.items"
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
                                color="warning"
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
    mdiFormatSection
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
            mdiFormatSection: mdiFormatSection,
            valid: true,
            sectionRules: [v => !!v || "Debe elegir almenos un Grado y una Seccion"],
            sections: [],
            dataSection: []
        }
    },
    computed: {
         ...mapState('asignateC', ['section']),
        getSection() {
            const data = this.sections.map(item => {
                return item.category + ',' + item.grade;
            });
            this.dataSection = data;
            this.getSelectGrade(this.sections)
        }
    },
    methods:{
        ...mapMutations('asignateC', ['getDataSection','getSelectGrade'])
    },
    created() {
        this.getDataSection()
    },
}
</script>
<style>
</style>
