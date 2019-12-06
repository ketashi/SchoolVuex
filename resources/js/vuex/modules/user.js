
export default {
    namespaced: true,
    state: {
        title: "Lista de Alumnos",
        headers: [],
        items: [],
        formRegister: true,
        data:[{
            name:'',
            lastName:'',
            email:'',
            address:'',
            telephone:'',
            rol:'',
            password:''
        }],
        index: null
    },
    mutations: {
        getData(state) {
            state.title = "Lista de Alumnos";
            state.headers = [
                {
                    text: "id",
                    value: "id",
                    sortable: false,
                    align: "left"
                },
                {
                    text: "Nombre",
                    value: "name"
                },
                {
                    text: "Apellidos",
                    value: "lastName"
                },
                {
                    text: "Email",
                    value: "email"
                },
                {
                    text: "Direccion",
                    value: "address"
                },
                {
                    text: "Telefono",
                    value: "telephone"
                },
                {
                    text: "Constraseña",
                    value: "password"
                },
                {
                    text: "Rol",
                    value: "rol"
                },
                {
                    text: "btnAction",
                    value: "btnAction",
                    sortable: false
                }
            ];
            state.items = [
                {
                    id: 1,
                    name: "Izzy",
                    lastName: "Whyborn",
                    email: "iwhyborn0@simplemachines.org",
                    address: "4 John Wall Drive",
                    telephone: "272 205 3179",
                    password: "mMaUUmS",
                    rol: "admin"
                },
                {
                    id: 2,
                    name: "Patric",
                    lastName: "Demcak",
                    email: "pdemcak1@oracle.com",
                    address: "88554 Mosinee Avenue",
                    telephone: "664 752 8629",
                    password: "bwljTA7gQP",
                    rol: "estudiante"
                },
                {
                    id: 3,
                    name: "Kendal",
                    lastName: "Hairyes",
                    email: "khairyes2@netlog.com",
                    address: "01702 Bay Pass",
                    telephone: "693 289 8574",
                    password: "lEuNQu",
                    rol: "estudiante"
                },
                {
                    id: 4,
                    name: "Elysha",
                    lastName: "Cuzen",
                    email: "ecuzen3@netlog.com",
                    address: "66 Buhler Avenue",
                    telephone: "221 531 8322",
                    password: "G8nK2ptE",
                    rol: "estudiante"
                },
                {
                    id: 5,
                    name: "Reggis",
                    lastName: "Raffles",
                    email: "rraffles4@gov.uk",
                    address: "08454 5th Terrace",
                    telephone: "753 291 9151",
                    password: "9RM72EnIh",
                    rol: "estudiante"
                },
                {
                    id: 6,
                    name: "Cyndy",
                    lastName: "Duiged",
                    email: "cduiged5@hc360.com",
                    address: "68103 Park Meadow Avenue",
                    telephone: "119 886 6541",
                    password: "DhurGuRMV1CG",
                    rol: "profesor"
                },
                {
                    id: 7,
                    name: "Flem",
                    lastName: "Luckhurst",
                    email: "fluckhurst6@wikispaces.com",
                    address: "8379 Armistice Park",
                    telephone: "516 299 7971",
                    password: "C3cKJn",
                    rol: "profesor"
                },
                {
                    id: 8,
                    name: "Isa",
                    lastName: "Geraldi",
                    email: "igeraldi7@blogs.com",
                    address: "215 Eliot Terrace",
                    telephone: "666 305 3123",
                    password: "wbrEsZ9OOfaI",
                    rol: "profesor"
                },
                {
                    id: 9,
                    name: "Cecily",
                    lastName: "Concannon",
                    email: "cconcannon8@mapy.cz",
                    address: "3 Artisan Point",
                    telephone: "707 130 1057",
                    password: "zJAEUS",
                    rol: "profesor"
                },
                {
                    id: 10,
                    name: "Haskel",
                    lastName: "Cayley",
                    email: "hcayley9@bluehost.com",
                    address: "721 Towne Court",
                    telephone: "586 326 9697",
                    password: "ByA8pr6z5",
                    rol: "apoderado"
                },
                {
                    id: 11,
                    name: "Ezri",
                    lastName: "Wildash",
                    email: "ewildasha@flickr.com",
                    address: "52184 Lake View Lane",
                    telephone: "765 899 9297",
                    password: "u7luKNfZq",
                    rol: "apoderado"
                },
                {
                    id: 12,
                    name: "Taffy",
                    lastName: "Yglesia",
                    email: "tyglesiab@nationalgeographic.com",
                    address: "281 Anhalt Road",
                    telephone: "362 605 2610",
                    password: "ojzUKG1",
                    rol: "apoderado"
                },
                {
                    id: 13,
                    name: "Nahum",
                    lastName: "Dicke",
                    email: "ndickec@fastcompany.com",
                    address: "40 Myrtle Junction",
                    telephone: "530 874 3640",
                    password: "13XZftwy7",
                    rol: "apoderado"
                },
                {
                    id: 14,
                    name: "Sammie",
                    lastName: "Reaman",
                    email: "sreamand@dot.gov",
                    address: "74 Sugar Point",
                    telephone: "205 390 9234",
                    password: "Jk8oLdOY",
                    rol: "apoderado"
                },
                {
                    id: 15,
                    name: "Melosa",
                    lastName: "O'Hoolahan",
                    email: "mohoolahane@prlog.org",
                    address: "805 Washington Center",
                    telephone: "780 818 4849",
                    password: "8XniWUK2x",
                    rol: "apoderado"
                },
                {
                    id: 16,
                    name: "Gaspard",
                    lastName: "Esposito",
                    email: "gespositof@mapquest.com",
                    address: "23562 Mariners Cove Way",
                    telephone: "319 998 2957",
                    password: "xfDmFXE5M",
                    rol: "apoderado"
                },
                {
                    id: 17,
                    name: "Ashbey",
                    lastName: "Leavry",
                    email: "aleavryg@theglobeandmail.com",
                    address: "15471 Golden Leaf Terrace",
                    telephone: "244 880 6071",
                    password: "qgINB9P4DjFc",
                    rol: "estudiante"
                },
                {
                    id: 18,
                    name: "Kellia",
                    lastName: "Marcham",
                    email: "kmarchamh@edublogs.org",
                    address: "4523 Carberry Crossing",
                    telephone: "364 660 3053",
                    password: "VA5piok",
                    rol: "estudiante"
                },
                {
                    id: 19,
                    name: "Fred",
                    lastName: "Sydney",
                    email: "fsydneyi@e-recht24.de",
                    address: "38 Kennedy Terrace",
                    telephone: "243 257 8406",
                    password: "1lYRzu",
                    rol: "estudiante"
                },
                {
                    id: 20,
                    name: "Brandie",
                    lastName: "Lorkings",
                    email: "blorkingsj@networkadvertising.org",
                    address: "6330 Morrow Lane",
                    telephone: "827 839 5837",
                    password: "phzgqCA6UK",
                    rol: "estudiante"
                }
            ];
        },
        getEdit(state,payload){
            state.index = state.items.indexOf(payload)
            state.data = Object.assign({}, payload)
            state.formRegister = false

        },
        cancelEdit(state){
            state.formRegister = true
            this.delete
        },
        getCreate(state,payload){
            state.items.id = state.items.length + 1
            state.items.push(payload)
        },
        getUpdate(state,payload){
            if(state.index > -1){
                Object.assign(state.items[state.index], payload)
                this.delete
            }
        },
        delete(){
            state.data.name = "";
            state.data.email = "";
            state.data.lastName = "";
            state.data.address = "";
            state.data.telephone = "";
            state.data.rol = null;
            state.data.password = "";
        }
    },

};
