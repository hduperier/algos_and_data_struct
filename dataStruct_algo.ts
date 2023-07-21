// Starting the Data Structure Section of the course

//arrays are effectively simple, continguous memory space

// Linear Search
export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i=0; i<haystack.length; ++i) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}