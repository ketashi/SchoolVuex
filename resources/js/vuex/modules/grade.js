export default {
    namespaced: true,
    state: {
        data: [
            {
                category: null,
                grade: null,
                section: null,
                turno: null
            }
        ],
        categories: [],
        turnos: [],
        sections: [],
        headers: [],
        items: [],
        index: null,
        stateRegister: true
    },
    mutations: {
        getData(state) {
            state.sections = ["A", "B", "C", "D", "E", "F", "G", "I", "J"];
            state.turnos = ["Mañana", "Tarde"];
            state.categories = ["Inicial", "Primaria", "Secundaria"];
        },
        getdataTable(state){
            state.headers = [
                { text: "id", value: "id", sortable: false, align: "left" },
                { text: "Categorias", value: "category" },
                { text: "Grados", value: "grade" },
                { text: "Secciones", value: "section" },
                { text: "Turnos", value: "turno" },
                {
                    text: "Botones de Acciones",
                    value: "btnAction",
                    sortable: false,
                    align: "center"
                }
            ];
            state.items = [
                {
                    id: 1,
                    category: "Court",
                    grade: "Zontrax",
                    section: "Mauv",
                    turno: "4:15 PM"
                },
                {
                    id: 2,
                    category: "Drive",
                    grade: "Cardguard",
                    section: "Indigo",
                    turno: "11:29 PM"
                },
                {
                    id: 3,
                    category: "Hill",
                    grade: "Alpha",
                    section: "Goldenrod",
                    turno: "7:43 AM"
                },
                {
                    id: 4,
                    category: "Lane",
                    grade: "Lotstring",
                    section: "Indigo",
                    turno: "2:08 AM"
                },
                {
                    id: 5,
                    category: "Crossing",
                    grade: "Zontrax",
                    section: "Turquoise",
                    turno: "7:16 PM"
                },
                {
                    id: 6,
                    category: "Lane",
                    grade: "Tempsoft",
                    section: "Aquamarine",
                    turno: "4:24 AM"
                },
                {
                    id: 7,
                    category: "Trail",
                    grade: "Viva",
                    section: "Yellow",
                    turno: "2:02 PM"
                },
                {
                    id: 8,
                    category: "Park",
                    grade: "Opela",
                    section: "Yellow",
                    turno: "11:34 PM"
                },
                {
                    id: 9,
                    category: "Plaza",
                    grade: "Mat Lam Tam",
                    section: "Teal",
                    turno: "7:11 AM"
                },
                {
                    id: 10,
                    category: "Place",
                    grade: "Subin",
                    section: "Pink",
                    turno: "3:00 AM"
                },
                {
                    id: 11,
                    category: "Alley",
                    grade: "Cardguard",
                    section: "Teal",
                    turno: "10:56 PM"
                },
                {
                    id: 12,
                    category: "Drive",
                    grade: "Matsoft",
                    section: "Green",
                    turno: "6:14 PM"
                },
                {
                    id: 13,
                    category: "Junction",
                    grade: "Otcom",
                    section: "Orange",
                    turno: "7:17 PM"
                },
                {
                    id: 14,
                    category: "Junction",
                    grade: "Tres-Zap",
                    section: "Violet",
                    turno: "10:11 AM"
                },
                {
                    id: 15,
                    category: "Junction",
                    grade: "Pannier",
                    section: "Purple",
                    turno: "9:15 AM"
                },
                {
                    id: 16,
                    category: "Drive",
                    grade: "Job",
                    section: "Mauv",
                    turno: "6:16 PM"
                },
                {
                    id: 17,
                    category: "Junction",
                    grade: "Fixflex",
                    section: "Blue",
                    turno: "3:58 AM"
                },
                {
                    id: 18,
                    category: "Lane",
                    grade: "Cardify",
                    section: "Red",
                    turno: "6:47 PM"
                },
                {
                    id: 19,
                    category: "Point",
                    grade: "Regrant",
                    section: "Blue",
                    turno: "3:41 AM"
                },
                {
                    id: 20,
                    category: "Circle",
                    grade: "Cookley",
                    section: "Red",
                    turno: "12:27 PM"
                },
                {
                    id: 21,
                    category: "Circle",
                    grade: "Cardguard",
                    section: "Goldenrod",
                    turno: "5:50 PM"
                },
                {
                    id: 22,
                    category: "Road",
                    grade: "Temp",
                    section: "Fuscia",
                    turno: "9:57 AM"
                },
                {
                    id: 23,
                    category: "Trail",
                    grade: "Toughjoyfax",
                    section: "Khaki",
                    turno: "2:03 AM"
                },
                {
                    id: 24,
                    category: "Court",
                    grade: "Konklab",
                    section: "Goldenrod",
                    turno: "6:05 PM"
                },
                {
                    id: 25,
                    category: "Road",
                    grade: "Biodex",
                    section: "Orange",
                    turno: "4:41 PM"
                },
                {
                    id: 26,
                    category: "Crossing",
                    grade: "Stim",
                    section: "Turquoise",
                    turno: "2:22 AM"
                },
                {
                    id: 27,
                    category: "Drive",
                    grade: "Rank",
                    section: "Purple",
                    turno: "2:53 AM"
                },
                {
                    id: 28,
                    category: "Avenue",
                    grade: "Asoka",
                    section: "Khaki",
                    turno: "3:25 PM"
                },
                {
                    id: 29,
                    category: "Terrace",
                    grade: "Zamit",
                    section: "Orange",
                    turno: "4:12 PM"
                },
                {
                    id: 30,
                    category: "Street",
                    grade: "Fintone",
                    section: "Khaki",
                    turno: "5:32 AM"
                }
            ];
        },
        getNew(state, payload) {
            state.items.push(payload);
        },
        closeEdit(state) {
            state.stateRegister = true;
            this.clean;
        },
        getEdit(state, payload) {
            state.index = state.items.indexOf(payload);
            state.data = Object.assign({}, payload);
            state.stateRegister = false;
        },
        getUpdate(state, payload) {
            if (state.index > -1) {
                Object.assign(state.items[state.index], payload)
                this.clean;
            }
        },
        clean(state) {
            state.data = {category:'', grade: '', section: '', turno: ''}
        }
    }
};
