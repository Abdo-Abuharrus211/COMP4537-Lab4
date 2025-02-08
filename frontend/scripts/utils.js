/*
   *   Check if input is only alpha (a word).
   */
export function isValidWord(input) {
    const wordRegex = /^[a-zA-Z]+$/; // Regex produced by Perplexity
    return wordRegex.test(input);
}
