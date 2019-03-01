var base = require('airtable').base('appWzk1gP2uHbIvV3');

function retrieveNameFromMatricula(table, matricula){
    base(table).select().eachPage(
        function page(records){
            records.forEach(function(record){
                if (record.get('Matricula') === matricula){
                    console.log(record.fields.asistencia);
                }
            });
        },

        function done(err){
            console.error(err);
            return 1;
        }
    );
}

base('Table 1').update(
    forEach(function(record){
        return record.id;
    }),
    {"Asistencia": true}
)


asistenciaTodos('Table 1');
retrieveNameFromMatricula('Table 1', 'A01636160');