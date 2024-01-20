import { defineConfig } from 'umi';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'D2S Data Exchange',
  },
  routes: [
    {
      path: '/',
      redirect: '/Overview',
    },
    {
      name: 'Overview',
      path: '/overview',
      component: './Overview',
    },
    {
      name: 'Servers',
      path: '/servers',
      component: './Servers',
    },
    {
      name: 'Exchange Sessions',
      path: '/exchange-sessions',
      component: './ExchangeSessions',
    },
    {
      name: 'Mapping',
      path: '/mapping',
      component: './Mapping',
    },
   
  ],
  npmClient: 'yarn',
});
