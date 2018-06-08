
/*   ***** Define the Routes***** */

const routes = [
	  { path: '/', component: Home},
	  { path: '/features', component: features },
	  { path: '/contact', component: contact},
	 /* { path: '/form1', component: form1}*/
	]

  const router = new VueRouter({
  	  routes // short for `routes: routes`
  	})




    const app = new Vue({
      el:"#app",
      data:{
        mes:"ddff"
      },
      router: new VueRouter({
        routes:[
        	  { path: '/', component: Home},
        	  { path: '/features', component: features },
        	  { path: '/contact', component: contact},
        	 /* { path: '/form1', component: form1}*/
        	]
      })
    })
