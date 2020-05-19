//Caso houvesse o link da API, poderia ser obtido os dados com a função map
var Job = [{ "ID": 1, "Description": "Importação de arquivos de fundos", "MaxDate": "2019-11-11 08:00:00", "TimeToDo": 2 }, { "ID": 2, "Description": "Importação de dados da Base Legada", "MaxDate": "2019-11-11 12:00:00", "TimeToDo": 4 }, { "ID": 3, "Description": "Importação de dados de integração", "MaxDate": "2019-11-11 08:00:00", "TimeToDo": 6 }]
    // Verificar no console se o array está sendo exibido corretamente
    // console.log(Job[0]);
var lista = 0;

//Verificar qual serviço necessita ser realizada com maior urgência
for (i = 0; i < Job.length - 1; i++) {
    if (Job[i].MaxDate.getTime > Job[i + 1].MaxDate.getTime)
        Lista = i;
    console.log("Depois de comparar", i, "com", i + 1, lista);
}