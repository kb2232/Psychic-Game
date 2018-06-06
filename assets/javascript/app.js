var obj = ()=> {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function util() {
  guessLeft=9; 
  guessWord.textContent = " ";
}

//random letter
var lett = obj();
var wins =0, losses=0, guessLeft=9;
var guessWord = document.getElementById("guessword");
console.log("letter to guess = "+lett);

//app code
document.addEventListener('keyup',(event)=> {
  //to make sure it's a letter only!!
  if(event.keyCode > 64 && event.keyCode < 91)
    {
      if(!guessWord.textContent.includes(event.key))
        guessWord.textContent += event.key + ", " ;
      else alert("already entered!!!");
      if(event.key===lett)
      {
        //win case
        wins++; 
        lett = obj();
        util();
        console.log("new letter after win = "+lett);
      } else {
        guessLeft--;
      }
      if(guessLeft===0)
      {
        //loss case
        losses++;
        lett = obj();
        util();
        console.log("new letter after loss="+lett);
      }
      
    // Display to HTML
		document.getElementById('win').textContent = wins;
		document.getElementById('loss').textContent = losses;
		document.getElementById('guessleft').textContent = guessLeft;
    }
  else alert("Not a letter!!!");

});


