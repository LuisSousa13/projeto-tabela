function validarDados() {
    const inputs = document.querySelectorAll('.input-validacao');
    let todosPreenchidos = true;

    
    const nomesCampos = [
        "Nome",
        "Telefone",
        "Idade",
        "Endereço",
        "RG",
        "CPF",
        "E-MAIL",
        "Altura (cm)",
        "Peso (kg)",
        "Tipo sanguíneo"
    ];

    
    const regexNome = /^[A-Za-z\s]+$/; 
    const regexEndereco = /^[A-Za-z\s]+$/; 
    const regexNumeros = /^[0-9]+$/; 

    inputs.forEach((input, index) => {
        const valor = input.value.trim();

        if (valor === '') {
            alert(`Campo "${nomesCampos[index]}" está vazio.`);
            todosPreenchidos = false;
        } else if (index === 0 && !regexNome.test(valor)) { 
            alert(`Campo "${nomesCampos[index]}" deve conter apenas letras.`);
            todosPreenchidos = false;
        } else if (index === 1 && !regexNumeros.test(valor)) { 
            alert(`Campo "${nomesCampos[index]}" deve conter apenas números.`);
            todosPreenchidos = false;
        } else if (index === 3 && !regexEndereco.test(valor)) { 
            alert(`Campo "${nomesCampos[index]}" deve conter apenas letras.`);
            todosPreenchidos = false;
        } else if (index === 4 && !regexNumeros.test(valor)) { 
            alert(`Campo "${nomesCampos[index]}" deve conter apenas números.`);
            todosPreenchidos = false;
        } else if (index === 5 && !regexNumeros.test(valor)) { 
            alert(`Campo "${nomesCampos[index]}" deve conter apenas números.`);
            todosPreenchidos = false;
        } else if ((index === 2 || index === 7 || index === 8) && isNaN(valor)) { 
            alert(`Campo "${nomesCampos[index]}" deve ser um número.`);
            todosPreenchidos = false;
        }
    });

    if (todosPreenchidos) {
        alert('Todos os campos estão preenchidos corretamente!');
    }
}