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
                                        v-text="mdiFileChartOutline"
                                        size="60"
                                        color="white"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col xs="12" sm="6">
                                <v-card-title>
                                    Reporte de Notas
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
                                            step="1">Seleccionar Docente</v-stepper-step>

                                        <v-divider></v-divider>

                                        <v-stepper-step
                                            :complete="e1 > 2"
                                            step="2"
                                        >Seleccionar Curso</v-stepper-step>

                                        <v-divider></v-divider>

                                        <v-stepper-step
                                            :complete="e1 > 3"
                                            step="3"
                                        >Reporte de Notas</v-stepper-step>
                                    </v-stepper-header>

                                    <v-stepper-items>
                                        <v-stepper-content step="1">
                                            <v-card>
                                                <get-data-report-teacher></get-data-report-teacher>
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
                                                <get-data-report-course></get-data-report-course>
                                                <v-divider></v-divider>
                                                <v-card-actions>
                                                    <v-row>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="success"
                                                                dark
                                                                block
                                                                @click="postNotas()"
                                                                >Continuar</v-btn
                                                            >
                                                        </v-col>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="error"
                                                                dark
                                                                @click="preTeacher()"
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
                                                <get-data-report-table></get-data-report-table>
                                                <v-divider></v-divider>
                                                <v-card-actions>
                                                    <v-row>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="error"
                                                                dark
                                                                @click="preCourse()"
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
import { mdiFileChartOutline } from "@mdi/js";
import { mapMutations, mapState } from "vuex";
export default {
    data() {
        return {
            mdiFileChartOutline: mdiFileChartOutline,
            valid: true,
            e1: 0
        };
    },
    computed: {
        ...mapState('reportN', ['selectTeacher','selectCourse']),

    },
    methods: {
        postCourse(){
            if(this.selectTeacher.length > 0){
                this.e1 = 2
                this.getDataCourse()
            }else{
                this.$swal(
                    "Campos Incompletos",
                    "Debe Seleccionar almenos un Docente",
                    "warning"
                );
            }
        },
        preTeacher(){
            this.e1 = 1
            this.cleanCourse()
        },
        postNotas(){
            if(this.selectCourse.length > 0){
                this.getDataNotes()
                this.e1 = 3
            }else{
                this.$swal(
                    "Campos Incompletos",
                    "Todos los Datos son Requeridos",
                    "warning"
                );
            }
        },
        preCourse(){
            this.e1 = 2
            this.cleanNota()
        },
        ...mapMutations("reportN", ["getNew", "getDataCourse","getDataNotes","cleanCourse", "cleanNota"])
    }
};
</script>

<style>
.sheet-card-offset {
    top: -40px;
    position: relative;
}
</style>
