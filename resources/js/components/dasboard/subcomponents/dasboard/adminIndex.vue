<template>
    <div>
        <v-container >
            <v-row class="justify-center">
                <v-col xs="12" sm="6" md="4"
                v-for="(item, index) in reportes" :key="index">
                    <v-card
                    >
                        <v-row>
                            <v-col sm="6">
                                <v-sheet
                                    class="v-sheet--offset ml-5 d-flex align-center justify-center"
                                    :color="item.color"
                                    elevation="12"
                                    width="100"
                                    height="100"
                                >
                                    <v-icon 
                                    v-text="item.logo"
                                    class="white--text"
                                    size="80"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col sm="6">
                                <v-card-subtitle>
                                   {{item.title}}
                                   <v-card-title primary-title>
                                    {{item.quantity}}
                                   </v-card-title>
                                </v-card-subtitle>
                                
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-icon v-text="item.icon"></v-icon>
                            Actualizado ahora
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { 
    mdiAccount,
    mdiFinance,
    mdiAccountTie,
    mdiAccountChild,
    mdiClockOutline
 } from '@mdi/js'; 
export default {
    data() {
        return {
            reportes:[
                {title: 'Estudiantes', logo: mdiAccount, quantity: 450, icon: mdiClockOutline, color: 'teal darken-4'},
                {title: 'Profesores', logo: mdiAccountTie, quantity: 150, icon: mdiClockOutline, color: 'purple darken-4'},
                {title: 'Apoderados', logo: mdiAccountChild, quantity: 400, icon: mdiClockOutline, color: 'pink darken-1'},
            ]
        }
    },
}
</script>
