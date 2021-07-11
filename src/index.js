module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.join("").replace(/\,/g, "");
    let store = [];
    let indexes = [];
    for (let i = 0; i < str.length; i++) {
        indexes.push(brackets.indexOf(str[i]));
        if (indexes[i] % 2 === 0) {
            if (
                str[i] === brackets[indexes[i] + 1] &&
                indexes[i] === store[store.length - 1]
            ) {
                store.pop();
            } else {
                store.push(indexes[i]);
            }
        } else {
            if (store.pop() !== indexes[i] - 1) {
                return false;
            }
        }
    }
    return store.length === 0;
};
