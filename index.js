class Formatter {
  //add static methods here
  
  static capitalize(rep) {
    return rep.charAt(0).toUpperCase() + rep.slice(1);
  }

  static sanitize(characters) {
    return characters.replace(/[^a-zA-Z0-9\-\'\s]/g, '')
  }

  static titleize(firstCaps) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = firstCaps.split(' ');
    const titleizedWords = words.map((word, index) => {
      const lowerCaseWord = word.toLowerCase();
      if (index === 0 || !exceptions.includes(lowerCaseWord)) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    });

    return titleizedWords.join(' ');
  }

}