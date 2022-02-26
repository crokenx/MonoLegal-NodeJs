import response from "express";
import validator from "express-validator";

const { validationResult } = validator;

const validarCampos = (req, res = response, next ) => {

    const errores = validationResult( req );

    if ( !errores.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    next();
}

export default validarCampos;
