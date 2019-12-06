export default {
    namespaced: true,
    state:{
        data:[{
            calification:'',
            number:''
        }],
        califications:[],
        headers:[],
        items:[],
        stateRegister: true,
        index: null
    },
    mutations:{
        getData(state){
            state.califications = ['AD','A','B','C','D']
        },
        getDataTable(state){
            state.headers = [
                {text: 'id', value:'id', sortable: false, align: 'left'},
                {text:'Calificacion', value:'calification'},
                {text:'Numero', value: 'number'},
                {text:'Botones de Acciones', value:'btnAction', sortable:false, align:'center'}
            ]
        },
        getNew(state,payload){
            for (let index = payload.numbers[0]-1; index < payload.numbers[1]; index++) {
                const data = {
                    id: state.items.length + 1,
                    calification: payload.calification,
                    number: index + 1
                }
                state.items.push(data)
                this.clean
            }
        },
        getUpdate(state, payload){
            if(state.index > -1){
                Object.assign(state.items[state.index], payload)
                this.clean
            }
        },
        closeEdit(state){
            state.stateRegister = true
        },
        getEdit(state,payload){
            state.index = state.items.indexOf(payload)
            state.data = Object.assign({}, payload)
            state.stateRegister = false
        },
        clean(state){
            state.data= [{calification:'', number: ''}]
        }
    }
}