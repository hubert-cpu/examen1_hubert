import { Router } from 'express'
const router=Router();
import * as  readAlleditorial from '../controllers/editorial.controller';
router.get('/listar',readAlleditorial.readAlleditorial); 

export default router;