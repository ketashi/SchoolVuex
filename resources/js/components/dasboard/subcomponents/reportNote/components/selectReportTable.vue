<template>
    <div>
        <v-container>
            <v-card>
                <v-card-title>
                    Lista de Reporte de Notas
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        :append-icon="mdiTableSearch"
                        label="Buscar"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :search="search"
                >
                    <template v-slot:item.btnAction="{ item }">
                        <v-icon small class="mr-2" @click="getEdit(item)">
                            {{mdiPlaylistEdit}}
                        </v-icon>
                        <v-icon small @click="deleteItem(item)">
                            {{mdiDeleteForever}}
                        </v-icon>
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
            </v-card>
        </v-container>
    </div>
</template>
<script>
import { 
    mdiTableSearch,
    mdiPlaylistEdit,
    mdiDeleteForever
} from "@mdi/js";
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            search: "",
            mdiTableSearch: mdiTableSearch,
            mdiPlaylistEdit:mdiPlaylistEdit,
            mdiDeleteForever:mdiDeleteForever,
        };
    },
    methods:{
        deleteItem(item){
            const index = this.items.indexOf(item)
            this.$swal({
                title: "Desea eliminar este Registro",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, los datos se perderan permanentemente!"
            }).then(result => {
                if (result.value) {
                    this.$swal(
                        "OK!",
                        "Los datos fueron eliminados correctamente...",
                        "success"
                    );
                    this.items.splice(index, 1)
                }
            });
        },
        
    ...mapMutations('reportN',['getDataReportNote'])
    },
    computed: {
        ...mapState('reportN', ['headers', 'items'])
        
    },
    created() {
        this.getDataReportNote()
    },
};
</script>
