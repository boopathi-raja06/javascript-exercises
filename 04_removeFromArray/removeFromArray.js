const removeFromArray = function(arr,...args) {
    let newarr=[];
    arr.forEach(element => {
        if(!args.includes(element))
            newarr.push(element)
    });
       
        return newarr;    
};

// Do not edit below this line
module.exports = removeFromArray;
