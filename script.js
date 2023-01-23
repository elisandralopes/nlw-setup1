// seletor como no css
// a seguinte instrução é colocar o formulario 'form' numa variável
const form = document.querySelector('#form-habits');
//nova variável para inicar a biblioteca:
const nlwSetup = new NLWSetup(form); //new novo, criand um novo objeto
const button = document.querySelector('header button')

button.addEventListener('click', add) 
form.addEventListener('change', save)

function add() {

  const today = new Date().toLocaleDateString('pt-br').slice(0, -5) //recordar o ano, para ficar somente dia e mês
  const dayExists = nlwSetup.dayExists(today) // true or fals

  if(dayExists) { // verificar se o dia existe
    alert('Dia já incluso 🔴')
    return
  }

  alert('Dia adicionado com sucesso ✅')
  nlwSetup.addDay(today) // adicionar o dia
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} // converter em um objeto / na primeira vez, porem -> ou|| objeto vazio {}
nlwSetup.setData(data); //setDate esperando um objeto, no caso o objeto acima
nlwSetup.load() // carregar
