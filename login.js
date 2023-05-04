function logar() {
    var usuarios = [
        { "usuario": "111111111-11", "senha": "123", "tipouser": "medico" },
        { "usuario": "222222222-22", "senha": "456", "tipouser": "paciente" },
        { "usuario": "333333333-33", "senha": "789", "tipouser": "medico" },
        { "usuario": "444444444-44", "senha": "321", "tipouser": "paciente" }
    ]
    var user = document.getElementById('login').value;
    var password = document.getElementById('senha').value;
    var recorrente;

    console.log(login);
    console.log(senha);

    // recorrente = true;
    // do {
    for (let i = 0; i < usuarios.length; i++) {
        if (user == usuarios[i].usuario) {
            if (password == usuarios[i].senha) {
                window.alert("você será direcionado para sua página");
                console.log(usuarios[i]);
                if (usuarios[i].tipouser == "paciente") {
                    window.location.assign("agendamentos.html");
                    break;
                } else //if (usuarios[i].tipouser == "medico"); 
                {
                    window.location.assign("paginamedico.html");
                    break;
                }
                // recorrente = false;
                break;
            }
            break;
        } else {
            console.log("usuario ou senha invalido");
        }
    }

    //} while (recorrente == true);
}
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}
var strCPF = "12345678909";
alert(TestaCPF(strCPF));