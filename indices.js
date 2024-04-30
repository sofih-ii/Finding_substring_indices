
const fruit = ['Apple', 'Orange', 'Pear', 'Grape', 'Apple', 'kiwi']

const target = 'Apple'

function FindingSubstringIndices (array, target){
    const result = {
        includeTargetStrings : false,
        firstOccurrenceIndex :-1,
        lastOccurrenceIndex : -1
    }
    array.forEach((element, index)=>{
        if(element.includes(target)){
            result.includeTargetStrings = true;
            result.firstOccurrenceIndex = array.indexOf(target)
            result.lastOccurrenceIndex =array.lastIndexOf(target)
        }

    })
    return result
}

const result = FindingSubstringIndices(fruit, target)
console.log(result)

