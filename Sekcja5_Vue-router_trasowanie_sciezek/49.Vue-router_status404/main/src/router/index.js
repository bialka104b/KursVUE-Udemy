import VueRouter from "vue-router";

const Home = { template: "<div>Strona główna</div>" };
const About = { template: "<div>Strona o nas</div>" };
const Contact = { template: "<div>Strona kontakt</div>" };
const UserGeneral = {
  template: "<div> User General - informacje o uzytkowniku <router-view/></div>"
};
const User1 = {
  template: "<div>Uzytkownik o ID {{$route.params.userId}}</div>"
}; // w ten sposób przekazujemy id ze ścieżki do komponentu
// uruchomienie apki pod tym adresem pokaże ID  http://localhost:8080/uzytkownik/1234
const User2 = {
  //w ten sposób pobieramy z właściwości naszego komponentu za pomoca props
  props: ["userId"],
  template: "<div>User o ID {{userId}}</div>"
};
const BrakStrony = {//wyświetli sie wtedy gdy użytkownik wpisze nie istniejącą ścieżke
  template: "<div>Nie znaleziono strony</div>"
}

const router = new VueRouter({
  mode: "history", //spowoduje usunięcie hasha w ścieżce
  routes: [
    { path: "/",
      component: Home,
      meta: { tytul: 'Strona glowna' }
    },
    { path: "/about",   
      name: "about", //połączone z App.vue wstawiony obiekt {name:"about"}
      component: About, 
      meta: { tytul: "O nas"} 
    },
    { path: "/kontakt", // na tą ściezke będzie przekierowanie ze ściezki contact
      redirect: "/contact" 
    },
    //gdy ktoś wpisze http://localhost:8080/kontakt zostanie przekierowany na http://localhost:8080/contact
    //możemy też określić alias w poniższej lini zamiast przekierowania, róźnica polega na tym że w ścieżke nie zostanie podmieniona nazwa tylko zostanie taka jaką podał uzytkownik
    { path: "/contact", 
      alias:'/kontakt', 
      component: Contact 
    },
    {
      path: "/usersGeneral", //http://localhost:8080/usersGeneral
      component: UserGeneral,
      children: [//dziecko tej ścieżki
        {
          path: "profile/:userId", //http://localhost:8080/usersGeneral/profile/1234
          component: User2,
          props: true
        }
      ]
    },
    {
      // w ten sposób przekazujemy id ze ścieżki do komponentu
      path: "/uzytkownik/:userId",
      component: User1
    },
    {
      //w ten sposób pobieramy z właściwości naszego komponentu za pomoca props
      path: "/user/:userId",
      component: User2,
      props: true
    },
    {//tą ścieżke dodajemy jako ostatnią aby zabezpieczyć sie przed wpisaniem nie istniejącej ścieżki przez uzytkownika w przeglądarce
      path: '*',//gwiazdka oznacza wszystkie pozostałe ścieżki które nie zostały wcześniej dopasowane
      component: BrakStrony
    }
  ]
});

// router.beforeEach((to, from, next)=> {

// })

// (to)=> gdzie chcemy być przekierowani
router.afterEach((to)=>{//powoduje to aktualizacje tagu title w head
  document.title = to.meta.tytul
})

export default router;
