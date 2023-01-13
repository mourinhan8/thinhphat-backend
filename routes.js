import express from 'express';
const router = express.Router();

import documentController from './controllers/document';

router.use('/document', documentController);

export default router;
