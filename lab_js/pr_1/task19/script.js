function camelize(str) {
    return str.split('-')
      .map((word, index) => {
        if (index === 0) {
          return word; 
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(''); 
  }
  
  const str = "my-short-string";
  const camelStr = camelize(str);
  console.log(camelStr);
  