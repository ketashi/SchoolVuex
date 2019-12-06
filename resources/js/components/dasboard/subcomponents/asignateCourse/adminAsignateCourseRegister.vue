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
                                    color="success"
                                    class="d-flex justify-center align-center white--text sheet-card-offset"
                                >
                                    <v-icon
                                        v-text="mdiFileDocumentBoxPlus"
                                        size="60"
                                        color="white"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col xs="12" sm="6">
                                <v-card-title>
                                    Asignacion de Cursos
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
                                <v-stepper v-model="e1">
                                    <v-stepper-header>
                                        <v-stepper-step
                                            :complete="e1 > 1"
                                            step="1">Seleccionar Estudiantes</v-stepper-step>

                                        <v-divider></v-divider>

                                        <v-stepper-step
                                            :complete="e1 > 2"
                                            step="2"
                                        >Seleccionar Curso</v-stepper-step>
                                        <v-divider></v-divider>

                                        <v-stepper-step 
                                        :complete="e1 > 3"
                                        step="3">Seleccionar Grado y Seccion</v-stepper-step>
                                        <v-divider></v-divider>

                                        <v-stepper-step 
                                        :complete="e1 > 4"
                                        step="4"
                                        >Seleccionar Docente</v-stepper-step>
                                    </v-stepper-header>

                                    <v-stepper-items>
                                        <v-stepper-content step="1">
                                            <v-card>
                                                <get-data-student></get-data-student>
                                                <v-divider></v-divider>
                                                <v-card-actions>
                                                    <v-row>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="success"
                                                                dark
                                                                block
                                                                @click="postCourse()"
                                                                >Continuar</v-btn
                                                            >
                                                        </v-col>
                                                    </v-row>
                                                </v-card-actions>
                                            </v-card>
                                        </v-stepper-content>

                                        <v-stepper-content step="2">
                                            <v-card>
                                                <get-data-course></get-data-course>
                                                <v-divider></v-divider>
                                                <v-card-actions>
                                                    <v-row>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="success"
                                                                dark
                                                                block
                                                                @click="postGrade()"
                                                                >Continuar</v-btn
                                                            >
                                                        </v-col>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="error"
                                                                dark
                                                                @click="e1 = 1"
                                                                block
                                                                >Atras</v-btn
                                                            >
                                                        </v-col>
                                                    </v-row>
                                                </v-card-actions>
                                            </v-card>
                                        </v-stepper-content>

                                        <v-stepper-content step="3">
                                            <v-card>
                                                <get-data-grade></get-data-grade>
                                                <v-divider></v-divider>
                                                <v-card-actions>
                                                    <v-row>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="success"
                                                                dark
                                                                block
                                                                @click="postTeacher()"
                                                                >Continuar</v-btn
                                                            >
                                                        </v-col>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="error"
                                                                dark
                                                                @click="e1 = 2"
                                                                block
                                                                >Atras</v-btn
                                                            >
                                                        </v-col>
                                                    </v-row>
                                                </v-card-actions>
                                            </v-card>
                                        </v-stepper-content>

                                        <v-stepper-content step="4">
                                            <v-card>
                                                <get-data-teacher></get-data-teacher>
                                                <v-divider></v-divider>
                                                <v-card-actions>
                                                    <v-row>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="success"
                                                                dark
                                                                block
                                                                @click="postfinish()"
                                                                >Finalizar</v-btn
                                                            >
                                                        </v-col>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="error"
                                                                dark
                                                                @click="e1 = 3"
                                                                block
                                                                >Atras</v-btn
                                                            >
                                                        </v-col>
                                                    </v-row>
                                                </v-card-actions>
                                            </v-card>
                                        </v-stepper-content>
                                    </v-stepper-items>
                                </v-stepper>
                            </v-card-text>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { mdiFileDocumentBoxPlus } from "@mdi/js";
import { mapMutations, mapState } from "vuex";
export default {
    data() {
        return {
            mdiFileDocumentBoxPlus: mdiFileDocumentBoxPlus,
            valid: true,
            e1: 0
        };
    },
    computed: {

        ...mapState('asignateC', ['dataStudent', 'selectStudent', 'selectGrade', 'selectCourse', 'selectTeacher'])
    },
    methods: {
        postCourse(){
            if(this.selectStudent.length > 0){
                this.e1 = 2
            }else{
                this.$swal(
                    "Campos Incompletos",
                    "Debe Seleccionar almenos un Estudiante",
                    "warning"
                );
            }
        },
        postGrade(){
            if(this.selectCourse.length > 0){
                this.e1 = 3
            }else{
                this.$swal(
                    "Campos Incompletos",
                    "Debe Seleccionar almenos un Curso",
                    "warning"
                );
            }
        },
        postTeacher(){
            if(this.selectGrade.length > 0){
                this.e1 = 4
            }else{
                this.$swal(
                    "Campos Incompletos",
                    "Debe Seleccionar almenos un Grado y Seccion",
                    "warning"
                );
            }
        },
        postfinish(){
            if(this.selectTeacher.length > 0){
                this.$swal(
                    "Nueva Asignacion",
                    "Se registraron los datos Correctamente",
                    "success"
                );
                this.getNew()
                this.e1 = 1
            }else{
                this.$swal(
                    "Campos Incompletos",
                    "Debe Seleccionar almenos un Docente",
                    "warning"
                );
            }
        },
        ...mapMutations("asignateC", ["getNew"])
    }
};
</script>

<style>
.sheet-card-offset {
    top: -40px;
    position: relative;
}
</style>
