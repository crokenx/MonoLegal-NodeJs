import express from "express";
import validator from "express-validator";

import { changeBillStatus, getBills } from '../controllers/bills.js';
import validarCampos from "../middleware/validar-campos.js";

const { check } = validator;

const router = express.Router();

router.use(function timeLog(req, res, next) {
	console.log("Petition time: ", Date.now());
	next();
});

router.get('/bills', [], getBills);

router.put('/bills', [
	check('_id','El id de la factura es necesario').not().isEmpty(),
	validarCampos,
], changeBillStatus);

export default router;
