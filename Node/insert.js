var base = require('airtable').base('appWzk1gP2uHbIvV3');

base('Table 1').select().eachPage(
    function page(records){
        records.forEach(function(record){
            if record.get('Matricula') == "A01636160"
                console.log(record.get('Nombre'));
        });
    },
    function done(err){
        console.error(err);
        return;
    }
);