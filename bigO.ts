function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i=0; i<n.length; ++i) {
        // for loop has to execute length of the string
        // if string grows by 50%, computation increases by 50%
        // so therefore it grows linearly and for one more unit of string, theres one more loop for it to do
        sum += n.charCodeAt(i);

    }
    return sum;
}

function sum_char_codes2(n: string): number {
    let sum = 0;
    for (let i=0; i<n.length; ++i) {
        // for loop has to execute length of the string
        // if string grows by 50%, computation increases by 50%
        // so therefore it grows linearly and for one more unit of string, theres one more loop for it to do
        sum += n.charCodeAt(i);
    }

    for (let i=0; i<n.length; ++i) {
        sum += n.charCodeAt(i);
        //so now we added the same function again
        // time complexity is still O(N) because constants are dropped
        // so O(2*N) == O(N)
    }

    return sum;
}

function sum_char_codes3(n: string): number {
    let sum = 0;
    for (let i=0; i<n.length; ++i) {
        // for loop has to execute length of the string
        // if string grows by 50%, computation increases by 50%
        // so therefore it grows linearly and for one more unit of string, theres one more loop for it to do
        const charCode = n.charCodeAt(i);
        // Looking for capital E
        if (charCode === 69) {
            return sum;
            // so theoretically, this could end early and be O(N-i), but speaking in time complexity
            // we generally consider worst-case, so if the run doesnt end early because there's no capital E, 
            // then the worst case time complexity would be O(N) for this function as well
        }
        sum+= charCode;

    }
    return sum;
}


// O(N^2) Example:
function sum_char_codes4(n: string): number {
    let sum = 0;
    
    for (let i=0; i < n.length; ++i) {
        const charCode=n.charCodeAt(i);
        for (let j=0; j < n.length; ++j) {
            sum += charCode;
            // for loop inside of for loop so O(N*N) == O(N^2)
        }
    }
    return sum;
}

// O(nlogn) Example:
// Quicksort (will implement and take note on)

// O(log n) Example:
// Binary search Trees

// Craziest of all runtimes we will go over once
// O(sqrt(n)) Example: