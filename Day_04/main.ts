export {};
console.log("=========== Day 04 ===========");

function countTrees(map: string[], stepVector: number[]) : number
{
    const treeChar: string = '#';
    let x = 0, y = 0, count = 0;
    while (y < map.length)
    {
        //console.log("coords: " + x + ", " + y)
        //console.log(map[y][x % (map[y].length - 1)])
        if (map[y][x % (map[y].length)] === treeChar)
        {
            count += 1;
        }
        x += stepVector[0];
        y += stepVector[1];
    }
    return count;
}

async function readPassports(filename: string): Map<string, string>[]
{
    let results: Map<string, string>[] = [];
    
    const text = await Deno.readTextFile(filename);
    const passports = text.split('\n\n');
    for(let i = 0; i < passports.length; i++)
    {
        let item = new Map<string, string>();
        let fields = passports[i].split(/\s+/g)

    }
    results.push({})
    return results;
}

function isValid(requiredFields: string[], passport: Map<string, string>)
{
    let hasAllFields = true;
    requiredFields.forEach(field => passport.has(field) || (hasAllFields = false));
    return hasAllFields;
}

const checkVectors = [[1,1], [3,1], [5,1], [7,1], [1,2]];

const testText = Deno.readTextFile("Day_04/test.txt");
testText.then((input: string) => 
{
    console.log(passports.length);
    // const count = countTrees(map, [3, 1]);
    // console.log("Test 1 Answer: " + count);

    // const multCount = checkVectors.map(x => countTrees(map, x)).reduce((prev, curr) => curr * prev);
    // console.log("Test 2 Answer: " + multCount);
})

// const text = Deno.readTextFile("Day_03/input.txt");
// text.then((input: string) => 
// {
//     const map = input.split('\n');
//     const count = countTrees(map, [3, 1]);
//     console.log("Task 1 Answer: " + count);
    
//     const multCount = checkVectors.map(x => countTrees(map, x)).reduce((prev, curr) => curr * prev);
//     console.log("Task 2 Answer: " + multCount);

// })
/*
const text = Deno.readTextFile("Day_03/input.txt");
text.then((input: string) => 
{
    const validType1Passwords = getValidatedLines(input, verifyType1Password);
    const validType2Passwords = getValidatedLines(input, verifyType2Password);

    console.log("Part 1 Answer (Number of valid passwords with Type 1 check): " + validType1Passwords.length);
    console.log("Part 2 Answer (Number of valid passwords with Type 2 check): " + validType2Passwords.length);
});*/
