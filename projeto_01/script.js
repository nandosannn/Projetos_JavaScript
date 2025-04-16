function averge(...numbers){
    let sum = 0;

    numbers.forEach(element => {
        sum += element;
    });

    const averge = sum / numbers.length;

    return averge;
}

console.log(averge(1, 2, 3, 4, 5, 6));

