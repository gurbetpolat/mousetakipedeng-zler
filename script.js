var bebekler=document.getElementsByClassName("bebek");
console.log(bebekler);


document.onmousemove=function(){
    
    var x=event.clientX*100/window.innerWidth+"%";
    //var genislik=window.innerWidth;
    //var yuk=window.innerHeight;
    //Console.log("Genişlik:"+genislik+"Yükseklik"+yuk);
    var y=event.clientY*100/window.innerHeight+"%";
  //  console.log("X: Ekeseninde:"+x+" Y ekseninde:"+y);
   
  for(var i=0; i<2; i++)
  {
    
  bebekler[i].style.top=y;
  bebekler[i].style.left=x;

  bebekler[i].style.transform="translate(-"+x+", -"+y+")";
  }

}