// Questão 1
//class usuario{
//	constructor(n, e){
//		this.nome = n;
//		this.email = e;
//		this.adm = false;
//	}
//	isAdmin(){
//		console.log(this.adm);
//	}
//}
//class admin extends usuario{
//	constructor(n, e){
//		super();
//		this.adm = true;
//	}
//	isAdmin(){
//		console.log(this.adm);
//	}
//}
//const user1 = new usuario ('email@teste.com', 'senha123');
//const admin1 = new admin ('email@teste.com', 'senha456');
//console.log(user1.isAdmin())
//console.log(admin1.isAdmin())
//Questão 2
//const usuarios = [
// { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
// { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
// { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
//];
//map
//const idadeArr = usuarios.map(function (item){
//	return item.idade;
//});
//console.log(idadeArr);
//filter
//const r_18 = usuarios.filter(function (item){
//	return item.empresa === 'Rocketseat' && item.idade >= 18;
//});
//console.log(r_18)
//find
//const googler = usuarios.find(function(item){
//	return item.empresa === 'Google';
//});
//console.log(googler)
//Unindo operações
//const newUs = usuarios.filter(item =>{
//	item.idade *= 2;
//	return item.idade <= 50; 
//});
//console.log(newUs)
//Questão 3
//3.1
//const arr = [1, 2, 3, 4, 5];
//arr.map(function(item) {
//	return item + 10;
//});
//Resp.
//console.log(arr.map(item => item + 10));
// 3.2
//const usuario = {nome: 'Diego', idade: 23 };
//function mostraIdade(usuario) {
//return usuario.idade;
//}
//mostraIdade(usuario);
//Resp.
//const mostraIdade = (usuario) => usuario.idade;
//console.log(mostraIdade(usuario));
// 3.3
//const nome = "Diego";
//const idade = 23;
//function mostraUsuario(nome = 'Diego', idade = 18) {
//	return { nome, idade };
//}
//mostraUsuario(nome, idade);
//mostraUsuario(nome);
//Resp.
//const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade});
//console.log(mostraUsuario(nome, idade));
//console.log(mostraUsuario(nome));
// 3.4
//const promise = function() {
//	return new Promise(function(resolve, reject) {
//		return resolve();
//	})
//}
//Resp.
//const promise = () => Promise = (resolve, reject) => resolve();
//Questão 4
//4.1
//const empresa = {
//	nome: 'Rocketseat',
//	endereco: {
//		cidade: 'Rio do Sul',
//		estado: 'SC',
//	}
//};
//const {nome} = empresa;
//function nome ({nome}){
//	return nome;
//}
//const {endereco:{cidade}} = empresa;
//function cidade ({endereco}){
//	return endereco.cidade;
//}
//const {endereco:{estado}} = empresa;
//function estado ({endereco}){
//	return endereco.estado;
//}
//console.log (nome);
//console.log (cidade);
//console.log (estado);
//4.2
//function mostraInfo(usuario) {
//	const {nome} = usuario;
//	const {idade} = usuario;
//	return `${nome} tem ${idade} anos.`;
//}
//console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
//Questão 5
//5.1
//const arr = [1, 2, 3, 4, 5, 6];
//const [x, ...y] = arr;
//console.log(x)
//console.log(y)
//function soma(...params){
//	return params.reduce((total, next) => total + next);
//}
//console.log(soma(1, 2, 23424, 34))
//console.log(soma(1, 2, 3, 4, 5, 6))
//console.log(soma(1, 2))
//5.2
//const usuario = {
//	nome: 'Diego',
//	idade: 23,
//	endereco: {
//		cidade: 'Rio do Sul',
//		uf: 'SC',
//		pais: 'Brasil',
//	}
//};
//const usuario2 = {...usuario, nome:'Gabriel'}
//console.log(usuario2)
//const usuario3 = {...usuario, endereco:{cidade: 'Lontras'}}
//console.log(usuario3)
//Questão 6
//const usuario = 'Diego';
//const idade = 23;
//console.log('O usuário ' + usuario + ' possui ' + idade + ' anos.');
//console.log(`O usuário ${usuario} possui ${idade} anos!`)
//Questão 7
//const nome = 'Diego';
//const idade = 23;
//const usuario = {
//	nome,
//	idade,
//	cidade: 'Rio do Sul',
//};
//console.log(usuario)
"use strict";
