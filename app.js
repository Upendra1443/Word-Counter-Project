let textBox = document.getElementById('text-box');

textBox.addEventListener('input', function(){
    var text = this.value;
    // console.log(text)
    let char = text.length;
    // console.log(char)
    document.getElementById('char').innerHTML = char; // charecters counts
    
    // words count
    text = text.trim()      //removes the leading and trailing wiite space and line terminator characters from a string
    let words = text.split(" ");
    let cleanList = words.filter(function(elm){   // it is remove inside's white space of a paragraph
        return elm != "";
    })
    // console.log(words)
    document.getElementById('word').innerHTML = cleanList.length;
})

