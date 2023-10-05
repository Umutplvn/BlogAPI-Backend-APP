"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

//Catch Errors;

module.exports = (err, req, res, next)=>{
   
    const errorStatusCode=res.errorStatusCode ?? 500
    res.status(errorStatusCode).send({
        error:true,
        message:err.message,    //err parametresi
        cause:err.cause,     //err parametresi
        body: req.body  // sending json data
    })
}


















