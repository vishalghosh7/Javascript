function arrayFunction(){
    var x = document.querySelector(".arrayInput").value.split(",");
    
    var select = document.querySelector("#arrayMethodSelect").value;

    var res=document.querySelector(".result1");

    switch(select){
        case "slice":
            res.innerHTML=`Slicing from second element - [${x.slice(2)}]`;
            break; 
        
        case "join":
            res.innerHTML=`After joining, we get - ${x.join(" ")}`;
            break;

        case "length":
            res.innerHTML=`The length of the array is - ${x.length}`;
            break;

        case "delete":
            res.innerHTML=`Deleting first element - ${delete x[0]}`;
            break;

        case "unshift":
            x.unshift("STRAWBERRY");
            res.innerHTML=`Adding strawberry to start - ${[x]}`;
            break;
        
        case "shift":
            x.shift();
            res.innerHTML=`Removing element from start - ${x}`;
            break;

        case "splice":
            x.splice(2, 0, "STRAWBERRY", "KIWI");
            res.innerHTML=`Splicing from pos 2 without removing elements - ${x}`;
            break;

        case "fill":
            x.fill("FRUITS");
            res.innerHTML=`Array elements are now - ${x}`;
            break;

        case "push":
            x.push("STRAWBERRY");
            res.innerHTML=`Push to the end - ${x}`;
            break;

        case "pop":
            x.pop();
            res.innerHTML=`Popped from the end - ${x}`;
            break;
    }
    // res.innerHTML=;
}


function stringFunction(){
    var y = document.querySelector(".stringInput1").value;
    var z = document.querySelector(".stringInput2").value;
    
    var select = document.querySelector("#stringMethodSelect").value;

    var res=document.querySelector(".result2");

    switch(select){
        case "indexOf":
            res.innerHTML=`The index, if exists, is -> [${y.indexOf(z)}]`;
            break; 
        
        case "lastIndexOf":
            res.innerHTML=`The last index, if exists, is -> ${y.lastIndexOf(z)}`;
            break;

        case "search":
            res.innerHTML=`The element, if exists, found at -> ${y.search(z)}`;
            break;

        case "slice":
            res.innerHTML=`Slicing from 2nd element -> ${y.slice(1)}`;
            break;

        case "substring":
            res.innerHTML=`Substring from 1 to 3 -> ${y.substring(1, 4)}`;
            break;
        
        case "replace":
            y.replace(z);
            res.innerHTML=`On Replacing, we get -> ${y}`;
            break;

        case "toUpperCase":
            res.innerHTML=`In upper case -> ${y.toUpperCase()}`;
            break;

        case "toLowerCase":
            res.innerHTML=`In lower case -> ${y.toLowerCase()}`;
            break;

        case "concat":
            res.innerHTML=`After concatenating -> ${y.concat(z)}`;
            break;

        case "charAt":
            res.innerHTML=`character at 3 pos is -> ${y.charAt(2)}`;
            break;
    }
    // res.innerHTML=;
}