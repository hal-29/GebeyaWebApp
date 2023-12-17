const queryParser = str => {
   let keyValue = str
      .slice(1)
      .split('&')
      .map(str => str.split('='))
   return Object.fromEntries(keyValue)
}

export default queryParser
