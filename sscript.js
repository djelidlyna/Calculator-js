let display=document.getElementById("display");



function appendToDisplay(input){
display.value += input;
}
function cleardisplay(){
display.value="";
}
function calculate(){
    // eval : fonction predefinie elle evalue la formule donner eval(1+2+3)=6

    try{
    display.value= eval(display.value)
    }
    catch(error){
        display.value="erreur"
    }
}