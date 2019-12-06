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
                                    color="warning"
                                    class="d-flex justify-center align-center white--text sheet-card-offset"
                                >
                                    <v-icon
                                        v-text="mdiAccountEdit"
                                        size="60"
                                        color="white"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col xs="12" sm="6">
                                <v-card-title>
                                    Editar Usuario
                                </v-card-title>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-form
                            @submit.prevent="submit()"
                            v-model="valid"
                            lazy-validation
                            ref="form"
                        >
                            <v-card-text>
                                <v-row>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="data.name"
                                            label="Nombre"
                                            :rules="nameRules"
                                            required
                                            clearable
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="data.telephone"
                                            :rules="telephoneRules"
                                            label="Telefono"
                                            required
                                            clearable
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="data.email"
                                            :rules="emailRules"
                                            label="E-mail"
                                            required
                                            clearable
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="data.password"
                                            :append-icon="
                                                show ? mdiEye : mdiEyeOff
                                            "
                                            :type="show ? 'text' : 'password'"
                                            label="Contraseña"
                                            :rules="passwordRules"
                                            @click:append="show = !show"
                                            required
                                            clearable
                                        ></v-text-field>
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-text-field
                                            v-model="data.lastName"
                                            :rules="lastNameRules"
                                            label="Apellidos"
                                            required
                                            clearable
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="data.address"
                                            :rules="addressRules"
                                            label="Direccion"
                                            required
                                            clearable
                                        ></v-text-field>
                                        <v-select
                                            v-model="data.rol"
                                            :items="roles"
                                            :rules="[
                                                v => !!v || 'Rol es requerido'
                                            ]"
                                            label="Rol de Acceso"
                                            required
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-row>
                                    <v-col sm="12" md="6">
                                        <v-btn
                                            color="warning"
                                            dark
                                            type="submit"
                                            block
                                            >Guardar</v-btn
                                        >
                                    </v-col>
                                    <v-col sm="12" md="6">
                                        <v-btn
                                            color="error"
                                            dark
                                            @click="clear()"
                                            block
                                            >Cancelar</v-btn
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
import { mdiAccountEdit, mdiEyeOff, mdiEye } from "@mdi/js";
import { mapMutations, mapState } from "vuex";
export default {
    data() {
        return {
            mdiAccountEdit: mdiAccountEdit,
            mdiEye: mdiEye,
            mdiEyeOff: mdiEyeOff,
            show: false,
            showr: false,
            roles: ["estudiante", "profesor", "apoderado"],
            valid: true,
            validar: false,
            nameRules: [v => !!v || "Nombre es requerido"],
            lastNameRules: [v => !!v || "Apellidos son requeridos"],
            emailRules: [
                v => !!v || "E-mail es requerido",
                v => /.+@.+\..+/.test(v) || "Coloque un email valido"
            ],
            addressRules: [v => !!v || "Direccion es requerida"],
            telephoneRules: [v => !!v || "Telefono es requerido"],
            passwordRules: [v => !!v || "Contraseña es requerida"]
        };
    },
    computed: {
        ...mapState("user", ["data"])
    },

    methods: {
        submit() {
            if (
                this.data.name === null ||
                this.data.email === null ||
                this.data.lastName === null ||
                this.data.address === null ||
                this.data.telephone === null ||
                this.data.password === null
            ) {
                this.snackbar = true;
                this.$swal(
                    "Campos Incompletos",
                    "Todos los campos son obligatorios",
                    "warning"
                );
            } else {
                if (this.$refs.form.validate()) {
                    this.$swal(
                        "Usuario Actualizado",
                        "Se modificaron los datos del usuario",
                        "success"
                    );
                    this.getUpdate(this.data);
                    this.cancelEdit();
                }else{
                    this.$swal(
                    "Campos Incompletos",
                    "Todos los campos son obligatorios",
                    "warning"
                );
                }
            }
        },
        clear() {
            this.$swal({
                title: "Quieres salir de la zona de editar",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, los datos se mantendran sin cambios!"
            }).then(result => {
                if (result.value) {
                    this.$swal(
                        "OK!",
                        "Los datos no se modificaron...",
                        "success"
                    );
                    this.cancelEdit();
                }
            });
        },
        ...mapMutations("user", ["cancelEdit", "getUpdate"])
    }
};
</script>

<style>
.sheet-card-offset {
    top: -40px;
    position: relative;
}
</style>
