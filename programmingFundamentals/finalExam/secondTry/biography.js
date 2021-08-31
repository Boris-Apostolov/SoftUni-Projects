function biography(input) {
  let pattern = /[A-z][a-z]+ [A-Z][a-z]+#+(\w+\d{2}|\w+\&\w+\d{2}|\w+\&\w+\&\w+\d{2})[A-Z]\w+ (JSC|Ltd.)/g;
  number = input.shift();

  for (let i = 0; i < number; i++) {
    let name = input[i].match(/[A-z][a-z]+ [A-Z][a-z]+/)
    let position = input[i].match(/#[A-Z][a-z]+&[A-Z][a-z]+&[A-Z][a-z]+|#[A-Z][a-z]+&[A-Z][a-z]+&|#[A-Z][a-z]+&[A-Z][a-z]+|#[A-Z][a-z]+/) + '';
    let company = input[i].match(/[A-Z][a-z]+ (JSC|Ltd.)/)

    if (input[i].match(pattern)) {
      console.log(`${name} is ${(position.split('#').join('').split('&').join(' '))} at ${company[0]}`);
    }
  }
}
biography([4,
  'Tanya Petrova##Dental&Assistants25Health Ltd.',
  'Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.',
  'George Fill####Orderlies99Health JSC',
  'Lily petrova#Speech&Pathology&Assistants60Health Ltd.'])
