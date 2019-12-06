<template>
    <div>
        <v-container class="mt-5">
            <v-row>
                <v-col md="12" class="ma-auto">
                    <v-card>
                        <v-row class="d-flex ma-auto">
                            <v-col xs="12" sm="6">
                                <v-sheet
                                    width="100"
                                    height="100"
                                    elevation="6"
                                    color="warning"
                                    class="d-flex justify-center align-center white--text sheet-card-offset"
                                >
                                    <v-icon
                                        v-text="mdiPencil"
                                        size="60"
                                        color="white"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col xs="12" sm="6">
                                <v-card-title>
                                    Editar Asignacion de Matricula
                                </v-card-title>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-form
                            @submit.prevent="submit"
                            ref="form"
                            v-model="valid"
                            lazy-validation
                        >
                            <v-card-text>
                                <v-row>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="item.apoderado"
                                            :rules="apoderadoRules"
                                            label="Nombre del Apoderado"
                                            required
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="item.student"
                                            :rules="studentRules"
                                            label="Nombre del Estudiante"
                                            required
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="item.dinner"
                                            :rules="dinnerRules"
                                            label="Monto"
                                            required
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-select
                                            v-model="item.category"
                                            :items="categories"
                                            :rules="[
                                                v =>
                                                    !!v ||
                                                    'Seleccione un Pago'
                                            ]"
                                            label="Cancelacion de Pago"
                                            required
                                            :placeholder="item.category"
                                        ></v-select>
                                    </v-col>
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
                                                    v-model="item.date"
                                                    label="Fecha de Pago"
                                                    readonly
                                                    v-on="on"
                                                    :rules="dateRules"
                                                    required
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="item.date"
                                                @input="menu = false"
                                                locale="es"
                                                :max="date"
                                                min="1990-01-01"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-row>
                                    <v-col sm="12" md="6">
                                        <v-btn
                                            color="warning"
                                            dark
                                            type="submit"
                                            block
                                            >Guardar</v-btn
                                        >
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-btn
                                            color="error"
                                            dark
                                            @click="clear()"
                                            block
                                            >Cancelar</v-btn
                                        >
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { mdiPencil } from "@mdi/js";
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            mdiPencil: mdiPencil,
            valid: true,
            apoderadoRules: [v => !!v || "El nombre del Apoderado es requerido"],
            studentRules: [v => !!v || "El nombre del estudiante es requerido"],
            dinnerRules: [v => !!v || "El monto es requerido"],
            categories: ["Pago", "No Pago"],
            dateRules:[
                v => !!v || 'La fecha es requerida'
            ],
            date: new Date().toISOString().substr(0, 10),
            menu: false,
        };
    },
    computed: {
        ...mapState("asignateM", ["item"])
    },

    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$swal(
                    "Curso Actualizado",
                    "Se modificaron los datos del curso",
                    "success"
                );
                this.getUpdate(this.item);
                this.$refs.form.reset();
                this.$refs.form.resetValidation();
                this.closeEdit();
            } else {
                this.$swal(
                    "Campos Incompletos",
                    "Todos los campos son obligatorios",
                    "warning"
                );
            }
        },
        clear() {
            this.$swal({
                title: "Quieres salir de la zona de editar",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, los datos se mantendran sin cambios!"
            }).then(result => {
                if (result.value) {
                    this.$swal(
                        "OK!",
                        "Los datos no se modificaron...",
                        "success"
                    );
                    this.closeEdit();
                    this.$refs.form.reset();
                    this.$refs.form.resetValidation();
                }
            });
        },
        ...mapMutations("asignateM", ["closeEdit", "getUpdate"])
    }
};
</script>

<style>
.sheet-card-offset {
    top: -40px;
    position: relative;
}
</style>
