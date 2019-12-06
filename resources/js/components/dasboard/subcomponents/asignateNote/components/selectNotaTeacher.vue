<template>
    <div>
        <v-container>
            <v-row>
                <v-col md="12">
                    <h2 class="align-center">Notas</h2>
                    <v-text-field
                        v-model="dataNote"
                        :rules="nameRules"
                        label="Asignar Curso"
                        required
                        disabled
                        :state="getNote"
                    ></v-text-field>
                    <div>
                        <v-chip
                            class="ma-2"
                            color="indigo"
                            text-color="white"
                            v-for="(item, index) in notes"
                            :key="index"
                        >
                            <v-avatar left>
                                <v-icon>{{ mdiQqchat }}</v-icon>
                            </v-avatar>
                            {{ item.calification + ', '+ item.number }}
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
                        v-model="notes"
                        :headers="note.headers"
                        :items="note.items"
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
    mdiQqchat,
    mdiTableSearch,
    mdiAlert,
    mdiAccount
} from "@mdi/js";
import { mapState, mapMutations } from 'vuex';
export default {
    data() {
        return {
            isSelected: "",
            search: "",
            mdiQqchat: mdiQqchat,
            mdiTableSearch: mdiTableSearch,
            mdiAlert: mdiAlert,
            mdiAccount: mdiAccount,
            valid: true,
            nameRules: [v => !!v || "Debe elegir almenos un Nota"],
            notes: [],
            dataNote: [],
        }
    },
    computed: {
       ...mapState('asignateN', ['note']),
        getNote() {
            const data = this.notes.map(note => {
                return note.calification +', '+ note.number;
            });
            this.dataNote = data;
            this.getselectNoteTeacher(this.notes)
        },
    },
    methods: {
        ...mapMutations('asignateN', ['getDataNoteTeacher','getselectNoteTeacher'])
    },
    created() {
        this.getDataNoteTeacher()
    },
}
</script>
<style>
</style>