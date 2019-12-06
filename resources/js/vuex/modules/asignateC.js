export default {
    namespaced: true,
    state: {
        student: [
            {
                headers: [],
                items: []
            }
        ],
        teacher: [
            {
                headers: [],
                items: []
            }
        ],
        course: [
            {
                headers: [],
                items: []
            }
        ],
        section: [
            {
                headers: [],
                items: []
            }
        ],
        asignateCourse:[
            {
                headers: [],
                items: []
            }
        ],
        selectStudent: [],
        selectCourse: [],
        selectGrade: [],
        selectTeacher: [],
        items: [],
        stateRegister: true,
        index: null,
        item:''
    },
    mutations: {
        getDataAsignateCourse(state){
            state.asignateCourse.headers= [
                {text:'id', value:'id', sortable:false, align:'left'},
                {text:'Nombre del Docente', value:'teacher'},
                {text:'Nombres del Alumno', value:'name'},
                {text:'Nombre del Curso', value: 'course'},
                {text:'Categoria', value:'category'},
                {text:'Grado', value:'grade'},
                {text:'Seccion', value:'section'},
                {text:'Turnos', value:'turno'},
                {text:'Creditaje', value: 'credit'},
                {text:'Botones de Accion', value:'btnAction'}
            ]
        },
        getDataStudent(state) {
            //data de Alumnos
            state.student.headers = [
                { text: "id", value: "id", sortable: "false", align: "false" },
                { text: "Nombre", value: "name" },
                { text: "Apellido", value: "lastName" }
            ];
            state.student.items = [
                {
                    id: 1,
                    name: "zsuddell0",
                    lastName: "Suddell"
                },
                {
                    id: 2,
                    name: "wascrofte1",
                    lastName: "Ascrofte"
                },
                {
                    id: 3,
                    name: "mpauncefort2",
                    lastName: "Pauncefort"
                },
                {
                    id: 4,
                    name: "igilfether3",
                    lastName: "Gilfether"
                },
                {
                    id: 5,
                    name: "akeary4",
                    lastName: "Keary"
                },
                {
                    id: 6,
                    name: "ndyas5",
                    lastName: "Dyas"
                },
                {
                    id: 7,
                    name: "evanacci6",
                    lastName: "Vanacci"
                },
                {
                    id: 8,
                    name: "iewbach7",
                    lastName: "Ewbach"
                },
                {
                    id: 9,
                    name: "ccarous8",
                    lastName: "Carous"
                },
                {
                    id: 10,
                    name: "dculy9",
                    lastName: "Culy"
                },
                {
                    id: 11,
                    name: "lpaulinoa",
                    lastName: "Paulino"
                },
                {
                    id: 12,
                    name: "xcoathb",
                    lastName: "Coath"
                },
                {
                    id: 13,
                    name: "asumpterc",
                    lastName: "Sumpter"
                },
                {
                    id: 14,
                    name: "mbengalld",
                    lastName: "Bengall"
                },
                {
                    id: 15,
                    name: "kmcgraffine",
                    lastName: "McGraffin"
                },
                {
                    id: 16,
                    name: "cmcclaurief",
                    lastName: "McClaurie"
                },
                {
                    id: 17,
                    name: "tfossettg",
                    lastName: "Fossett"
                },
                {
                    id: 18,
                    name: "bglazeh",
                    lastName: "Glaze"
                },
                {
                    id: 19,
                    name: "rsallai",
                    lastName: "Salla"
                },
                {
                    id: 20,
                    name: "kstonhousej",
                    lastName: "Stonhouse"
                }
            ];
        },
        getDataTeacher(state) {
            //Data de Profesores
            state.teacher.headers = [
                { text: "id", value: "id", sortable: "false", align: "false" },
                { text: "Nombre", value: "name" },
                { text: "Apellido", value: "lastName" }
            ];
            state.teacher.items = [
                {
                    id: 1,
                    name: "Job",
                    lastName: "Adlam"
                },
                {
                    id: 2,
                    name: "Otcom",
                    lastName: "Grzelak"
                },
                {
                    id: 3,
                    name: "Cardify",
                    lastName: "Illing"
                },
                {
                    id: 4,
                    name: "Fintone",
                    lastName: "De Angelo"
                },
                {
                    id: 5,
                    name: "Ronstring",
                    lastName: "Mallabone"
                },
                {
                    id: 6,
                    name: "Ronstring",
                    lastName: "Dictus"
                },
                {
                    id: 7,
                    name: "Gembucket",
                    lastName: "Rosenbusch"
                },
                {
                    id: 8,
                    name: "Duobam",
                    lastName: "Butteris"
                },
                {
                    id: 9,
                    name: "Cookley",
                    lastName: "Lisimore"
                },
                {
                    id: 10,
                    name: "Sonair",
                    lastName: "Spillman"
                },
                {
                    id: 11,
                    name: "Keylex",
                    lastName: "Hazle"
                },
                {
                    id: 12,
                    name: "Gembucket",
                    lastName: "Seatter"
                },
                {
                    id: 13,
                    name: "Bigtax",
                    lastName: "Clever"
                },
                {
                    id: 14,
                    name: "Biodex",
                    lastName: "McVitie"
                },
                {
                    id: 15,
                    name: "Y-find",
                    lastName: "Crease"
                },
                {
                    id: 16,
                    name: "Greenlam",
                    lastName: "Presman"
                },
                {
                    id: 17,
                    name: "Zaam-Dox",
                    lastName: "Trimbey"
                },
                {
                    id: 18,
                    name: "Y-Solowarm",
                    lastName: "Lyster"
                },
                {
                    id: 19,
                    name: "Job",
                    lastName: "Egdale"
                },
                {
                    id: 20,
                    name: "Bamity",
                    lastName: "Gillham"
                }
            ];
        },
        getDataCourse(state) {
            //Data de Cursos
            (state.course.headers = [
                { text: "id", value: "id", sortable: false, align: "left" },
                { text: "Nombre", value: "name" },
                { text: "Creditaje", value: "credit" }
            ]),
                (state.course.items = [
                    {
                        id: 1,
                        name: "donec pharetra.ppt",
                        credit: 13
                    },
                    {
                        id: 2,
                        name: "est donec odio.ppt",
                        credit: 16
                    },
                    {
                        id: 3,
                        name: "fusce lacus purus.xls",
                        credit: 30
                    },
                    {
                        id: 4,
                        name: "nulla suspendisse potenti.xls",
                        credit: 30
                    },
                    {
                        id: 5,
                        name: "luctus nec molestie.ppt",
                        credit: 28
                    },
                    {
                        id: 6,
                        name: "nulla sed.ppt",
                        credit: 13
                    },
                    {
                        id: 7,
                        name: "mauris ullamcorper purus.ppt",
                        credit: 29
                    },
                    {
                        id: 8,
                        name: "felis ut at.xls",
                        credit: 22
                    },
                    {
                        id: 9,
                        name: "pretium quis.ppt",
                        credit: 27
                    },
                    {
                        id: 10,
                        name: "sapien.xls",
                        credit: 15
                    },
                    {
                        id: 11,
                        name: "in.ppt",
                        credit: 25
                    },
                    {
                        id: 12,
                        name: "porttitor pede.ppt",
                        credit: 27
                    },
                    {
                        id: 13,
                        name: "luctus.pdf",
                        credit: 20
                    },
                    {
                        id: 14,
                        name: "arcu.xls",
                        credit: 24
                    },
                    {
                        id: 15,
                        name: "imperdiet sapien.ppt",
                        credit: 11
                    },
                    {
                        id: 16,
                        name: "pede malesuada in.xls",
                        credit: 10
                    },
                    {
                        id: 17,
                        name: "ultrices erat.ppt",
                        credit: 15
                    },
                    {
                        id: 18,
                        name: "ut.xls",
                        credit: 26
                    },
                    {
                        id: 19,
                        name: "mauris laoreet ut.doc",
                        credit: 30
                    },
                    {
                        id: 20,
                        name: "nec condimentum neque.xls",
                        credit: 24
                    }
                ]);
        },
        getDataSection(state) {
            //Data de grados y seccion
            state.section.headers = [
                { text: "id", value: "id", sortable: false, align: 'left' },
                { text: "Categorias", value: "category" },
                { text: "Grados", value: "grade" },
                { text: "Secciones", value: "section" },
                { text: "Turnos", value: "turno" }
            ];
            state.section.items = [
                {
                    id: 1,
                    category: "Ford",
                    grade: "Topcare Allergy",
                    section: "F",
                    turno: "4:53 PM"
                },
                {
                    id: 2,
                    category: "Mazda",
                    grade: "Gas-X",
                    section: "M",
                    turno: "4:29 PM"
                },
                {
                    id: 3,
                    category: "Chevrolet",
                    grade: "Lycopodium Clavatum",
                    section: "M",
                    turno: "12:03 AM"
                },
                {
                    id: 4,
                    category: "Chevrolet",
                    grade: "Maximum Strength Laxative",
                    section: "F",
                    turno: "1:30 PM"
                },
                {
                    id: 5,
                    category: "Pontiac",
                    grade: "Oxycodone Hydrochloride and Acetaminophen",
                    section: "F",
                    turno: "9:39 AM"
                },
                {
                    id: 6,
                    category: "Volvo",
                    grade: "Ipratropium Bromide",
                    section: "F",
                    turno: "2:07 PM"
                },
                {
                    id: 7,
                    category: "Lotus",
                    grade: "Gabapentin",
                    section: "M",
                    turno: "2:28 AM"
                },
                {
                    id: 8,
                    category: "Chevrolet",
                    grade: "Fosinopril Sodium",
                    section: "M",
                    turno: "1:56 AM"
                },
                {
                    id: 9,
                    category: "Mazda",
                    grade: "Diclofenac Sodium",
                    section: "F",
                    turno: "4:48 PM"
                },
                {
                    id: 10,
                    category: "Nissan",
                    grade: "Simply Right Lansoprazole",
                    section: "F",
                    turno: "12:38 PM"
                },
                {
                    id: 11,
                    category: "Pontiac",
                    grade: "COLIC DIARRHEA",
                    section: "M",
                    turno: "8:07 PM"
                },
                {
                    id: 12,
                    category: "Nissan",
                    grade: "OXYGEN",
                    section: "M",
                    turno: "9:53 PM"
                },
                {
                    id: 13,
                    category: "Chevrolet",
                    grade: "Ammonium Lactate",
                    section: "F",
                    turno: "2:55 AM"
                },
                {
                    id: 14,
                    category: "Acura",
                    grade: "Loxapine Succinate",
                    section: "M",
                    turno: "1:15 PM"
                },
                {
                    id: 15,
                    category: "Citroën",
                    grade: "Captopril",
                    section: "M",
                    turno: "6:09 PM"
                },
                {
                    id: 16,
                    category: "Buick",
                    grade: "Simvastatin",
                    section: "F",
                    turno: "7:29 AM"
                },
                {
                    id: 17,
                    category: "Buick",
                    grade: "NERVE TONIC STRESS RELIEF",
                    section: "M",
                    turno: "11:22 PM"
                },
                {
                    id: 18,
                    category: "Jeep",
                    grade: "Optiray",
                    section: "F",
                    turno: "5:46 AM"
                },
                {
                    id: 19,
                    category: "Saab",
                    grade: "Treatment Set TS340826",
                    section: "F",
                    turno: "12:12 AM"
                },
                {
                    id: 20,
                    category: "Ford",
                    grade: "OI LIN DEEP MOISTURE SUNSCREEN SPF 25",
                    section: "F",
                    turno: "7:53 AM"
                }
            ];
        },
        getSelectStudent(state, payload){
            state.selectStudent = payload
        },
        getSelectCourse(state, payload){
            state.selectCourse = payload
        },
        getSelectGrade(state, payload){
            state.selectGrade = payload
        },
        getSelectTeacher(state, payload){
            state.selectTeacher = payload
        },
        getNew(state) {
            for (let index = 0; index < state.selectStudent.length; index++) {
                let data = {
                    id: state.items.length +1 ,
                    teacher: state.selectTeacher[0].lastName + ', ' + state.selectTeacher[0].name,
                    name: state.selectStudent[index].lastName + ', '+ state.selectStudent[index].name,
                    course: state.selectCourse[0].name,
                    category: state.selectGrade[0].category,
                    grade: state.selectGrade[0].grade,
                    section: state.selectGrade[0].section,
                    turno: state.selectGrade[0].turno,
                    credit: state.selectCourse[0].credit
                }
                state.items.push(data)
            }
        },
        getEdit(state, payload){
            state.index = state.items.indexOf(payload)
            state.item = Object.assign({}, payload)
            state.stateRegister = false
        },
        closeEdit(state){
            state.stateRegister = true
            this.clean
        },
        clean(){
            state.item =''
        },
        getUpdate(state,payload){
            if(state.index > -1){
                Object.assign(state.items[state.index], payload)
                this.clean
            }
        }
    }
};
