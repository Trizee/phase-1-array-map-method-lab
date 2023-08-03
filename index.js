const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased(){
//   return tutorials.map((x) => {
//     const caps = x.charAt(0).toUpperCase()
//     const rest = x.slice(1)
//     return caps + rest
//   })
// }


function titleCased(){
  return tutorials.map((line) => {
    const split = line.split(" ")
    const first = split.map((x) => {
      const caps = x.charAt(0).toUpperCase()
      const rest = x.slice(1)
      return caps + rest
    })
    const answer = first.join(" ")
    return answer
  })

}

