import mysql from 'mysql2/promise';

export default async function obterConexao(){

    if(global.poolConexoes){
        return await global.poolConexoes.getConnection();
    }
    else
    {
        const poolConexoes = await mysql.createPool({
            host: '127.0.0.1',
            user: 'root',
            database: 'backendclinica',
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0
        });
        global.poolConexoes = poolConexoes;
        return await poolConexoes.getConnection();
    }


}