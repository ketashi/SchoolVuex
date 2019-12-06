<template>
    <div>
        <v-container>
            <v-row class="justify-center">
                <v-col xs="12" md="6">
                    <v-card>
                        <v-form>
                            <v-card-title primary-title class="justify-center">
                                Registro
                            </v-card-title>
                            <v-card-text>
                                <v-text-field
                                    v-model="email"
                                    :error-messages="emailErrors"
                                    label="E-mail"
                                    required
                                    @input="$v.email.$touch()"
                                    @blur="$v.email.$touch()"
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    v-model="password"
                                    :error-messages="passwordErrors"
                                    :append-icon="show ? mdiEyeOff: mdiEye"
                                    label="Contraseña"
                                    required
                                    :type="show ? 'password' : 'text'"
                                    @input="$v.password.$touch()"
                                    @blur="$v.password.$touch()"
                                    clearable
                                    @click:append="show = !show"
                                ></v-text-field>
                                <v-card-actions class="justify-center">
                                    <v-btn class="mr-4"  color="success">
                                       <a href="/dashboard" class="white--text">Ingresar</a> 
                                    </v-btn>
                                    <v-btn class="mr-4" color="error">
                                        <router-link :to="{name: 'home'}" class="white--text">Cancelar</router-link>
                                    </v-btn>
                                </v-card-actions>
                            </v-card-text>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { mdiEye, mdiEyeOff } from "@mdi/js";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    validations: {
        password: { required },
        email: { required, email }
    },

    data: () => ({
        password: "",
        email: "",
        mdiEye: mdiEye,
        mdiEyeOff: mdiEyeOff,
        show: true
    }),

    computed: {
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push("Contraseña es requerida.");
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push("Digite un email valido");
            !this.$v.email.required && errors.push("E-mail es requerido");
            return errors;
        }
    },

    methods: {
        submit() {
            this.$v.$touch();
        }
    }
};
</script>
