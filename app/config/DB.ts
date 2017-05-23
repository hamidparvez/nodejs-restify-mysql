import * as mysql from 'mysql'

export default class DB{
    conn=   mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'root',
            database : '5starbd'
        });
    public getConnection(){
        return this.conn;
    }
}