<template>
    <div>
        <v-container>
            <v-card>
                <v-card-title>
                    Lista de Curso
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
        
    ...mapMutations('course',['getData', 'getEdit'])
    },
    computed: {
        ...mapState('course', ['headers', 'items']),
        
    },
    created() {
        this.getData()
    },
};
</script>
