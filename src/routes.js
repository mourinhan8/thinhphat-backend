import express from 'express';
const router = express.Router();

import documentController from './controllers/document';
import employeeController from './controllers/employee';

router.use('/document', documentController);
router.use('/employee', employeeController);

export default router;
