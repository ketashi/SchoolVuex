import data from "./reportNota.json";
export default {
    namespaced: true,
    state: {
        teacher: [],
        selectTeacher: [],
        itemsTeacher: [],
        course: [],
        itemsCourse: [],
        selectCourse: [],
        headers:[],
        items:[]
    },
    mutations: {
        getDataTeacher(state) {
            state.teacher.headers = [
                { text: "id", value: "id", sortable: false, align: "left" },
                { text: "Docentes", value: "teacher" }
            ];
            //obtener valores
            let getTeacher = [...new Set(data.map(item => item.teacher))];
            let datos = {};
            getTeacher.map(item => {
                datos = {
                    id: state.itemsTeacher.length + 1,
                    teacher: item
                };
                state.itemsTeacher.push(datos);
            });
        },
        getSelectReportTeacher(state, payload) {
            state.selectTeacher = payload;
        },
        getDataCourseHeaders(state) {
            state.course.headers = [
                { text: "id", value: "id", sortable: false, align: "left" },
                { text: "Cursos", value: "course" }
            ];
        },
        getDataCourse(state) {
            //obtner datos cursos por profesor
            let getCourse = data.filter(item => {
                return item.teacher === state.selectTeacher[0].teacher;
            });
            //eiminando cursos iguales
            let getCourseUnico = [... new Set(getCourse.map(item => item.course))]
            //asignando dato al estado de itemsCourse
            let datos = {};
            getCourseUnico.map(item => {
                datos = {
                    id: state.itemsCourse.length + 1,
                    course: item
                };
                state.itemsCourse.push(datos);
            });
        },

        getSelectReportCourse(state, payload) {
            state.selectCourse = payload
        },
        getDataReportNote(state){
            state.headers = [
                {text:'id', value:'id', sortable:false, align:'left'},
                {text:'Docentes', value:'teacher'},
                {text:'Cursos', value:'course'},
                {text:'Estudiantes', value:'student'},
                {text:'Categorias', value:'category'},
                {text:'Grados', value:'grade'},
                {text:'Secciones', value:'section'},
                {text:'Calificaciones', value:'calification'},
                {text:'Numero', value:'number'},
                {text:'Turnos', value:'turno'},
                {text:'Creditos', value:'credit'}
            ]
        },
        getDataNotes(state){
            //obtener los datos con profesor y curso
            let getNotas = data.filter(item => {
               return item.teacher === state.selectTeacher[0].teacher && item.course === state.selectCourse[0].course
            })
            //asignar reporte de notas
            let datos = {}
            getNotas.map(item =>{
                datos = {
                    id: state.items.length + 1,
                    teacher: item.teacher,
                    course: item.course,
                    student: item.student,
                    category: item.category,
                    grade: item.grade,
                    section: item.section,
                    calification: item.calification,
                    number: item.number,
                    turno: item.turno,
                    credit: item.credit
                }
                state.items.push(datos)
            })
        },
        cleanCourse(state){
            state.itemsCourse = []
        },
        cleanNota(state){
            state.items = []
        }
    }
};
