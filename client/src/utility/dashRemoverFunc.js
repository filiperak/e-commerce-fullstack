export function dashRemoverFunc(str) {
    if (str.includes('-')) {
        return str.replace(/-/g, ' ');
    } else {
        return str;
    }
}
