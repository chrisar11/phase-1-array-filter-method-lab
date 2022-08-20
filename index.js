// * `findMatching`- This function takes an array of drivers' names and a `string`
// as arguments, and returns the matching list of drivers. The function should be
// case insensitive.

function findMatching(names, string) {
    return names.filter(
        (matches) => matches.toLowerCase() === string.toLowerCase()
    );
}

//   * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//  as arguments for querying the array, and returns all drivers whose names begin
//  with the provided letters.

function fuzzyMatch(names, string) {
    return names.filter(
        (matches) =>
            matches.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

// * `matchName` - This function takes an array of `driver` objects and a `string`
// as arguments. Each `driver` object has two properties: `name` and `hometown`.
// The function should return each element whose `name` property matches the
// provided `string` argument.

function matchName(names, hometown) {
    return names.filter((record) => record.name === hometown);
}