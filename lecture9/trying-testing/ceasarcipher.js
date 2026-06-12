const cipher = function(string, num){
    let result = '';
    num = num%26;
    for(char of string){
        let code = char.charCodeAt(0);
        if(code >= 97 && code <= 122){
            code += num;
            if(code > 122){
            code = code % 122;
            code += 96;
            }
        }else if(code >= 65 && code <= 90){
            code += num;
            if(code > 90 ){
            code = code % 90;
            code += 64;
            }
        }
        result += String.fromCharCode(code);
    }
    return result;
}

export {cipher};