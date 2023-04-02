import {arg1, oper, arg2} from '../index.js';

let result;
if (oper === '+') {
    result = arg1 + arg2;
    return result;
} else if (oper === '-') {
    result = arg1 - arg2;
    return result;
} else {
    result = arg1 * arg2;
    return result;
}
export default result;
