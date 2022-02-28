import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'quesadadiaz18@gmail.com',
    pass: 'wdrsiwvlthxehfao',
  }
});

const sendMail = async(text, email) => {

  const mailOptions = {
    from: 'quesadadiaz18@gmail.com',
    to: email,
    subject: 'Correo de prueba para MonoLegal SAS, usando Api NodeJs',
    text,
  };

  let response = null;

  try {
    response = await transporter.sendMail(mailOptions).then((response) => response);
  } catch (e) {
    console.log("Ocurrio un error enviando el correo => ", e)
  }

  return response;
}

export default sendMail;
