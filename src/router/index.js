import Router from 'vue-router';
import Initial from '../components/Initial.vue';
import Alunos from '../components/Alunos.vue';
import Professores from '../components/Professores.vue';
import Boletos from '../components/Boletos.vue';
import Relatorios from '../components/Relatorios.vue';
import Turmas from '../components/Turmas.vue';

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/initial', component: Initial },
    { path: '/alunos', component: Alunos },
    { path: '/professores', component: Professores },
    { path: '/turmas', component: Turmas },
    { path: '/boletos', component: Boletos },
    { path: '/relatorios', component: Relatorios },
    { path: '/', redirect: '/initial' }
  ]
});
