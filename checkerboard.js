let size = 8;
let checkerboard = "";
let row = size*2+1

for(i=1;i<=(size*row);i++){
    checkerboard += (i%(row) ? (i%2 ? " ": "#"):"\n");
}

console.log(checkerboard);
