function FindAllPermutations(str, index, buffer) {
    if (typeof str == "string")
        str = str.split("");
    if (typeof index == "undefined")
        index = 0;
    if (typeof buffer == "undefined")
        buffer = [];
    if (index >= str.length)
        return buffer;
    for (var i = index; i < str.length; i++)
        buffer.push(ToggleLetters(str, index, i));
    return FindAllPermutations(str, index + 1, buffer);
}

function ToggleLetters(str, index1, index2) {
    if (index1 != index2) {
        var temp = str[index1];
        str[index1] = str[index2];
        str[index2] = temp;
    }
    console.log(str.join(""));
}

FindAllPermutations('bar')
