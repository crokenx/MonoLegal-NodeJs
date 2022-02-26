import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
	CódigoFactura: String,
	Cliente: String,
	Ciudad: String,
	NIT: String,
	TotalFactura: Number,
	SubTotal: Number,
	Iva: Number,
	Retencion: Number,
	FechaCreacion: String,
	Estado: String,
	Pagada: Boolean,
	email: String,
}, { collection: 'MonoLegalCollection' });

const bill = mongoose.model('bill', billSchema);

export default bill;
