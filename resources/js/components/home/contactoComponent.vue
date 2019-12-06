<template>
    <div>
        <v-container id="contactos">
            <h2 class="text-uppercase text-center">Contacto</h2>
            <v-row>
                <v-col>
                    <v-form >
                        <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            :counter="15"
                            label="Nombre"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                        ></v-text-field>
                        <v-text-field
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                        ></v-text-field>
                        <v-textarea
                            label="Sugerencia o Consulta"
                            required
                            clearable
                            v-model="textArea"
                        ></v-textarea>
                        <v-btn
                            class="my-4"
                            @click="submit"
                            block
                            color="success"
                            >Enviar</v-btn
                        >
                        <v-btn @click="clear" block color="red" class="white--text">Limpiar</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],

    validations: {
        name: { required, maxLength: maxLength(15) },
        email: { required, email },
        textArea: {required}
    },

    data: () => ({
        name: "",
        email: "",
        textArea:''
    }),

    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.maxLength &&
                errors.push("Nombre no mayor a 15 caracteres");
            !this.$v.name.required && errors.push("Nombre es requerido.");
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push("Digite un e-mail valido");
            !this.$v.email.required && errors.push("E-mail es requerido");
            return errors;
        },

    },

    methods: {
        submit() {
            this.$v.$touch();
        },
        clear() {
            this.$v.$reset();
            this.name = "";
            this.email = "";
            this.textArea= "";
        }
    }
};
</script>
