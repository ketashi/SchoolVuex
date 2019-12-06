
require('./bootstrap');

window.Vue = require('vue');

import vuetify from './vuetify/index'
import store from './vuex/store'
import router from './routers/index'

/*--------- Home -----------*/
    // import component views home
Vue.component('corousel-component', require('./components/home/corouselComponent.vue').default);
Vue.component('nosotros-component', require('./components/home/nosotrosComponent.vue').default);
Vue.component('profesor-component', require('./components/home/profesorComponent.vue').default);
Vue.component('contacto-component', require('./components/home/contactoComponent.vue').default);
Vue.component('app-component', require('./views/app.vue').default)

/*--------- End-Home -----------*/

/*--------- Dasboard -----------*/
Vue.component('dashboard-component', require('./views/dasboard.vue').default)
        // dashboard admin
Vue.component('admin-index-component', require('./components/dasboard/subcomponents/dasboard/adminIndex.vue').default)
Vue.component('admin-report-component', require('./components/dasboard/subcomponents/dasboard/adminIndexReport.vue').default)
        //register User
Vue.component('admin-register', require('./components/dasboard/subcomponents/user/adminRegistro.vue').default)
Vue.component('admin-table', require('./components/dasboard/subcomponents/user/adminTable.vue').default)
Vue.component('admin-edit', require('./components/dasboard/subcomponents/user/adminEdit.vue').default)
        //register course
Vue.component('admin-course-register', require('./components/dasboard/subcomponents/course/adminCourseRegister.vue').default)
Vue.component('admin-course-edit', require('./components/dasboard/subcomponents/course/adminCourseEdit.vue').default)
Vue.component('admin-course-table', require('./components/dasboard/subcomponents/course/adminCourseTable.vue').default)
        //register grade        
Vue.component('admin-grade-register', require('./components/dasboard/subcomponents/grade/adminGradeRegiter.vue').default)
Vue.component('admin-grade-edit', require('./components/dasboard/subcomponents/grade/adminGradeEdit.vue').default)
Vue.component('admin-grade-table', require('./components/dasboard/subcomponents/grade/adminGradeTable.vue').default)
        //register calification
Vue.component('admin-calification-register', require('./components/dasboard/subcomponents/calification/adminCalificationRegister.vue').default)
Vue.component('admin-calification-edit', require('./components/dasboard/subcomponents/calification/adminCalificationEdit.vue').default)
Vue.component('admin-calification-table', require('./components/dasboard/subcomponents/calification/adminCalificationTable.vue').default)
        //register asignate of course
Vue.component('admin-asignate-course-register', require('./components/dasboard/subcomponents/asignateCourse/adminAsignateCourseRegister.vue').default)
Vue.component('get-data-student', require('./components/dasboard/subcomponents/asignateCourse/components/SelectUser.vue').default)
Vue.component('get-data-teacher', require('./components/dasboard/subcomponents/asignateCourse/components/SelectTeacher.vue').default)
Vue.component('get-data-course', require('./components/dasboard/subcomponents/asignateCourse/components/SelectCourse.vue').default)
Vue.component('get-data-grade', require('./components/dasboard/subcomponents/asignateCourse/components/SelectGrade.vue').default)
Vue.component('admin-asignate-course-table', require('./components/dasboard/subcomponents/asignateCourse/adminAsignateCourseTable').default)
Vue.component('admin-asignate-course-edit', require('./components/dasboard/subcomponents/asignateCourse/adminAsignateCourseEdit.vue').default)
        //register asignate of note
Vue.component('admin-asignate-note-register', require('./components/dasboard/subcomponents/asignateNote/adminAsignteNoteRegister.vue').default)
Vue.component('get-data-course-teacher', require('./components/dasboard/subcomponents/asignateNote/components/selectCourseTeacher.vue').default)
Vue.component('get-data-student-teacher', require('./components/dasboard/subcomponents/asignateNote/components/selectStudentTeacher.vue').default)
Vue.component('get-data-note-teacher', require('./components/dasboard/subcomponents/asignateNote/components/selectNotaTeacher.vue').default)
Vue.component('admin-asignate-note-table', require('./components/dasboard/subcomponents/asignateNote/adminAsignateNoteTable.vue').default)
Vue.component('admin-asignate-note-edit', require('./components/dasboard/subcomponents/asignateNote/adminAsignateNoteEdit.vue').default)
        //register asignate of Apoderado
Vue.component('admin-asignate-apoderado-register', require('./components/dasboard/subcomponents/asignateApoderado/adminAsignateAporderaRegister.vue').default)
Vue.component('get-data-apoderado',require('./components/dasboard/subcomponents/asignateApoderado/components/selectApoderado.vue').default)
Vue.component('admin-asignate-apoderado-table', require('./components/dasboard/subcomponents/asignateApoderado/adminAsignateApoderadoTable.vue').default)
Vue.component('admin-asignate-apoderado-edit', require('./components/dasboard/subcomponents/asignateApoderado/adminAsignateApoderadoEdit.vue').default)
        //register asignate of Enrrollment
Vue.component('admin-asignate-matricula-register', require('./components/dasboard/subcomponents/asignateMatricula/adminAsignateMatriculaRegister.vue').default)
Vue.component('get-data-matricula-student', require('./components/dasboard/subcomponents/asignateMatricula/components/selectMatriculaStudent.vue').default)
Vue.component('get-data-matricula', require('./components/dasboard/subcomponents/asignateMatricula/components/selectMatricula.vue').default)
Vue.component('admin-asignate-matricula-table', require('./components/dasboard/subcomponents/asignateMatricula/adminAsignateMatriculatable.vue').default)
Vue.component('admin-asignate-matricula-edit', require('./components/dasboard/subcomponents/asignateMatricula/adminAsignateMatriculaEdit.vue').default)
        //register report of note
Vue.component('admin-report-note-register', require('./components/dasboard/subcomponents/reportNote/adminReportNoteRegister.vue').default)
Vue.component('get-data-report-teacher', require('./components/dasboard/subcomponents/reportNote/components/selectTeacherReport.vue').default)
Vue.component('get-data-report-course', require('./components/dasboard/subcomponents/reportNote/components/selectCourseReport.vue').default)
Vue.component('get-data-report-table', require('./components/dasboard/subcomponents/reportNote/components/selectReportTable.vue').default)
        //reigster report of mensualidad
Vue.component('admin-report-mensualidad-register', require('./components/dasboard/subcomponents/reportMensualidad/adminReportMensualidadRegister.vue').default)
Vue.component('get-data-report-apoderado', require('./components/dasboard/subcomponents/reportMensualidad/components/selectApoderadoReport.vue').default)
Vue.component('get-data-report-student', require('./components/dasboard/subcomponents/reportMensualidad/components/selectStudentReport.vue').default)
Vue.component('get-data-mensualidad-table', require('./components/dasboard/subcomponents/reportMensualidad/components/selectMensualidadTable.vue').default)

        //dashboard admin chart
Vue.component('nota-chart', require('./components/dasboard/chart/nota.vue').default)
Vue.component('mensualidad-chart', require('./components/dasboard/chart/mensualidad.vue').default)
/*--------- EndDasboard -----------*/
const app = new Vue({
    vuetify,
    el: '#app',
    store,
    router
});
