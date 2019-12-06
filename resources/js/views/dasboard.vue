<template>
    <div>
        <v-app>
            <!-- navigation menu -->
            <v-navigation-drawer
                v-model="drawer"
                :mini-variant.sync="mini"
                permanent
                app
                dark
            >
                <!-- informacion administrador -->
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img
                            src="https://scontent.flim5-1.fna.fbcdn.net/v/t1.0-1/c0.0.32.32a/p32x32/69686813_2504202336305307_1514814821902581760_o.jpg?_nc_cat=111&_nc_ohc=dVoHWBeFFTEAQl-Zs1YhrVdME9LPQY7svJLHtILQ5BVjxf5CBpUCgDdKA&_nc_ht=scontent.flim5-1.fna&oh=ed49314caccf0ba346f4c237c2f1d851&oe=5E81CD41"
                        ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-title>Administrador</v-list-item-title>

                    <v-btn icon @click.stop="mini = !mini">
                        <v-icon>{{ mdiChevronLeftCircleOutline }}</v-icon>
                    </v-btn>
                </v-list-item>

                <v-divider></v-divider>
                <!-- informacion de categorias -->
                <v-list>
                    <v-list-item-group v-model="item" dark>
                        <v-list-item>
                            <router-link
                                :to="{ name: 'index' }"
                                class="white--text d-flex align-center"
                            >
                                <v-list-item-icon class="ml-3">
                                    <v-icon>{{ mdiViewDashboard }}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ dasboard }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </router-link>
                        </v-list-item>

                        <v-list-group
                            color="dark"
                            :prepend-icon="item.icon"
                            v-for="item in items"
                            :key="item.title"
                            no-action
                        >
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title
                                        v-text="item.title"
                                    ></v-list-item-title>
                                </v-list-item-content>
                            </template>

                            <v-list-item
                                v-for="subitem in item.items"
                                :key="subitem.title"
                                class="ml-n10"
                            >
                                <router-link
                                    :to="{ name: subitem.route }"
                                    class="white--text d-flex align-center"
                                    width="100%"
                                >
                                    <v-list-item-icon>
                                        <v-icon>{{ subitem.icon }}</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>{{
                                            subitem.title
                                        }}</v-list-item-title>
                                    </v-list-item-content>
                                </router-link>
                            </v-list-item>
                        </v-list-group>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>

            <!-- navigation -->
            <v-app-bar dark app>
                <v-toolbar-title>Escuela</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>{{ mdiHeart }}</v-icon>
                </v-btn>
                <v-menu left bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                            <v-icon>{{ mdiDotsVertical }}</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item v-for="n in 2" :key="n" @click="() => {}">
                            <v-list-item-title
                                >Setting {{ n }}</v-list-item-title
                            >
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar>

            <v-content>
                <v-container>
                    <transition transition="scroll-x-reverse-transition">
                        <router-view :key="$route.fullPath"></router-view>
                    </transition>
                </v-container>
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
    mdiHeart,
    mdiDotsVertical,
    mdiChevronLeftCircleOutline,
    mdiViewDashboard,
    mdiFileChart,
    mdiFileTableOutline,
    mdiAccountPlus,
    mdiBookPlus,
    mdiFormatSection,
    mdiAbTesting,
    mdiClipboardAccountOutline,
    mdiFormatAnnotationPlus,
    mdiCash,
    mdiAccountChild,
    mdiChartAreaspline,
    mdiLogoutVariant,
    mdiFileDocumentBoxPlus
} from "@mdi/js";
export default {
    data() {
        return {
            mdiHeart: mdiHeart,
            mdiDotsVertical: mdiDotsVertical,
            mdiChevronLeftCircleOutline: mdiChevronLeftCircleOutline,
            dasboard: "Dashboard",
            mdiViewDashboard: mdiViewDashboard,
            closeSession: 'Cerrar Session',
            mdiLogoutVariant:mdiLogoutVariant,
            items: [
                {
                    title: "Registros",
                    icon: mdiAccountPlus,
                    item: true,
                    items: [
                        {
                            title: "Usuarios",
                            icon: mdiAccountPlus,
                            route: "register"
                        },
                        {
                            title: "Cursos",
                            icon: mdiBookPlus,
                            route: "course"
                        },
                        {
                            title: "Grados",
                            icon: mdiFormatSection,
                            route: "grades"
                        },
                        {
                            title: "Notas",
                            icon: mdiAbTesting,
                            route: "calification"
                        }
                    ]
                },
                {
                    title: "Asignaciones",
                    icon: mdiClipboardAccountOutline,
                    items: [
                        {
                            title: "Cursos",
                            icon: mdiFileDocumentBoxPlus,
                            route: "asignateC"
                        },
                        {
                            title: "Notas",
                            icon: mdiFormatAnnotationPlus,
                            route: "asignateN"
                        },
                        {
                            title: "Apoderados",
                            icon: mdiAccountChild,
                            route: "asignateA"
                        },
                        {
                            title: "Mensualidades",
                            icon: mdiCash,
                            route: "asignateM"
                        }
                    ]
                },
                {
                    title: "Reportes",
                    icon: mdiChartAreaspline,
                    items: [
                        {
                            title: "Reporte Notas",
                            icon: mdiFileTableOutline,
                            route: "reportN"
                        },
                        {
                            title: "Reporte Mensualidad",
                            icon: mdiFileChart,
                            route: "reportM"
                        }
                    ]
                }
            ],
            drawer: true,
            mini: true,
            item: 0
        };
    }
};
</script>
