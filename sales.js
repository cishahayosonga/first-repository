// Sales by Match

let ar = [1,1,1, 2,2,2,2, 3];

let n = ar.length;

let pairs = 0;

let isubiramo = {};

for(let color of ar){
    if(isubiramo[color]){
        isubiramo[color]++;
    }else {
        isubiramo[color] = 1;
    }
}

for(let key in isubiramo){
    if(isubiramo[key] >= 2){
        pairs += Math.floor(isubiramo[key] / 2);
    }
}


console.log(pairs, isubiramo)