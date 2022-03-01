function calcular(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('txttab')
    var n1 = Number(num.value)
    
    tab.innerHTML = ''
    for(var c = 1; c <= 10; c = c + 1){
       var item = document.createElement('option')
       item.text = `${n1} X ${c} = ${n1*c}`
       tab.appendChild(item) 
    }



}