 window.onload = function myfunction(){
       for(x=0; x<251;x++) {
            
            var board = document.querySelector('#board');

            board.innerHTML += "<div class='thumb' onclick ='RGBnumber("+x+")'></div>";

            var thumb = document.getElementsByClassName('thumb')[x];

            thumb.style.backgroundColor  += "rgb("+x+",0,0)";
                            }
                                      }

function RGBnumber(x){

    alert("Rgb"+" "+x+",0,0");
                    }











