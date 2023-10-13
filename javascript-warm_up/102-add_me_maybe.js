// function addMeMaybe(number, theFunction) {
//     for (let nb = parseInt(number); nb > 0; nb++) {
//         theFunction(nb);
//     }
// }
function addMeMaybe(number, theFunction) {
    let nb = parseInt(number); nb++;
    if (typeof nb === 'number') {
        theFunction(nb);
    }
}
module.exports.addMeMaybe = addMeMaybe;