/*
// Substituindo palavras
let txt = "estão chegando as provas"
console.log(txt.replace("provas", "avaliações"))

// Apresentando valores depois da virgula
let num = 123.45678
document.write(num.toFixed(2))
document.write("<br><br>")
document.write(num.toPrecision(3))
document.write("<br><br>")

// Caixa de alerta
alert("Olá mundo")

// Caixa de confirmação

let teste = confirm("Você é um aluno?")
document.write("O resultado é: ", teste)

// Caixa de prompt

let texto = prompt("Escreva seu nome")
document.write("O nome dele é: ", texto)

// if else

if(20 > 10){
    document.write("O valor 20 é maior que 10")
}
else{
    document.write("O valor 20 NÃO é maior que 10")
}
document.write("<br><br>")

// if else declarando variaveis

let val = 10

if(val < 7){
    document.write("O valor é maior que 7")
}else{
    document.write("O valor é menor que 7")
}
document.write("<br><br>")


// if else encadiado

let idade = 20

if (idade<=12){
    document.write("É uma criança.")
}
else if(idade<=17){
    document.write("É um adolescente.")
}
else if(idade<= 50){
    document.write("É um adulto.")
}
else{
    document.write("É um idoso.")
}
*/

// Desafio

let enter = confirm("Vai entrar na balada?")

if (enter){
    let age =  prompt("Escreva sua Idade:")
    document.write("A idade é ", age)
    document.write("<br><br>")
    if (age <= 10){
        document.write("Pode ir na balada KIDS")
    }
    else if (age <= 14){
        document.write("Pode ir na balada MATINÊ")
    }
    else if (age <= 19){
        document.write("Pode ir na balada NOTURNA")
    }
    else if (age >= 20){
        document.write("Pode ir na balada MADRUGA")
    }
    else{
        document.write("Tendi foi nada.")
    }
}else{
    document.write("Tu és um cedentário.")
    document.write("<br><br>")
}