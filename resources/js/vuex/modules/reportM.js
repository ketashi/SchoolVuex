import data from './reportMonth.json'
export default {
    namespaced:true,
    state:{
        apoderado:[],
        itemsApoderado:[],
        selectApoderado:[],
        student:[],
        itemsStudent:[],
        selectStudent:[],
        items:[],
        headers:[]

    },
    mutations:{
        getDataApoderadoHeaders(state){
            state.apoderado.headers = [
                { text: "id", value: "id", sortable: false, align: "left" },
                { text: "Apoderados", value: "apoderado" }
            ];
            //obtener valores
            let getApoderado = [...new Set(data.map(item => item.apoderado))];
            let datos = {};
            getApoderado.map(item => {
                datos = {
                    id: state.itemsApoderado.length + 1,
                    apoderado: item
                };
                state.itemsApoderado.push(datos);
            });
        },
        getSelectApoderadoReport(state,payload){
            state.selectApoderado = payload
        },
        getDataStudentHeaders(state){
            state.student.headers = [
                { text: "id", value: "id", sortable: false, align: "left" },
                { text: "Estudiantes", value: "student" }
            ];
        },
        getDataStudent(state){
            //obtner datos cursos por profesor
            let getStudent = data.filter(item => {
                return item.apoderado === state.selectApoderado[0].apoderado;
            });
            //eiminando cursos iguales
            let getStudentUnico = [... new Set(getStudent.map(item => item.student))]
            //asignando dato al estado de itemsCourse
            let datos = {};
            getStudentUnico.map(item => {
                datos = {
                    id: state.itemsStudent.length + 1,
                    student: item
                };
                state.itemsStudent.push(datos);
            });
        },
        getSelectStudentReport(state,payload){
            state.selectStudent = payload
        },
        getDataMensualidadHeader(state){
            state.headers = [
                {text:'id', value:'id', sortable:false, align:'left'},
                {text:'Apoderados', value:'apoderado'},
                {text:'Estudiantes', value:'student'},
                {text:'Monto', value:'dinner'},
                {text:'Condicion', value:'category'},
                {text:'Fecha', value:'date'}
            ]
        },
        getDataMensualidad(state){
            //obtener los datos con apoderado y estudiante
            let getMensualidad = data.filter(item => {
                return item.apoderado === state.selectApoderado[0].apoderado && item.student === state.selectStudent[0].student
             })
             //asignar reporte de mensualidad
             let datos = {}
             getMensualidad.map(item =>{
                 datos = {
                     id: state.items.length + 1,
                     apoderado: item.apoderado,
                     student: item.student,
                     dinner: item.dinner,
                     category: item.category,
                     section: item.section,
                     date: item.date
                 }
                 state.items.push(datos)
             })
        },
        cleanStudent(state){
            state.itemsStudent = []
        },
        cleanMensualidad(state){
            state.items = []
        },
    }
}