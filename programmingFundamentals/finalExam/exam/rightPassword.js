function rightPassword(input) {
    let n = input.shift();
    let pattern = /([\x00-\x7F]+)(>)\d+\|([a-z\s]+)\|([A-Z\s]+)\|[^<>]{3}(<)(\1)/g;

    for (let i = 0; i < n; i++) {

        if (input[i].match(pattern)) {

            let first = input[i].match(/\d+/);
            let second = input[i].match(/[a-z]{3}/);
            let third = input[i].match(/[A-Z]{3}/);
            let fourth = input[i].match(/\|([^<>]{3})(<)/)[1];
            let combined = first + second + third + fourth;

            console.log(`Password: ${combined}`);
        } else {
            console.log('Try another password!');
        }
    }
}
rightPassword(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])