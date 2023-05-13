
//Encrypting function
function encrypt(){
  let typingTxt = document.querySelector(".encrypt").value;
  
  if (typingTxt !=""){
      const encryptingTxt = typingTxt.split(/e/g).join("enter").split(/i/g).join("imes").split(/a/g).join("ai").split(/o/g).join("ober").split(/u/g).join("ufat");
      document.querySelector(".decrypt").value = encryptingTxt;
      document.querySelector(".encrypt").value = "";
  }
};

//Decrypting function 
function decrypt(){
  let pasteTxt = document.querySelector(".encrypt").value;

  if (pasteTxt !=""){
      const encryptingTxt = pasteTxt.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
      document.querySelector(".decrypt").value = encryptingTxt;
      document.querySelector(".encrypt").value = "";
  }
};

//Copy function
async function copy(){

  let outputText = document.querySelector(".decrypt").value;
  await navigator.clipboard.writeText(outputText);
  document.querySelector(".decrypt").value = "";
  document.querySelector(".encrypt").value = outputText;
};

