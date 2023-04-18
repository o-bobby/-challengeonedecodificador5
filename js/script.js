
   

                       //Encrypting
function encrypt(){

  let typingTxt = document.getElementById("input").value;

  if (typingTxt!="") {
    const encryptingTxt = typingTxt.split(/e/g).join("enter").split(/i/g).join("imes").split(/a/g).join("ai").split(/o/g).join("ober").split(/u/g).join("ufat");
    document.getElementById("output").value = encryptingTxt;
    document.getElementById("input").value = "";
    document.getElementById("alert").innerHTML = "&nbsp";

  }else {
    document.getElementById("alert").innerText = "Digite ou Cole Algo Para Criptografar";   
  }
};

                  //Decrypting
function decrypt(){
    
    let pasteTxt = document.getElementById("input").value;
                    
    if (pasteTxt != "") {
        const encryptingTxt = pasteTxt.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById("output").value = encryptingTxt;
        document.getElementById("input").value = "";
        document.getElementById("alert").innerHTML = "&nbsp";
    } else {
        document.getElementById("alert").innerText = "Digite ou Cole Algo Para Descriptografar";
    }
};
 
             //Buttons
async function copy() {
	
        let text = document.getElementById("output").value;
        await navigator.clipboard.writeText(text);
        document.getElementById("output").value = "";
        document.getElementById("input").value = text;
        document.getElementById("alert").innerHTML = "&nbsp";
};             

