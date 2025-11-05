import {Router} from 'express';
import { userUnbanned } from './users.crontroller.js';



const router = Router();

router.post("/unban-expired",userUnbanned);

const authOperationRoute = router;
export default authOperationRoute;