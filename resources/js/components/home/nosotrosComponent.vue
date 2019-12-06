<template>
    <div>
        <v-container class="mt-5">
            <h2 class="text-uppercase text-center">Nosotros</h2>
            <v-row
            >
                <v-col
                xs="12"
                sm="4"
                v-for="(card, index) in cards" :key="index"
                >
                    <v-card class="text-center">
                        <v-img
                         src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="200px">
                        </v-img>
                        <v-card-title primary-title 
                        class="text-uppercase justify-center"
                        v-text="card.title"></v-card-title>
                        <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
                        <v-card-text class="text-justify" v-text="card.content"></v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cards: [
                {
                    title: 'Titulo #1',
                    subtitle: 'Subtitulo #1',
                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem velit facere eos, minima ut veritatis officia sed quis saepe.
                    Vitae porro itaque exercitationem beatae dolore commodi vel impedit nesciunt provident?`
                },
                {
                    title: 'Titulo #2',
                    subtitle: 'Subtitulo #2',
                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem velit facere eos, minima ut veritatis officia sed quis saepe.
                    Vitae porro itaque exercitationem beatae dolore commodi vel impedit nesciunt provident?`
                },
                {
                    title: 'Titulo #3',
                    subtitle: 'Subtitulo #3',
                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem velit facere eos, minima ut veritatis officia sed quis saepe.
                    Vitae porro itaque exercitationem beatae dolore commodi vel impedit nesciunt provident?`
                },
            ]
        }
    },
}
</script>