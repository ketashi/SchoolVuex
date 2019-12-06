<template>
    <div>
        <v-container class="mt-5">
            <v-row>
                <v-col md="8" class="ma-auto">
                    <v-card>
                        <v-row class="d-flex ma-auto">
                            <v-col xs="12" sm="6">
                                <v-sheet
                                    width="100"
                                    height="100"
                                    elevation="6"
                                    color="success"
                                    class="d-flex justify-center align-center white--text sheet-card-offset"
                                >
                                    <v-icon
                                        v-text="mdiFormatAnnotationPlus"
                                        size="60"
                                        color="white"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col xs="12" sm="6">
                                <v-card-title>
                                    Registro de Calificación
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
                                    <v-col sm="12" md="12">
                                        <v-select
                                            v-model="data.calification"
                                            :items="califications"
                                            :rules="[
                                                v =>
                                                    !!v ||
                                                    'Seleccione una calificacion'
                                            ]"
                                            label="Calificacion"
                                            required
                                            :placeholder="data.calification"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                                <br>
                                <v-row>
                                    <v-col sm="12" md="12">
                                        <v-range-slider
                                            v-model="numbers"
                                            thumb-label="always"
                                            :min="min"
                                            :max="max"
                                            :rules="[
                                                v =>
                                                    !!v ||
                                                    'Debe selecionar un rango'
                                            ]"
                                        ></v-range-slider>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-row>
                                    <v-col sm="12" md="6">
                                        <v-btn
                                            color="success"
                                            dark
                                            type="submit"
                                            block
                                            >Agregar</v-btn
                                        >
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-btn
                                            color="error"
                                            dark
                                            @click="clear()"
                                            block
                                            >Limpiar</v-btn
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
import { mdiFormatAnnotationPlus } from "@mdi/js";
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            mdiFormatAnnotationPlus: mdiFormatAnnotationPlus,
            valid: true,
            numbers: [0,20],
            min:0,
            max:20
        };
    },
    computed: {
        ...mapState("calification", ["data", "califications"])
    },

    methods: {
        submit() {
            const newCourse = {
                calification: this.data.calification,
                numbers: this.numbers
            };
            if (this.$refs.form.validate()) {
                this.$swal(
                    "Nuevo Curso",
                    "Se registro un nuevo curso",
                    "success"
                );
                this.getNew(newCourse);
                this.$refs.form.reset();
                this.$refs.form.resetValidation();
                this.refreshNumbers()
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
                title: "Quieres limpiar los campos",
                icon: this.mdiDeleteForever,
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, limpiar campos...!"
            }).then(result => {
                if (result.value) {
                    this.$swal(
                        "Limpiando!",
                        "Se limpiaron lo campos.",
                        "success"
                    );
                    this.$refs.form.reset();
                    this.$refs.form.resetValidation();
                    this.refreshNumbers()
                }
            });
        },
        refreshNumbers(){
            this.numbers= [0,20]
        },
        ...mapMutations("calification", ["getNew", "getData"])
    },
    created() {
        this.getData();
    }
};
</script>

<style>
.sheet-card-offset {
    top: -40px;
    position: relative;
}
</style>
