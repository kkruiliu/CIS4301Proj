const oracledb = require('oracledb');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

oracledb.initOracleClient({libDir: 'C:\\Users\\jonma\\Downloads\\instantclient_21_9'});
app.use(cors());

app.get('/', (req,res) => {
    res.send('Hello World');
})
app.get('/data', (req,res) => {
    async function fun() {
        let con;

        try {
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
        return data;
        } catch(err) {
            console.error(err);
            return error;
        }
    }
    fun()
    .then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=> {
        res.send(err)
    })
})

app.listen(PORT,
    () => {
        console.log(`listen to port ${PORT}`);
    })

