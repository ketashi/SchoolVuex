<template>
    <div>
        <v-container class="mt-5">
            <v-row>
                <v-col md="8" class="ma-auto">
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
                                        v-text="mdiAccountPlus"
                                        size="60"
                                        color="white"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col xs="12" sm="6">
                                <v-card-title>
                                    Registro de Usuario
                                </v-card-title>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-form @submit.prevent="submit">
                            <v-card-text>
                                <v-row>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="name"
                                            :error-messages="nameErrors"
                                            label="Nombre"
                                            required
                                            @input="$v.name.$touch()"
                                            @blur="$v.name.$touch()"
                                            clearable
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="telephone"
                                            :error-messages="telephoneErrors"
                                            label="Telefono"
                                            required
                                            @input="$v.telephone.$touch()"
                                            @blur="$v.telephone.$touch()"
                                            clearable
                                        ></v-text-field>
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
                                            :append-icon="
                                                show ? mdiEye : mdiEyeOff
                                            "
                                            :type="show ? 'text' : 'password'"
                                            label="Contraseña"
                                            :error-messages="passwordErrors"
                                            @click:append="show = !show"
                                            @input="$v.password.$touch()"
                                            @blur="$v.password.$touch()"
                                            required
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="lastName"
                                            :error-messages="lastNameErrors"
                                            label="Apellidos"
                                            required
                                            @input="$v.lastName.$touch()"
                                            @blur="$v.lastName.$touch()"
                                            clearable
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="address"
                                            :error-messages="addressErrors"
                                            label="Direccion"
                                            required
                                            @input="$v.address.$touch()"
                                            @blur="$v.address.$touch()"
                                            clearable
                                        ></v-text-field>
                                        <v-select
                                            v-model="rol"
                                            :items="roles"
                                            :error-messages="rolErrors"
                                            label="Rol de Acceso"
                                            required
                                            @change="$v.rol.$touch()"
                                            @blur="$v.rol.$touch()"
                                        ></v-select>
                                        <v-text-field
                                            v-model="repeatPassword"
                                            :append-icon="
                                                showr ? mdiEye : mdiEyeOff
                                            "
                                            :type="showr ? 'text' : 'password'"
                                            label="Repetir Constraseña"
                                            :error-messages="
                                                repeatPasswordErrors
                                            "
                                            @click:append="showr = !showr"
                                            @input="$v.repeatPassword.$touch()"
                                            @blur="$v.repeatPassword.$touch()"
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
                                            color="success"
                                            dark
                                            type="submit"
                                            block
                                            >Agregar</v-btn
                                        >
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-btn
                                            color="error"
                                            dark
                                            @click="clear()"
                                            block
                                            >Limpiar</v-btn
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
import { mdiAccountPlus, mdiEyeOff, mdiEye, mdiDeleteForever } from "@mdi/js";
import { validationMixin } from "vuelidate";
import { required, email, sameAs } from "vuelidate/lib/validators";
import { mapState, mapMutations } from "vuex";
export default {
    mixins: [validationMixin],
    validations: {
        name: { required },
        email: { required, email },
        lastName: { required },
        address: { required },
        telephone: { required },
        rol: { required },
        password: { required },
        repeatPassword: { sameAsPassword: sameAs("password") }
    },
    data() {
        return {
            mdiAccountPlus: mdiAccountPlus,
            mdiEye: mdiEye,
            mdiEyeOff: mdiEyeOff,
            mdiDeleteForever: mdiDeleteForever,
            show: false,
            showr: false,
            name: "",
            email: "",
            lastName: "",
            address: "",
            telephone: "",
            rol: null,
            roles: ["estudiante", "profesor", "apoderado"],
            password: "",
            repeatPassword: "",
            data: "",
            validar: false
        };
    },
    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.required && errors.push("El nombre es requerido.");
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.email && errors.push("Digite un e-mail valido");
            !this.$v.email.required && errors.push("El e-mail es requerido");
            return errors;
        },
        lastNameErrors() {
            const errors = [];
            if (!this.$v.lastName.$dirty) return errors;
            !this.$v.lastName.required &&
                errors.push("Los Apellidos son requeridos");
            return errors;
        },
        addressErrors() {
            const errors = [];
            if (!this.$v.address.$dirty) return errors;
            !this.$v.address.required &&
                errors.push("La direccion es requerida");
            return errors;
        },
        telephoneErrors() {
            const errors = [];
            if (!this.$v.telephone.$dirty) return errors;
            !this.$v.telephone.required &&
                errors.push("Numero de telefono es requerido");
            return errors;
        },
        rolErrors() {
            const errors = [];
            if (!this.$v.rol.$dirty) return errors;
            !this.$v.rol.required && errors.push("Seleccionar un rol");
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required &&
                errors.push("La contraseña es requerida");
            return errors;
        },
        repeatPasswordErrors() {
            const errors = [];
            if (!this.$v.repeatPassword.$dirty) return errors;
            !this.$v.repeatPassword.sameAsPassword &&
                errors.push("La contraseña no coinciden");
            return errors;
        }
    },

    methods: {
        submit() {
            this.validate()
            if(this.validar){
            this.$swal(
                "Nuevo Usuario",
                "Se registro un nuevo usuario",
                "success"
            );
            this.data = {
                name: this.name,
                lastName: this.lastName,
                email: this.email,
                address: this.address,
                telephone: this.telephone,
                password: this.password,
                rol: this.rol
            };
            this.getCreate(this.data);
            this.reset(); 
            }else {
                this.$v.$touch()
                this.$swal(
                "Campos Incompletos",
                "Todos los campos son obligatorios",
                "warning"
            );
            }
            
        },
        clear() {
            this.$v.$reset();
            this.$swal({
                title: "Quieres limpiar los campos",
                icon: this.mdiDeleteForever,
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, limpiar campos...!"
            }).then(result => {
                if (result.value) {
                    this.$swal(
                        "Limpiando!",
                        "Se limpiaron lo campos.",
                        "success"
                    );
                    this.reset();
                }
            });
        },
        reset() {
            this.name = "";
            this.email = "";
            this.lastName = "";
            this.address = "";
            this.telephone = "";
            this.rol = null;
            this.password = "";
            this.repeatPassword = "";
        },
        validate() {
            if (
                this.name === "" ||
                this.email === "" ||
                this.lastName === "" ||
                this.address === "" ||
                this.telephone === "" ||
                this.rol === null ||
                this.password === "" ||
                this.repeatPassword === ""
            ) {
                this.validar = false;
            } else {
                this.validar = true;
            }
        },
        ...mapMutations("user", ["getCreate"])
    }
};
</script>

<style>
.sheet-card-offset {
    top: -40px;
    position: relative;
}
</style>
