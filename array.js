function arrayFunction(){
    var x = document.querySelector(".arrayInput").value.split(",");
    
    var select = document.querySelector("#arrayMethodSelect").value;

    var res=document.querySelector(".result");

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
    }
    // res.innerHTML=;
}