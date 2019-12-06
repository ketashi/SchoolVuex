<template>
    <div>
        <v-container>
            <v-row>
                <v-col sm="12">
                    <v-card class="justify-center text-center">
                        <v-sheet
                            class="v-sheet--offset ma-auto"
                            elevation="12"
                            max-width="90%"
                        >
                            <v-card-subtitle>
                                Reporte de Notas
                            </v-card-subtitle>
                            <nota-chart></nota-chart>
                        </v-sheet>
                        <v-divider></v-divider>
                        <v-card-text class="d-flex justify-center">
                            <v-list>
                                <v-list-item-group>
                                    <v-list-item
                                        v-for="(item, index) in notaChart"
                                        :key="index"
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                <v-chip
                                                    class="ma-auto"
                                                    color="pink"
                                                    label
                                                    text-color="white"
                                                >
                                                    <v-icon class="mr-2">{{
                                                        item.icon
                                                    }}</v-icon>
                                                    {{ item.title }}:
                                                    <v-card-title>
                                                        {{ item.quantity }}
                                                    </v-card-title>
                                                </v-chip>
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-col>
            
                <v-col sm="12">
                    <v-col sm="12">
                        <v-card class="justify-center mt-5 text-center">
                            <v-sheet
                                class="v-sheet--offset ma-auto"
                                elevation="12"
                                max-width="90%"
                            >
                                <v-card-subtitle>
                                    Reporte de Mensualidad
                                </v-card-subtitle>
                                <mensualidad-chart></mensualidad-chart>
                            </v-sheet>
                            <v-divider></v-divider>
                            <v-card-text class="d-flex justify-center">
                                <v-list>
                                    <v-list-item-group>
                                        <v-list-item
                                            v-for="(item, index) in mensualidadChart"
                                            :key="index"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    <v-chip
                                                        class="ma-auto"
                                                        color="pink"
                                                        label
                                                        text-color="white"
                                                    >
                                                        <v-icon class="mr-2">{{
                                                            item.icon
                                                        }}</v-icon>
                                                        {{ item.title }}:
                                                        <v-card-title>
                                                            {{ item.quantity }}
                                                        </v-card-title>
                                                    </v-chip>
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mdiChartAreasplineVariant, mdiAccount } from "@mdi/js";
export default {
    data() {
        return {
            notaChart: [
                {
                    title: "Reporte de Notas Promedio",
                    icon: mdiChartAreasplineVariant,
                    quantity: 15
                },
                {
                    title: "Cantidad total de Alumnos",
                    icon: mdiAccount,
                    quantity: 450
                }
            ],
            mensualidadChart:[
                {
                    title:'Total de Ingresos',
                    icon: mdiChartAreasplineVariant,
                    quantity: 150000
                },
                {
                    title: "Cantidad total de Alumnos",
                    icon: mdiAccount,
                    quantity: 450
                }
            ]
        };
    }
};
</script>
