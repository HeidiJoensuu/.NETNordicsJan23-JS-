/* //Kata 1
const printFizzBuzz = (value) => {
    if (value % 3 && value % 5) return "FizzBuzz"
    else if (value % 3) return "Fizz"
    else if (value % 5) return "Buzz"
    else return value.toString() 
}
for (let index = 1; index <= 100; index++) {
    console.log(printFizzBuzz(index))
}
function printFizzBuzz(value) {
    if (value % 3 && value % 5) return "FizzBuzz"
    else if (value % 3) return "Fizz"
    else if (value % 5) return "Buzz"
    else return value.toString()
}

for (let index = 1; index <= 100; index++) {
    console.log(printFizzBuzz(index))
}
*/

/* Kata 2
function maximumProfit(list) {
    let bestPrice = 0
    list.map((current, index) => {
        list.slice(index).map((compare) =>{
            if (compare - current > bestPrice) bestPrice = compare-current
        })
    });
    console.log(bestPrice)
}

maximumProfit([8, 5, 12, 9, 19, 1])
maximumProfit([2, 4, 9, 3, 8])
maximumProfit([21, 12, 11, 9, 6, 3])
*/

/*Kata 3
const splitOnDoubleLetter = (input) => {
    const splitted = input.split('')
    let list = []
    let charts = ''
    splitted.map((char, index) => {
        if (!char.includes(splitted[(index-1)])) {
            charts = charts.concat('', char)
        }
        else {
            list.push(charts)
            charts=char
        }
    })
    list.push(charts)
    if (list.length === 1) list=[]
    return list
}

splitOnDoubleLetter("Letter") //[‘let’, ‘ter’]
splitOnDoubleLetter("Really") //[‘real’, ‘ly’]
splitOnDoubleLetter("Happy") //[‘hap’, ‘py’]
splitOnDoubleLetter("Shall") //[‘shal’, ‘l’]
splitOnDoubleLetter("Tool") //[‘to’, ‘ol’]
splitOnDoubleLetter("Mississippi") //[‘Mis’, ‘sis’, ‘sip’, ‘pi’]
splitOnDoubleLetter("Easy")
*/

/* Kata 4 */
const charCount = (char, compare) => {
    let count = 0
    if (char.length > 1 || char.length == 0) count = "Error"
    else {
        do {
            if (compare.search(char) !== -1) {
                count++
                compare = compare.slice(compare.search(char)+1)
            } else compare = ''
        } while (compare.length > 0)
        
    }
    return count
}
//const characters = compare.matchMedia(new ReqExp(char, 'g')) //g = global
//Array(jtn)filter(a = jir).length
console.log(charCount('a','edabit')) //1
console.log(charCount('c','Chamber of secrets')) //1
console.log(charCount('B','boxes are fun')) //0
console.log(charCount('b','big fat bubble')) //4
console.log(charCount('wow','the universe is wow')) //error
console.log(charCount('!','!easy!')) //2
console.log(charCount('','extra')) //error