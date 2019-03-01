var base = require('airtable').base('appWzk1gP2uHbIvV3');


base('Table 1').select().eachPage(
    function page(records){
        records.forEach(function(record){
            return (record.get('Matricula') + " Fetched");
        });
    },
    function done(err){
        console.error(err);
        return;
    }
);

