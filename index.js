// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(ralph){
  kittens.push(ralph)
  return kittens
}
function destructivelyPrependKitten(ralph){
  kittens.unshift(ralph)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(ralph){
  return [...kittens,ralph]
}