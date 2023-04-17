function bskr() {
    //responsável pelos números que serão colocados nos inputs//
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    //variavel da conta de delta//
    let delta = b * b - 4 * a * c;
    //responsável pela conta x1 e x2 //
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    
    let vaga = '';
    //alert//
    if (delta <0) {
        alert('a equação não possui raiz real');
        return;
    }
    else if (!a || !b || !c) {
        alert('insira um valor em todas as box');
    }
    else if (a <= 0) {
        alert('valor de "a" deve ser maior que 0');
    }
    else if (delta==0) {
        alert('há apenas uma raiz real')
    }
  
        
    else if(a==0 && b==0 && c==0){
        alert('digite um valor válido')
        
    }
    else if (x2>x1){
        vaga=x1;
        x1=x2;
        x2=vaga
    }

let parX1, parX2;

    if (x1 % 2 === 0) {
        console.log("passou aqui");
        parX1 = true;
    }

    if (parX1) {
        console.log("passou aqui2");

        document.getElementById("x1").innerHTML = `o valor de x1 é de =${x1}, e ele é par`;
    } else {
        console.log("passou aqui3");

        document.getElementById("x1").innerHTML = `o valor de x1 é de =${x1}, e ele é impar`;
    }
    console.log(parX1);
    if (parX2) {
        console.log("passou aqui4");

        document.getElementById("x2").innerHTML = `o valor de x2 é de =${x2} e ele é par`;
      
    } else{
        console.log("passou aqui5");
        document.getElementById("x2").innerHTML = `o valor de x2 é de =${x2} e ele é impar`;
    }


}

