export {};
console.log("Welcome to Advent of Code 2020!");
console.log("=========== Day 01 ===========");

function find2MatchingItems(items: number[]) : [num1: number, num2: number] | null {
    for (let i = 0; i < items.length; i++)
    {
        for (let j = i+1; j < items.length; j++)
        {
            if (items[i] + items[j] === 2020)
            {
                return [items[i], items[j]];
            }
        }
    }
    return null; 
}

function find3MatchingItems(items: number[]) : [num1: number, num2: number, num3: number] | null {
    for (let i = 0; i < items.length; i++)
    {
        for (let j = i+1; j < items.length; j++)
        {
            for (let k = j+1; k < items.length; k++)
            {
                if (items[i] + items[j] + items[k] === 2020)
                {
                    return [items[i], items[j], items[k]];
                }
            }
        }
    }
    return null; 
}


const text = Deno.readTextFile("Day_01/input.txt");
text.then((input) => 
{
    let [num1, num2] = find2MatchingItems(input.split("\n").map(x => parseInt(x))) ?? [0, 0];
    console.log("Found numbers that sum to 2020: " + num1 + ", " + num2);
    console.log("Part 1 Answer: " +  num1 * num2);

    let [num3, num4, num5] = find3MatchingItems(input.split("\n").map(x => parseInt(x))) ?? [0, 0, 0];
    console.log("Found numbers that sum to 2020: " + num3 + ", " + num4 + ", " + num5);
    console.log("Part 2 Answer: " +  num3 * num4 * num5);
});
