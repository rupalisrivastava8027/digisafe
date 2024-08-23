const sql = require("mssql");

// config for your database
const config = {
    server: 'DESKTOP-KEHDVR5\MSSQLSERVER01', 
    database: 'Credentials' 
};

// connect to your database
sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    const request = new sql.Request();
    
});