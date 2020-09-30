import VueRouter from "vue-router";

const Home = { template: '<div>Strona główna</div>' };
const About = { template: '<div>Strona o nas</div>' };
const Contact = { template: '<div>Strona kontakt</div>' };

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/contact",
      component: Contact
    }
  ]
});

export default router;
