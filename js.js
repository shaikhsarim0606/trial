function validation(){
            let inp = document.querySelectorAll(".ff")
            console.log(validation);
            let empty = false;
            for (i = 0; i<inp.length ; i++){
                if (inp[i].value===""){
                    empty = true;
                    break;
                }
            }
         
         if(empty=== true){
            alert("Form is incorrect❌")
         }
         else{
            alert("Form is submitted✔")
         }
        }