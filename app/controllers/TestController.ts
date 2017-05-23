import {Request,Response} from 'restify'
import DB from '../config/DB'
export default class TestController{
    db:any;
    get(req:Request,res:Response,next:any){
        let connection=new DB();
        this.db=connection.getConnection();
        this.db.connect();
        this.db.query('SELECT * FROM `admin`', function (error:any, results:any, fields:any) {
            if (error) throw error;
                console.log('The solution is: ', results);
        });
        res.json(200,'Pong');
    }
}

