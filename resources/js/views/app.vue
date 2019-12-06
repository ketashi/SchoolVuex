<template>
    <div>
        <v-app>
            <!-- navigation de menu -->
            <v-navigation-drawer v-model="drawer" temporary app>
                <!-- lista de categorias -->
                <v-list nav>
                    <v-subheader inset>Home</v-subheader>
                    <v-list-item-group v-model="item" color="primary">
                        <router-link :to="{name:'home'}">
                            <v-list-item v-for="(item, i) in items" :key="i">
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title
                                        v-text="item.text"
                                    ></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <v-divider></v-divider>

                        <v-subheader inset>Login</v-subheader>
                        <router-link :to="{ name: 'login' }">
                            <v-list-item v-for="(item, i) in login" :key="i">
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title
                                        v-text="item.text"
                                    ></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>

            <!-- navigation -->
            <v-app-bar dense dark app>
                <v-app-bar-nav-icon
                    @click.stop="drawer = !drawer"
                ></v-app-bar-nav-icon>
                <v-toolbar-title>Colegio</v-toolbar-title>
            </v-app-bar>

            <v-content class="align-center">
                <!-- home -->
                <transition transition="scale-transition">
                    <router-view :key="$route.fullPath"></router-view>
                </transition>
            </v-content>

            <!-- footer -->
            <v-footer dark padless app>
                <v-col class="text-center" cols="12">
                    {{ new Date().getFullYear() }} —
                    <strong>Todo los derechos reservados</strong>
                </v-col>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
import {
    mdiDomain,
    mdiAccountCardDetailsOutline,
    mdiAccountGroup,
    mdiLogin
} from "@mdi/js";
export default {
    data() {
        return {
            drawer: null,
            items: [
                { text: "Nosotros", icon: mdiDomain },
                { text: "Docentes", icon: mdiAccountGroup },
                { text: "Contacto", icon: mdiAccountCardDetailsOutline }
            ],
            login: [{ text: "Login", icon: mdiLogin }],

            item: null
        };
    }
};
</script>
