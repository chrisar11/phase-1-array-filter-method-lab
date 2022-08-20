// * `findMatching`- This function takes an array of drivers' names and a `string`
// as arguments, and returns the matching list of drivers. The function should be
// case insensitive.

function findMatching(names, string) {
    return names.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === string.toLowerCase()
    );
}