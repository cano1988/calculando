//Funcion para calcular

function calcular(num1, num2, op){
  switch(op){
    case"+":
    return sumar(num1,num2);
    case"-":
    return resta(num1,num2);
    case"/":
    return dividir(num1,num2);
    case"*":
    return multiplicar(num1,num2);
    default:
      return"Operación no válida"

  }

}