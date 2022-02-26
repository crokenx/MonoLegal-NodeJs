import bill from '../models/billModel.js';
import sendMail from './mailer.js';

const getBills = async (req, res) => {
	const bills = await bill.find();	

	res.json({
		ok: true,
		bills,
	});
};

const changeBillStatus = async (req, res) => {

	const { _id } = req.body;
	const doc = await bill.findById(_id);
	const { Estado } = doc;
	const { email } = doc;
	const { TotalFactura } = doc;
	const text = `Se le informa que su deuda pasará a estado de mora si no cancela su respectivo valor de $ ${ TotalFactura }`;

	let response = null;
	let mailResponse = null;

	switch (Estado) {
		case "primerrecordatorio":

			mailResponse = await sendMail(text, email)
			if(mailResponse === null) break;
			doc.Estado = "segundorecordatorio";
			response = await doc.save();

			break;

		case "segundorecordatorio":

			mailResponse = await sendMail(text, email)
			doc.Estado = "desactivado";
			if(mailResponse === null) break;
			response = await doc.save();

			break;
	}

	res.json({
		ok: true,
		response,
	});
}

export { getBills, changeBillStatus };
