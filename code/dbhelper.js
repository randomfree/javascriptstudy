var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});

connection.connect();

connection.query('select * from test_table',function(error,results,fields) {
    if (error) throw error;
    console.log(results);

    

    
});
