import express from "express";
import { getTiendas, createTiendas  } from '../controllers/tiendas.js'

const router = express.Router();

router.get('/', getTiendas);
router.post('/create', createTiendas);

export default router;