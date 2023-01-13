import express, { Request, Response } from 'express';
import { body, query, validationResult } from 'express-validator';
import mongoose, { Mongoose } from 'mongoose';
import cDocument from '../services/document';

const router = express.Router();

router.get('/list', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array(),
      data: null,
    });
  }

  try {
    const Document = new cDocument();
    const documentResponse = await Document.Find();
    if (!documentResponse) {
      return res.status(400).json({
        success: false,
        message: 'Document is not existed',
        data: null,
      });
    }

    return res.json({
      success: true,
      message: 'Success',
      data: documentResponse,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error,
      data: [],
    });
  }
});

router.post('/create', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array(),
      data: null,
    });
  }
  const Document = new cDocument();
  const dataCreate = { ...req.body, status: 1 };
  const response = await Document.Create(dataCreate);
  if (response) {
    return res.json({
      success: true,
      message: 'Success',
      data: response,
    });
  }
});

export default router;
