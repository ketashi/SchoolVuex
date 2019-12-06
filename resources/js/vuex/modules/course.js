export default {
    namespaced: true,
    state: {
        data: [
            {
                course: "",
                credite: ""
            }
        ],
        headers: [],
        items: [],
        active: true,
        index: null,
    },
    mutations: {
        getData(state) {
            state.headers = [
                {
                    text: "id",
                    value: "id",
                    sortable: false,
                    align: "left"
                },
                {
                    text: "Curso",
                    value: "course"
                },
                {
                    text: "Creditaje",
                    value: "credite"
                },
                {
                    text: "Botones de Acciones",
                    value: "btnAction",
                    sortable: false,
                    align:"center"
                }
            ];

            state.items = [
                {
                    id: 1,
                    course: "Fix San",
                    credite: 18
                },
                {
                    id: 2,
                    course: "Zoolab",
                    credite: 58
                },
                {
                    id: 3,
                    course: "Asoka",
                    credite: 62
                },
                {
                    id: 4,
                    course: "Sonair",
                    credite: 29
                },
                {
                    id: 5,
                    course: "It",
                    credite: 53
                },
                {
                    id: 6,
                    course: "Domainer",
                    credite: 46
                },
                {
                    id: 7,
                    course: "Ronstring",
                    credite: 39
                },
                {
                    id: 8,
                    course: "Domainer",
                    credite: 94
                },
                {
                    id: 9,
                    course: "Wrapsafe",
                    credite: 42
                },
                {
                    id: 10,
                    course: "Zamit",
                    credite: 84
                },
                {
                    id: 11,
                    course: "Job",
                    credite: 89
                },
                {
                    id: 12,
                    course: "Tampflex",
                    credite: 66
                },
                {
                    id: 13,
                    course: "Fintone",
                    credite: 88
                },
                {
                    id: 14,
                    course: "Alphazap",
                    credite: 20
                },
                {
                    id: 15,
                    course: "Fintone",
                    credite: 97
                },
                {
                    id: 16,
                    course: "Sonair",
                    credite: 93
                },
                {
                    id: 17,
                    course: "Temp",
                    credite: 100
                },
                {
                    id: 18,
                    course: "Stringtough",
                    credite: 18
                },
                {
                    id: 19,
                    course: "Vagram",
                    credite: 81
                },
                {
                    id: 20,
                    course: "Temp",
                    credite: 19
                },
                {
                    id: 21,
                    course: "Tresom",
                    credite: 53
                },
                {
                    id: 22,
                    course: "Stronghold",
                    credite: 58
                },
                {
                    id: 23,
                    course: "Hatity",
                    credite: 47
                },
                {
                    id: 24,
                    course: "Bytecard",
                    credite: 98
                },
                {
                    id: 25,
                    course: "Tresom",
                    credite: 28
                },
                {
                    id: 26,
                    course: "Voyatouch",
                    credite: 100
                },
                {
                    id: 27,
                    course: "Fixflex",
                    credite: 40
                },
                {
                    id: 28,
                    course: "Daltfresh",
                    credite: 90
                },
                {
                    id: 29,
                    course: "Viva",
                    credite: 22
                },
                {
                    id: 30,
                    course: "Stronghold",
                    credite: 76
                }
            ];
        },
        getEdit(state, payload) {
            state.index = state.items.indexOf(payload);
            state.data = Object.assign({}, payload);
            state.active = false;
        },
        closeEdit(state) {
            state.active = true;
            this.clean;
        },
        getUpdate(state, payload) {
            if (state.index > -1) {
                Object.assign(state.items[state.index], payload);
                this.clean;
            }
        },
        getNew(state, payload) {
            state.items.push(payload);
        },
        clean(state) {
            state.data = { course: "", credite: "" };
        }
    }
};
