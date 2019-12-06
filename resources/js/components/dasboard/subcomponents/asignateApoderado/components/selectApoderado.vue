<template>
    <div>
        <v-container>
            <v-row>
                <v-col md="12">
                    <h2 class="align-center">Apoderado</h2>
                    <v-text-field
                        v-model="dataApoderado"
                        :rules="apoderadoRules"
                        label="Asignar Apoderado"
                        required
                        disabled
                        :state="getApoderado"
                    ></v-text-field>
                    <v-chip
                        class="ma-2"
                        color="indigo"
                        text-color="white"
                        v-for="(item, index) in apoderados"
                        :key="index"
                    >
                        <v-avatar left>
                            <v-icon>{{ mdiAccountChild }}</v-icon>
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
                        v-model="apoderados"
                        :headers="apoderado.headers"
                        :items="apoderado.items"
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
    mdiAccountChild
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
            mdiAccountChild: mdiAccountChild,
            valid: true,
            apoderadoRules: [v => !!v || "Debe elegir almenos un Apoderado"],
            apoderados: [],
            dataApoderado: []
        }
    },
    computed: {
         ...mapState('asignateA', ['apoderado']),
        getApoderado() {
            const data = this.apoderados.map(apoderado => {
                return apoderado.lastName;
            });
            this.dataApoderado = data;
            this.getSelectApoderado(this.apoderados)
            this.getSelectMatriculaApoderado(this.apoderados)
        }
    },
    methods:{
        ...mapMutations('asignateA', ['getDataApoderado','getSelectApoderado']),
        ...mapMutations('asignateM', ['getSelectMatriculaApoderado'])
    },
    created() {
        this.getDataApoderado()
    },
}
</script>
<style>
.chips-container{
    height: 100px;
    overflow-y: auto;
}
</style>
