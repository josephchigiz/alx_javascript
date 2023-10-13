// function addMeMaybe(number, theFunction) {
//     for (let nb = parseInt(number); nb > 0; nb++) {
//         theFunction(nb);
//     }
// }
function addMeMaybe(number, theFunction) {
    let nb = parseInt(number); nb++;
    if (nb > 0) {
        theFunction(nb);
    }
}
module.exports.addMeMaybe = addMeMaybe;