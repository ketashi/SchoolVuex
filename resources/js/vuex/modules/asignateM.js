export default{
    namespaced: true,
    state:{
        selectApoderado:[],
        student:[],
        selectStudent:[],
        selectMatricula:[],
        stateMatricula: false,
        items:[],
        headers:[],
        item:[],
        index: null,
        stateRegister: true
    },
    mutations:{
        getSelectMatriculaApoderado(state, payload){
            state.selectApoderado = payload
        },
        getDataMatriculaStudent(state){
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
        getSelectMatriculaStudent(state, payload){
            state.selectStudent = payload
        },
        getSelectMatricula(state,payload){
            state.selectMatricula = payload
            if(payload.dinner === "" || payload.dinner === null || payload.category === "" || payload.date === "" ){
                state.stateMatricula = false
            }else{
                state.stateMatricula = true
            }
        },
        getDataMatricula(state){
            state.headers = [
                {text:'id', value:'id', sortable:false, align:'left'},
                {text:'Apoderados', value:'apoderado'},
                {text:'Estudiantes', value:'student'},
                {text:'Monto', value:'dinner'},
                {text:'Condicion', value:'category'},
                {text:'Fecha', value:'date'},
                {text:'Botones de Accion', value: 'btnAction', sortable:false, align:'center'}
            ]
        },
        getNew(state){
            for (let index = 0; index < state.selectStudent.length; index++) {
                let data = {
                    id: state.items.length +1 ,
                    apoderado: state.selectApoderado[0].lastName + ', ' + state.selectApoderado[0].name,
                    student: state.selectStudent[index].lastName + ', '+ state.selectStudent[index].name,
                    dinner: state.selectMatricula.dinner,
                    category: state.selectMatricula.category,
                    date: state.selectMatricula.date,
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
        getUpdate(state, payload){
            if(state.index > -1){
                Object.assign(state.items[state.index], payload)
            }else{
                console.log('no se registro')
            }
        },
        clean(state){
            state.item= ''
        }
    }
}