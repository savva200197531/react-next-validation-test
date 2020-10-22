const useCapitalize = (value) => {
  let arr = value.split(' ')
  let result = ''
  if (arr.length >= 2) {
    result = arr[0] + ' ' + arr[1][0] + '. ';
  }
  result = result.toLowerCase().replace(/(?<!\p{Lowercase})\p{Lowercase}/gu, ch => ch.toUpperCase())
  return result
}

export default useCapitalize
