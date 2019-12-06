<template>
    <div>
        <v-container class="mt-5">
            <v-row>
                <v-col md="12" class="ma-auto">
                    <h2>Asignar Matricula</h2>
                    <v-form
                        @submit.prevent="submit"
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        :state="stateValid"
                    >
                        <v-row>
                            <v-col sm="12" md="6">
                                <v-menu
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                            v-model="matricula.date"
                                            label="Fecha de Pago"
                                            readonly
                                            v-on="on"
                                            :rules="dateRules"
                                            required
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="matricula.date"
                                        @input="menu = false"
                                        locale="es"
                                        :max="matricula.date"
                                        min="1990-01-01"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col md="6" sm="12">
                                <v-select
                                    v-model="matricula.category"
                                    :items="categories"
                                    :rules="[v => !!v || 'Seleccione el pago']"
                                    label="Cancelacion de Pago"
                                    required
                                ></v-select>
                            </v-col>
                            <v-col sm="12" md="6">
                                <v-text-field
                                    v-model="matricula.dinner"
                                    :rules="dinnerRules"
                                    label="Monto"
                                    required
                                    clearable
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { mdiPencil, mdiCalendarRange } from "@mdi/js";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
    data() {
        return {
            mdiPencil: mdiPencil,
            mdiCalendarRange: mdiCalendarRange,
            valid: true,
            dateRules: [v => !!v || "La fecha es requerida"],
            studentRules: [v => !!v || "El nombre del estudiante es requerido"],
            menu: false,
            categories: ["Pago", "No pago"],
            matricula: {
                date: new Date().toISOString().substr(0, 10),
                category: '',
                dinner: ''
            },
            dinnerRules: [v => !!v || "El monto es requerido"]
        };
    },
    computed: {
        stateValid(){ 
            this.getSelectMatricula(this.matricula)
        }
    },

    methods: {
        ...mapMutations("asignateM", ["getSelectMatricula"])
    }
};
</script>

<style>
.sheet-card-offset {
    top: -40px;
    position: relative;
}
</style>
