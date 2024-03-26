 import { Router } from "./router.js";

 const route = new Router()

route.add('/', './pages/home.html')
route.add('/universe', './pages/universe.html')
route.add('/explorer', './pages/explorer.html')
route.add(404, './pages/404.html')

 route.handle()

 window.onclick = (event) => route.route()
 window.onpopstate = () => route.handle()