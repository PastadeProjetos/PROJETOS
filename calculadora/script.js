function insertToDisplay(data){
    document.getElementById('display').value += data
}

function clean(){
    document.getElementById('display').value = ''
}

function back(){
    const display = document.getElementById('display')
    display.value = display.value.slice(0, -1)
}

function result(){
    const display = document.getElementById('display')
    try{
        display.value = eval(display.value)
    } catch{
        display.value = 'Error'
    }
}