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
                                    Reporte de Mensualidad
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
                                            step="1">Seleccionar Apoderado</v-stepper-step>

                                        <v-divider></v-divider>

                                        <v-stepper-step
                                            :complete="e1 > 2"
                                            step="2"
                                        >Seleccionar Estudiante</v-stepper-step>

                                        <v-divider></v-divider>

                                        <v-stepper-step
                                            :complete="e1 > 3"
                                            step="3"
                                        >Reporte de Mensualidad</v-stepper-step>
                                    </v-stepper-header>

                                    <v-stepper-items>
                                        <v-stepper-content step="1">
                                            <v-card>
                                                <get-data-report-apoderado></get-data-report-apoderado>
                                                <v-divider></v-divider>
                                                <v-card-actions>
                                                    <v-row>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="success"
                                                                dark
                                                                block
                                                                @click="postStudent()"
                                                                >Continuar</v-btn
                                                            >
                                                        </v-col>
                                                    </v-row>
                                                </v-card-actions>
                                            </v-card>
                                        </v-stepper-content>

                                        <v-stepper-content step="2">
                                            <v-card>
                                                <get-data-report-student></get-data-report-student>
                                                <v-divider></v-divider>
                                                <v-card-actions>
                                                    <v-row>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="success"
                                                                dark
                                                                block
                                                                @click="postMensualidad()"
                                                                >Continuar</v-btn
                                                            >
                                                        </v-col>
                                                        <v-col sm="12" md="6">
                                                            <v-btn
                                                                color="error"
                                                                dark
                                                                @click="preApoderado()"
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
                                                <get-data-mensualidad-table></get-data-mensualidad-table>
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
        ...mapState('reportM', ['selectApoderado','selectStudent']),

    },
    methods: {
        postStudent(){
            if(this.selectApoderado.length > 0){
                this.e1 = 2
                this.getDataStudent()
            }else{
                this.$swal(
                    "Campos Incompletos",
                    "Debe Seleccionar almenos un Apoderado",
                    "warning"
                );
            }
        },
        preApoderado(){
            this.e1 = 1
            this.cleanStudent()
        },
        postMensualidad(){
            if(this.selectStudent.length > 0){
                this.getDataMensualidad()
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
            this.cleanMensualidad()
        },
        ...mapMutations("reportM", ["getDataStudent","getDataMensualidad","cleanStudent", "cleanMensualidad"])
    }
};
</script>

<style>
.sheet-card-offset {
    top: -40px;
    position: relative;
}
</style>
