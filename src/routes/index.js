const express = require('express');
const personRouter = require('./personquiz.router');

function routerApi(app){
    const router = express.Router();
    /* Index para la api versión 1  
    Endpoint http://localhost:5000/api/version1 */
    app.use('/api/version1', router);
    /* Endpoint http://localhost:5000/api/version1/people 
    GET: Endpoint http://localhost:5000/api/version1/people 
    GET{:id}: Endpoint http://localhost:5000/api/version1/people/:personId
    POST: Endpoint http://localhost:5000/api/version1/people/person
    PUT: Endpoint http://localhost:5000/api/version1/people/:personId 
    DELETE: Endpoint http://localhost:5000/api/version1/people/:personId */
    router.use('/people', personRouter);
}

module.exports = routerApi;