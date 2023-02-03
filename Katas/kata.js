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

/* Kata 4 
const charCount = (char, compare) => {
    //const characters = compare.matchMedia(new ReqExp(char, 'g')) //g = global

    //Version 2
    if (char.length > 1 || char.length == 0) return "Error"
    return compare.split('').filter(x => x===char).length
    
    /* Version 3
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
    */
//}

/*
console.log(charCount('a','edabit')) //1
console.log(charCount('c','Chamber of secrets')) //1
console.log(charCount('B','boxes are fun')) //0
console.log(charCount('b','big fat bubble')) //4
console.log(charCount('wow','the universe is wow')) //error
console.log(charCount('!','!easy!')) //2
console.log(charCount('','extra')) //error
*/

/* kata 5 

const elasticize = (word) => {
    if (word.length <= 2) return word
    const firstPart = word.split('').slice(0, (word.length/2))
    const secondPart = word.split('').slice((word.length/2))
    const middlePart = []
    if (secondPart.length % 2 !== 0) {
        char = secondPart.shift()
        middlePart.push(char,char)
    }
    firstPart.push(firstPart[firstPart.length - 1])
    secondPart.splice(0,0,secondPart[0])
    let newWord = firstPart.concat(middlePart).concat(secondPart)
    return newWord.join('')

}

console.log(elasticize("ANNA"))
console.log(elasticize("KAYAK"))
console.log(elasticize("X"))
*/
/* Kata 6 (sickday) */
/* Kata 7 

const howUnlucky = (year) => {
    let count = 0
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    months.forEach(month => {
        const compare = new Date(`${month} 13, ${year}`)
        if (compare.getDay() === 5) count++
    })
    return count
}

console.log(howUnlucky(2020))
console.log(howUnlucky(2026))
console.log(howUnlucky(2016))
console.log(howUnlucky(2023))
*/
/* Kata 8
const happyAlgorithm = (number) => {
    let newNumber = number
    const list = [number]
    do {
        let numberlist = String(newNumber).split('')
        newNumber = numberlist.map(n => n**2).reduce((a,b) => a+b,0)
        list.push(newNumber)
    } while (newNumber !== 1 && (list.filter((x, y) => list.indexOf(x) !== y)).length === 0)
    if (newNumber === 1) return `HAPPY ${list.length-1}`
    return `SAD ${list.length-1}`
}
console.log(happyAlgorithm(139))
console.log(happyAlgorithm(67))
console.log(happyAlgorithm(1))
console.log(happyAlgorithm(89))
 */
/* Kata 9
const noStrangers = (input) => {
    const listWords = []
    const listCounts = []
    const acquaitances = []
    const frieds = []
    let newInput = input.toLowerCase().replace(/[.,]/g, "").split(" ")
    newInput.forEach((element) => {
        if (listWords.includes(element)){
            listCounts[listWords.indexOf(element)]++
            if (listCounts[listWords.indexOf(element)] === 3) acquaitances.push(element)
            if (listCounts[listWords.indexOf(element)] === 5) {
                frieds.push(element)
                const removable = acquaitances.indexOf(element)
                acquaitances.splice(removable,1)
            }
        }
        else {
            listWords.push(element)
            listCounts.push(1)
        }
    })
    return [acquaitances, frieds]
}
console.log(noStrangers("See Spot run. See Spot jump, Spot likes jumping. See Spot fly.")) //
*/
/* Kata 10 

const grantTheHint = (input) => {
    let words = input.split(' ')
    let hidden = []
    let hintList = []
    let longest = 0
    const firstHint = []
    words.map((word) => {
        hidden.push(('_'.repeat(word.length)).split(''))
        firstHint.push('_'.repeat(word.length))
        if (word.length > longest) longest= word.length
    })
    hintList.push(firstHint.join(' '))
    for (let index = 0; index < longest; index++) {
        let hint = []
        words.map((word, index2) => {
            if (word.length >= index) {
                hidden[index2].splice(index, 1, word[index])
                hint.push(hidden[index2].join(''))
                return hidden[index2] 
            } else hint.push(word)
        })
        hintList.push(hint.join(' '))
    }
    return hintList

    //Better solution
    let words2 = input.split(' ')
    let longest2 = 0
    let returnList = []
    words2.map((word) => {
        if (word.length > longest2) longest2= word.length
    })
    for (let index = 0; index <= longest2; index++){
        let list = []
        words2.map(word => {
            const chartsLeft = ((word.length - index <= 0) ? 0 : word.length - index)
            const displayWord = word.slice(0, index) + '_'.repeat(chartsLeft)
            list.push(displayWord)
        })
        returnList.push(list.join(' '))
    }
    return returnList
}

console.log(grantTheHint("Mary Queen of Scots"))
console.log(grantTheHint("The Life of Pi"))
*/

/* Kata 11 
const WordList = {
    and: 'and',
    the: 'the',
    of: 'of',
    in: 'in'
}
const correctTitle = input => {
    let newInput = input.replace(/[,]/g, ", ").split(' ')
    newInput = newInput.filter(word => !(word === ''))
    newInput = newInput.map(word => {
        if (WordList.hasOwnProperty(word.toLowerCase())) return word.toLowerCase()
        if (word.includes('-')) {
            newWord = []
            word = word.split('-')
            word.map(shorWord => {
                if (WordList.hasOwnProperty(shorWord.toLowerCase())) newWord.push(shorWord.toLowerCase())
                else newWord.push(shorWord.charAt(0).toUpperCase() + shorWord.substring(1).toLowerCase())
            })
            return newWord.join('-')
        }
        return (word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    }).join(' ')
    if (newInput.slice(-1) !== '.') newInput += '.'
    console.log(newInput);

}
correctTitle("jOn SnoW, kINg IN thE noRth") // ➞ "Jon Snow, King in the North." 
correctTitle("sansa stark,lady of winterfell.") // ➞ "Sansa Stark, Lady of Winterfell." 
correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.") // ➞ "Tyrion Lannister, Hand of the Queen."
correctTitle("firstName sUrNAme, the-short-term-idea queen")
*/

/* Kata 12 */

const getLength = (input) => {
    let length = 0
    const recursive = (list) => {
        list.forEach(element => {
            if (typeof element === 'object') {
                try {
                    return recursive(element)
                } catch (error) {
                    length++ 
                }
            }
            else length++            
        });
    }
    recursive(input)
    console.log(length);
    //One line answer
    //return input.flat(Infinity).length
}

getLength([1, [2, 3]])// ➞ 3
getLength([1, [2, [3, 4]]]) // ➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]) // ➞ 6
getLength([1, [2], 1, [2], 1]) // ➞ 5
getLength([]) //0
getLength([1, [2, 9], 1, [2], 1]) // ➞ 5
getLength([1, {JS: 'yeah!'}]) //2
getLength([3, 'Yeah!']) //2