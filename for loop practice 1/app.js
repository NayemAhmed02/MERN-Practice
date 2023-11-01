console.log("All Odd numbers from 0 to 100 in forward direction.");
for(let i=0; i<=100; i++) {
    if(i % 2 === 1) {
        console.log(i);
    }
}

console.log("All Odd numbers from 0 to 100 in backward direction.");
for(let i=99; i>=1; i-=2) {
    console.log(i);
}