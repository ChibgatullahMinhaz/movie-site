import { Router } from "express";
import authOperationRoute from "../modules/Users/users.routes.js";

const router = Router();

const moduleRoutes = [
  {
    path: "/overview",
    route: authOperationRoute,
  },
  

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;