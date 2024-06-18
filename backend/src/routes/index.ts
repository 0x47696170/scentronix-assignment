import express from 'express';
const router = express.Router();

import proxyController from "../controllers/proxy.controller";

router.get('/', (req, res) => res.json({ message: 'Acentronix Service API' }));

router.get('/proxy', proxyController.findServer);

export default router;