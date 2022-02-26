
import mongoose from 'mongoose';

async function connectMongodb() {
  await mongoose.connect('mongodb://localhost:27017/MonoLegal');
};

connectMongodb().catch(err => console.log(err));

const connection = mongoose.connection;

connection.on('connected',  () => {
	console.log("database connected");
});

connection.on('disconnected', () => {
  console.log("database disconnected");
});

connection.on('error', () => {
  console.log("something went wrong");
});

export default mongoose;
