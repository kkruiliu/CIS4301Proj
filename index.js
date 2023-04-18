const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function fun() {
    let con;

    try {
        oracledb.initOracleClient({libDir: 'C:\\Users\\jonma\\Downloads\\instantclient_21_9'});

        con = await oracledb.getConnection( {
            user            : "maingotj",
            password        : "u6YTCbyTwmfJ0vMH3WClZDWh",
            connectString   : "oracle.cise.ufl.edu/orcl"
        });

        const data = await con.execute(
            'SELECT * FROM CONTINENT',
        );

    console.log(data.rows);

    con.close();

    } catch(err) {
        console.error(err);
    }
}
fun();