function calcularNotas() {
  //Cria referência aos elementos da página
  let inSaque = document.getElementById('inSaque')
  let outNotasCem = document.getElementById('outNotasCem')
  let outNotasCinquenta = document.getElementById('outNotasCinquenta')
  let outNotasDez = document.getElementById('outNotasDez')

  //Limpa mensagens (caso, segunda execução)
  outNotasCem.textContent = ''
  outNotasCinquenta.textContent = ''
  outNotasDez.textContent = ''

  //Converte conteúdo do campo inSaque
  let saque = Number(inSaque.value)

  //Se não preencheu ou NaN
  if (saque == 0 || isNaN(saque)) {
    alert('Informe o valor do saque corretamente')
    inSaque.focus()
    return
  }

  //Verifica se saque não é múltiplo de 10
  if (saque % 10 != 0) {
    alert('Valor inválido para notas disponíveis (R$10, 50, 100)')
    inSaque.focus()
    return
  }

  //Calcula notas de 100, 50 e 10
  let notasCem = Math.floor(saque / 100)
  let resto = saque % 100
  let notasCinquenta = Math.floor(saque / 50) 
  resto = resto % 50
  let notasDez = Math.floor(resto / 10)

  //Exibe as notas apenas se houver
  if (notasCem > 0) {
    outNotasCem.textContent = 'Notas de R$ 100: ' + notasCem
  }

  if (notasCinquenta > 0) {
    outNotasCinquenta.textContent = 'Notas de R$ 50: ' + notasCinquenta
  }

  if (notasDez > 0) {
    outNotasDez.textContent = 'Notas de R$ 10: ' + notasDez
  }
}
//Cria referência ao elemento btExibir e associa a função ao evento click
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularNotas)