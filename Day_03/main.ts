export {};
console.log("=========== Day 03 ===========");

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

const checkVectors = [[1,1], [3,1], [5,1], [7,1], [1,2]];

const testText = Deno.readTextFile("Day_03/test.txt");
testText.then((input: string) => 
{
    const map = input.split('\n');
    const count = countTrees(map, [3, 1]);
    console.log("Test 1 Answer: " + count);

    const multCount = checkVectors.map(x => countTrees(map, x)).reduce((prev, curr) => curr * prev);
    console.log("Test 2 Answer: " + multCount);
})

const text = Deno.readTextFile("Day_03/input.txt");
text.then((input: string) => 
{
    const map = input.split('\n');
    const count = countTrees(map, [3, 1]);
    console.log("Task 1 Answer: " + count);
    
    const multCount = checkVectors.map(x => countTrees(map, x)).reduce((prev, curr) => curr * prev);
    console.log("Task 2 Answer: " + multCount);

})