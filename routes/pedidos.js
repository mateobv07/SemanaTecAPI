import express from "express";
import { getPedidos, createPedidos } from '../controllers/pedidos.js'

const router = express.Router();

router.get('/', getPedidos);
router.post('/create', createPedidos);

export default router;