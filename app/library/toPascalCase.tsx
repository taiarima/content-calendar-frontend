export function toPascalCase(str: string) {
    return str
      .toLowerCase() // Convert to lowercase
      .split("_") // Split the string into an array of words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(""); // Join all the words to form a PascalCase string
  }