import Vue from 'vue'
import Vuex from 'vuex'

import contacto from './modules/contacto'
import user from './modules/user'
import course from './modules/course'
import grade from './modules/grade'
import calification from './modules/calification'
import asignateC from './modules/asignateC'
import asignateN from './modules/asignateN'
import asignateA from './modules/asignateA'
import asignateM from './modules/asignateM'
import reportN from './modules/reportN'
import reportM from './modules/reportM'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        contacto,
        user,
        course,
        grade,
        calification,
        asignateC,
        asignateN,
        asignateA,
        asignateM,
        reportN,
        reportM
    }
})