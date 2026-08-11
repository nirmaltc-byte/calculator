function displayNumber(num){
console.log(num);
document.getElementById("data").value+= num

}
function  clearText(){
    document.getElementById("data").value=""
}
function removeNumber(){
    data.value = (data.value).slice(0,-1)
}
function calculate(){
    data.value =eval(data.value)
}