<template>
    <div>
        <v-container>
            <h2 class="text-uppercase text-center">Docentes</h2>
            <v-row>
                    <v-col
                    sm="12"
                    >
                        <v-sheet
                        >
                            <v-slide-group
                            v-model="model"
                            class="pa-4"
                            active-class="success"
                            show-arrows
                            >
                            <v-slide-item
                                v-for="(profesor,index) in profesores"
                                :key="index"
                                v-slot:default="{ active, toggle }"
                            >
                                <v-card
                                :color="active ? undefined : 'grey lighten-1'"
                                class="ma-4"
                                height="200"
                                width="200"
                                @click="toggle"
                                
                                >
                                <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                                >
                                    <v-scale-transition>
                                         <v-img
                                            height="200"
                                            width="100"
                                            :src="profesor.photo"
                                            class="justify-center align-center text-center white--text"
                                            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                                        >
                                            <v-card-title primary-title class="justify-center text-uppercase">
                                                {{profesor.name}}
                                            </v-card-title>
                                            <v-card-subtitle class="white--text">
                                                {{profesor.curso}}
                                            </v-card-subtitle>
                                        </v-img>

                                    </v-scale-transition>
                                </v-row>
                                </v-card>
                            </v-slide-item>
                            </v-slide-group>
                        </v-sheet>
                    </v-col>
                </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            model: null,
            profesores:[
                {name: 'Profesor #1', curso: 'Matematica', photo:'https://picsum.photos/500/300?image1'},
                {name: 'Profesor #2', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=2'},
                {name: 'Profesor #3', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=3'},
                {name: 'Profesor #4', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=4'},
                {name: 'Profesor #5', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=5'},
                {name: 'Profesor #6', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=6'},
                {name: 'Profesor #7', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=7'},
                {name: 'Profesor #8', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=8'},
                {name: 'Profesor #9', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=9'},
                {name: 'Profesor #10', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=10'},
                {name: 'Profesor #11', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=11'},
                {name: 'Profesor #12', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=12'},
                {name: 'Profesor #13', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=13'},
                {name: 'Profesor #14', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=14'},
                {name: 'Profesor #15', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=15'},
                {name: 'Profesor #16', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=16'},
                {name: 'Profesor #17', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=17'},
                {name: 'Profesor #18', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=18'},
                {name: 'Profesor #19', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=19'},
                {name: 'Profesor #20', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=20'},
                {name: 'Profesor #21', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=21'},
                {name: 'Profesor #22', curso: 'Matematica', photo:'https://picsum.photos/500/300?image=22'},
            ]
        }
    },
}
</script>