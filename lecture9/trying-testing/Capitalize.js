const capitalize = function(string){
    let result = string[0].toUpperCase() + string.slice(1,string.length);
    return result;
}

export {capitalize};