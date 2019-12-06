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
                                    Editar Asignacion de Curso
                                </v-card-title>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-form @submit.prevent="submit"
                        ref="form"
                        v-model="valid"
                        lazy-validation>
                            <v-card-text>
                                <v-row>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="item.teacher"
                                            :rules="teacherRules"
                                            label="Nombre del Docente"
                                            required
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="item.name"
                                            :rules="studentRules"
                                            label="Nombre del Alumno"
                                            required
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="item.course"
                                            :rules="courseRules"
                                            label="Nombre del Curso"
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
                                                    'Seleccione una categoria'
                                            ]"
                                            label="Categoria"
                                            required
                                            :placeholder="item.category"
                                        ></v-select> 
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="item.grade"
                                            :rules="gradeRules"
                                            label="Grados"
                                            required
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-select
                                            v-model="item.section"
                                            :items="sections"
                                            :rules="[
                                                v =>
                                                    !!v ||
                                                    'Seleccione una Seccion'
                                            ]"
                                            label="Seccion"
                                            required
                                            :placeholder="item.section"
                                        ></v-select> 
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-select
                                            v-model="item.turno"
                                            :items="turnos"
                                            :rules="[
                                                v =>
                                                    !!v ||
                                                    'Seleccione una turno'
                                            ]"
                                            label="Turno"
                                            required
                                            :placeholder="item.turno"
                                        ></v-select> 
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="item.credit"
                                            :rules="creditRules"
                                            label="Creditaje"
                                            required
                                            clearable
                                        ></v-text-field>
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
            teacherRules: [
                v => !!v || 'El nombre del Profesor es requerido'
            ],
            studentRules: [
                v=> !!v|| 'El nombre del estudiante es requerido'
            ],
            creditRules: [
                v => !!v || 'El creditaje es requerido'
            ],
            courseRules: [
                v => !!v || 'El nombre del curso es requerido'
            ],
            gradeRules: [
                v => !!v || 'El nombre del Grado es requerido'
            ],
            categories: ['Inicial','Primaria', 'Secundaria'],
            sections: ['A','B','C','D','E','F','G','H','I'],
            turnos: ['Mañana', 'Tarde']
        };
    },
    computed: {
         ...mapState('asignateC', ['item'])
    },

    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$swal(
                    "Curso Actualizado",
                    "Se modificaron los datos del curso",
                    "success"
                );
                this.getUpdate(this.item)
                this.$refs.form.reset()
                this.$refs.form.resetValidation()
                this.closeEdit()
            }else{
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
                    this.closeEdit()
                    this.$refs.form.reset()
                    this.$refs.form.resetValidation()
                }
            });
        },
        ...mapMutations('asignateC', ['closeEdit', 'getUpdate'])
    },
};
</script>

<style>
.sheet-card-offset {
    top: -40px;
    position: relative;
}
</style>
