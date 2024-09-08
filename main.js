const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const generateNumber = num => {
    return Math.floor(Math.random() * num);
}
  
const displayBeerAdvice = async () => {
    console.log('Generating beer advice for you...');
    console.log('This may take a minute...');
    console.log('There are so many options...');
    console.log('Almost done...');
    await sleep(2000).then(() => { console.log('And voila, here you go:'); } );
    console.log(beerAdvice.join('\n'));    
}

const beerOptions = {
  style: ['New England IPA', 'Stout', 'West Coast IPA', 'Porter', 'Lager'],
  brewery: ['Tree House Brewing', 'Monkish Brewing', 'Equilibrium', 'Trillium', 'Tired Hands', 'Other Half'],
  urgency: ['right now', 'tomorrow', 'next week', 'in a few months']
}
  
// store the result in an array
let beerAdvice = [];
  
// iterate the beer options object and generate a message based on the option
for (let option in beerOptions) {
  let index = generateNumber(beerOptions[option].length)

  switch(option) {
    case 'style':
        beerAdvice.push(`\tThe beer style for you is a ${beerOptions[option][index]}.`)
        break
    case 'brewery':
        beerAdvice.push(`\tThe best brewery for your style is ${beerOptions[option][index]}.`)
        break
    case 'urgency':
        beerAdvice.push(`\tYou need this beer ${beerOptions[option][index]}.`)
        break
    default:
        beerAdvice.push('\tIf you want beer, you\'ve gotta give me some parameters');
  }
}  

displayBeerAdvice();