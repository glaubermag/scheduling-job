//Caso houvesse o link da API, poderia ser obtido os dados com a função map
var Job = [{ "ID": 1, "Description": "Importação de arquivos de fundos", "MaxDate": "2019-11-10 08:00:00", "time": 2 }, { "ID": 2, "Description": "Importação de dados da Base Legada", "MaxDate": "2019-11-11 12:00:00", "time": 4 }, { "ID": 3, "Description": "Importação de dados de integração", "MaxDate": "2019-11-11 08:00:00", "time": 6 }]
    // Verificar no console se o array está sendo exibido corretamente
    // console.log(Job[0]);

// Checar se todas as datas estão dentro do intervalo esperado.
// Data inicio
const dateStart = new Date(' 2019-11-10 09:00:00');
// Data final
const dateEnd = new Date('2019-11-11 12:00:00');

for (i = 0; i < Job.length; i++) {
    var dateIndex = Job[i].MaxDate;
    console.log(Job[i].MaxDate)
    if (dateStart.getTime() <= new Date(Job[i].MaxDate).getTime() && dateEnd.getTime() >= new Date(Job[i].MaxDate).getTime()) {
        console.log('A data ', dateIndex, ' está contida dentro do período especificado');
    } else {
        console.log('A data ', Job[i].MaxDate, ' está fora do período especificado');
    }
}

console.log('Consultando array antes de ordenar');
console.log(Job[0].MaxDate, Job[0].ID);
console.log(Job[1].MaxDate, Job[1].ID);
console.log(Job[2].MaxDate, Job[2].ID);

//Ordenar array pela data
Job.sort(function(a, b) {
    var dateA = new Date(a.MaxDate),
        dateB = new Date(b.MaxDate);
    return dateA - dateB;
});
console.log('Consultando array depois de ordenar');
console.log(Job[0].MaxDate, Job[0].ID);
console.log(Job[1].MaxDate, Job[1].ID);
console.log(Job[2].MaxDate, Job[2].ID);

console.log('Consultando array depois de ordenar');


if ((Job[0].time) + (Job[1].time) == 8) {
    console.log('Atendimentos dia 10/11/2019');
    console.log('Atendimento 1');
    console.log('ID: ', Job[0].ID, 'Descrição: ', Job[0].Description, 'Tempo estimado:', Job[0].time, 'Horas');


    console.log('Atendimento 2');
    console.log('ID: ', Job[1].ID, 'Descrição: ', Job[1].Description, 'Tempo estimado:', Job[1].time, 'Horas');

    console.log('Atendimentos dia 11/11/2019');

    console.log('ID: ', Job[2].ID, 'Descrição: ', Job[2].Description, 'Tempo estimado:', Job[2].time, 'Horas');

}