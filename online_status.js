/**
 * Online status
 * 
 * Display online status for a list of users.
 * Example:
 * - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 */

const users = ["mockIng99", "J0eyPunch", "glassedFer"];

function DisplayUser(arr) {
    const count = users.length;
    let res;
    if (count === 1) {
        res = `${arr[0]} is online`;
    } else if (count === 2) {
        res = `${arr[0]}, ${arr[1]} are online`;
    } else {
        res = `${arr[0]}, ${arr[1]} and ${count - 2} more are online`;
    }
    return res;
}
console.log(DisplayUser(users));
