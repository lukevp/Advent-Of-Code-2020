export {};
console.log("=========== Day 02 ===========");

function verifyType1Password(password: string, minCount: number, maxCount: number, targetChar: string) : boolean {
    let chars = password.split("").filter(x => x === targetChar);
    return chars.length >= minCount && chars.length <= maxCount;
}

function verifyType2Password(password: string, offset1: number, offset2: number, targetChar: string) : boolean {
    let matchCount = 0;
    if (password[offset1-1] === targetChar) matchCount++;
    if (password[offset2-1] === targetChar) matchCount++;
    return matchCount === 1;
}

function getValidatedLines(input: string, callback: (password: string, minCount: number, maxCount: number, targetChar: string) => boolean)
{
    const lineRegex = /(\d+)-(\d+)\s+(\w):\s+(.*)/;
    return input.split("\n").filter(line => 
        {
            let result = line.match(lineRegex);
            if (result === null) return false;
            let [_, minCount, maxCount, targetChar, password] = result;
            return callback(password, parseInt(minCount), parseInt(maxCount), targetChar);
        }
    );
}


const text = Deno.readTextFile("Day_02/input.txt");
text.then((input: string) => 
{
    const validType1Passwords = getValidatedLines(input, verifyType1Password);
    const validType2Passwords = getValidatedLines(input, verifyType2Password);

    console.log("Part 1 Answer (Number of valid passwords with Type 1 check): " + validType1Passwords.length);
    console.log("Part 2 Answer (Number of valid passwords with Type 2 check): " + validType2Passwords.length);
});
