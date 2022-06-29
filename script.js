var aBtn = document.getElementById('mybtn').getElementsByTagName('button');
var vBtn = ["del","%","back","/","7","8","9","*","4","5","6","-","1","2","3","+","00","0",".","="];
var mshow = document.getElementById('toShow');
for(var i=0; i<aBtn.length; i++){
    aBtn[i].onclick = myClick;
}
function myClick(){
    // alert("hello");
    for(var i=0; i<aBtn.length; i++){
        if(aBtn[i] === this){
            // alert(vBtn[i]);
            if(i!=0 && i!=2 && i!=19){
                mshow.innerHTML += vBtn[i];
            }
            
        }
    }
}