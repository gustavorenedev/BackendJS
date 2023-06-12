/*
Considerando que a distância entre a terra e a lua é de 384.400km, 
escreva um programa que o usuário irá inserir a velocidade de uma 
nave espacial. Com esse dado, calcule em quanto tempo (horas) a 
aeronave chegaria até a lua. */

const prompt = require("prompt-sync")();

console.log("Velocidade")
let km = Number(prompt("Digite em quantos km/h quer que chega a lua: "))
distancia = 384.400
velo = distancia / km
console.log("Demoraria", velo,"km/h para chegar até a lua")

