var inputOneIsOn = false; 
var inputTwoIsOn = false;


function toggleImage() {
   var img1 = "../img/button-off-xxl.png";
   var img2 = "../img/button-on-xxl.png";
  
   
   var imgElement = document.getElementById('toggleImage');


   //imgElement.src = (imgElement.src === img1)? img2 : img1;
   
    if(inputOneIsOn){
        imgElement.src = img1;
    }else{
        imgElement.src = img2;
    }
   
}

  
function toggleImage2() {
   var img1 = "../img/button-off-xxl.png";
   var img2 = "../img/button-on-xxl.png";
  
   
   var imgElement = document.getElementById('toggleImage2');


   if(inputTwoIsOn){
        imgElement.src = img1;
    }else{
        imgElement.src = img2;
    }
   
}

    function toggleInputOne() { 
            inputOneIsOn = !inputOneIsOn; 
            
        } 

    function toggleInputTwo() { 
            inputTwoIsOn = !inputTwoIsOn; 
              
           
        } 



function and(){
    var a = inputOneIsOn;
    var b = inputTwoIsOn;
    
	  
            console.log('Input one is on: ', 
                                inputOneIsOn); 
								
	        console.log('Input two is on: ', 
                                inputTwoIsOn); 
	
    
    if(inputOneIsOn&&inputTwoIsOn)
        document.getElementById('andGate').src='../img/and2on.png';
    else if (!inputOneIsOn && inputTwoIsOn) 
        document.getElementById('andGate').src='../img/andoffon.PNG';
	else if (inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='../img/andonoff.PNG';
	else if (!inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='../img/and2off.PNG';
	}
