import {Router} from 'express'
import {getTransactionbyId,postTransactionbyId} from './../controllers/transaction.controller.js'

const router = Router();

router.get('/transactions/:id',getTransactionbyId);
router.post('/transactions/:id',postTransactionbyId);
router.get('/transactions/details/:id',);

export default router