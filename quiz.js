  var ht = document.getElementById("heightTree");
  var ct = document.getElementById("charTree");
  var bt = document.getElementById("buttonTree");

  bt.addEventListener("click", treeStart);
  
  ht.addEventListener("keydown", function(event){
    if (event.keyCode === 13){
      treeStart();
    }
  });

  ct.addEventListener("keydown", function(event){
    if (event.keyCode === 13){
      treeStart();
    }
  });

function validateHeight(){
  // Get height value from control
  var treeHeight = ht.value;

  // Check if invalid entries in Height field (Null, Zero or NaN)
  if (isNaN(treeHeight) === isNaN(NaN)){
    alert("Not a valid height");
    // Remove bad value from text control
    ht.value="";
    // 0 means invalid entry
    return 0;
  }
  else if (treeHeight.length === 0) {
    alert("Not a valid height");
    ht.value="";
    return 0;
  }
  else if (treeHeight === "0") {
    alert("Not a valid height");
    ht.value="";
    return 0;
  }
  else {
    // Return integer if valid number
    return parseInt(treeHeight);
  }
}

function validateChar(){
  // Get contents of text control
  var treeChar = ct.value;

  // If string or Null, then not valid
  if (treeChar.length !== 1) {
    alert("Not a valid character");
    // Remove bad value from text control
    ct.value="";
    // NN is returned if value bad
    return "NN";
  }
  else {
    // return character if valid
    return treeChar;
  }
}

function tree(treeObject){
  var treeLevel = "";

  // Loop from 1 to height of tree
  for (var x=1; x<=treeObject.height; x++){

    // Loop to add blank spaces to string needed to position the character
    for (var y = (treeObject.height - x); y > 0; y--){
      treeLevel += " ";
    }

    // Loop to add the characters to the tree level (2n-1)
    for (var z = (2*x)-1; z > 0; z--){
      treeLevel += treeObject.chara;
    }

    // Draw tree level
    console.log("", treeLevel);

    // reset treeLevel value
    treeLevel = "";
  }
}

function treeStart(){

  // Validate the Height and Char entered into text fields
  var numHeight = validateHeight();
  var getChar = validateChar();

  // If Height and Character entered are valid
  if ((numHeight !== 0) && (getChar != "NN")){
    
    // Create Object
    var treeObject = {height: numHeight, chara: getChar};
    
    // Clear Console of old data
    console.clear;

    // Call tree function and pass Object in order to draw tree
    tree(treeObject);
  }
}

function foo(event){
  // if (e.keyCode = 13){
    alert(event + " wawa");
  // }
}