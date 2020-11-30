//create new array to stored the string
//write condition to check if the string is more that given number
//create and push the string into the new array
//return new string with ... after the given length

function truncateStr(str , num){
    let newArr = [];
    if(str.length > num){
        newArr.push(str.slice(0 , num));
        return `${newArr}...`;
    }
    return str;
}

console.log(truncateStr("Lorem ipsum dolor sit amet" , 15));