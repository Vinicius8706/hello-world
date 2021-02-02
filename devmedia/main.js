import colecao_signos from './app/dados/dados.js'
import retorna_signo from './app/funcoes/funcoes.js'

let data_app = new Date()

const nome_signo = retorna_signo(colecao_signos, data_app)

console.log("O signo de hoje é: " + nome_signo)