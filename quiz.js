  var ht = document.getElementById("heightTree");
  var ct = document.getElementById("charTree");
  var bt = document.getElementById("buttonTree");

  // ht.addEventListener("blur", validateHeight);
  // ct.addEventListener("blur", validateChar);
  bt.addEventListener("click", tree);

function validateHeight(){
  var i=ht.value;
  console.log("i", i);
  console.log("typeof i", typeof i);
  if (isNaN(i) === isNaN(NaN)){
    alert("Not");
    ht.value="";
    return 0;
  }
  else {
    return parseInt(i);
  }
    
}

function validateChar(){
  var s=ct.value;
  if (s.length !== 1) {
    alert("Not");
    return "N";
  }
  else {
    alert("Yes");
    return "Y";
  }
}

function tree(){
  // var num = validateHeight();
  var t = validateChar();
}