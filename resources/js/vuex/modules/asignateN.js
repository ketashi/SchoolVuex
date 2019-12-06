export default {
    namespaced: true,
    state: {
        course: [],
        selectCourseTeacher: [],
        student: [],
        selectStudentTeacher: [],
        note:[],
        selectNoteTeacher: [],
        items:[],
        item:[],
        selectTeacher:[],
        headers:[],
        index: null,
        stateRegister: true
    },
    mutations: {
        getSelectTeacherNote(state, payload){
            state.selectTeacher = payload
        },
        getDataCourseTeacher(state) {
            //Data de Cursos
            state.course.headers = [
                { text: "id", value: "id", sortable: false, align: "left" },
                { text: "Nombre", value: "name" },
                { text: "Creditaje", value: "credit" }
            ];
            state.course.items = [
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
            ];
        },
        getSelectCourseTeacher(state, payload) {
            state.selectCourseTeacher = payload
        },
        getDataStudentTeacher(state){
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
        getSelectStudentTeacher(state, payload){
            state.selectStudentTeacher = payload
        },
        getDataNoteTeacher(state){
            state.note.headers = [
                {text:'id', value:'id', sortable:false, align:'left'},
                {text:'Calificacion', value:'calification'},
                {text:'Numero', value:'number'}
            ],
            state.note.items = [
                {id:1,calification: 'AD', number: 20},
                {id:2,calification: 'AD', number: 19},
                {id:3,calification: 'AD', number: 18},
                {id:4,calification: 'AD', number: 17},
                {id:5,calification: 'A', number: 16},
                {id:6,calification: 'A', number: 15},
                {id:7,calification: 'A', number: 14},
                {id:8,calification: 'A', number: 13},
            ]
        },
        getselectNoteTeacher(state, payload){
            state.selectNoteTeacher = payload
        },
        getDataNote(state){
            state.headers = [
                {text:'id', value:'id', sortable:false, align:'left'},
                {text:'Nombre del Docente', value:'teacher'},
                {text:'Curso', value:'course'},
                {text:'Nombre del Alumno', value:'student'},
                {text:'Calificacion', value:'calification'},
                {text:'Numero', value:'number'},
                {text:'Botones de Accion', value:'btnAction'}
            ]
        },
        getNew(state){
            for (let index = 0; index < state.selectStudentTeacher.length; index++) {
                let data = {
                    id: state.items.length +1 ,
                    teacher: state.selectTeacher[0].lastName + ', ' + state.selectTeacher[0].name,
                    course: state.selectCourseTeacher[0].name,
                    student: state.selectStudentTeacher[index].lastName + ', '+ state.selectStudentTeacher[index].name,
                    calification: state.selectNoteTeacher[0].calification,
                    number: state.selectNoteTeacher[0].number
                }
                state.items.push(data)
            }
        },
        getEdit(state, payload){
            state.index = state.items.indexOf(payload)
            state.item = Object.assign({}, payload)
            state.stateRegister = false
        },
        getUpdate(state,payload){
            if(state.index > -1){
                Object.assign(state.items[state.index], payload)
                this.clean
            }
        },
        closeEdit(state){
            state.stateRegister = true
            this.clean
        },
        clean(){
            this.item = ''
        }
    }
};
