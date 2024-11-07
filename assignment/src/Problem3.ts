{/**
## Problem 3
   Create a TypeScript function called countWordOccurrences that accepts a 
   sentence (string) and a word (string). The function should return the number
    of times the word appears in the sentence, ignoring case. Use the simple
    sentence without punctuation as input.
 **/
    function countWordOccurrences(sentence: string, word: string): number {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
    
        const words = lowerCaseSentence.split(" ");
        const result = words.filter(word => word === lowerCaseWord).length;
    
        return result;
    }
    
    console.log(countWordOccurrences("I love typescript", "typescript"));    


}