function transformString(text) {
    let transformedText = text;
  
    // Check for divisibility by 15 (both operations)
    if (text.length % 15 === 0) {
      transformedText = transformedText.split("").reverse().join(""); 
      transformedText = transformedText.replace(/./g, (char) => char.charCodeAt(0));
      // Check for divisibility by 5 (replace with ASCII codes)
    } else if (text.length % 5 === 0) {
      transformedText = transformedText.replace(/./g, (char) => char.charCodeAt(0));
      // Check for divisibility by 3 (reverse)
    } else if (text.length % 3 === 0) {
      transformedText = transformedText.split("").reverse().join("");
    }
  
    return transformedText;
  }
  
  // Example usage
  console.log(transformString("Hamburger")); 
  console.log(transformString("Pizza"));
  console.log(transformString("Chocolate Chip Cookie")); 