import * as restify from 'restify';
import TestController from '../controllers/TestController'

function router(api:restify.Server) { 
  var control=new TestController();
  api.get('/api/v1/ping',control.get);
  api.get('/api/v1/pings',function(req:restify.Request,res:restify.Response){
    res.json(200,"Pongs");
  })
}
module.exports.routes = router;