const myName = 'Abul Bashar';
const yourName = "Naymur Rahman Nabil";
const specialName = `Doesn't Exist`

// const multiLine = 'this is my first line. '
// 'this is my second line'
// 'this is my third line.'
// 'this is my fourth line'



const multiLine2 = 'this is my first line. \n' +
    'this is my second line.\n' +
    'this is my third line.\n' +
    'this is my fourth line';

// console.log(multiLine2);


const multiLineNew = `
this is my first line.
this is second.
third.
fourth.
`
// console.log(multiLineNew);



const friends = ['nabil', 'sayem', 'sifat', 'imran', 'tushar']
const friendCount = 5;

const oldHeader = '<h3 class = "friend">friend-5</h3>'
const oldHeader2 = '<h3 class = "friend">friend- ' + friendCount + '</h3>'

const newHeader = `<h3 class = "friend">friend-${friendCount}</h3>`;
const newHeader2 = `<h3 class = "friend">friend-${friends.length} has money ${((friends.length + 25) * 5)}</h3> his name is babun he lives in dhaka.`;
// console.log(newHeader2);



const first = 'Abul';
const last = 'Bashar';

const fullOld = first + ' ' + last;
const fullNew = `his name is: ${first} ${last}, he is a confident young man.he is almost 24 years old `

// console.log(fullOld);
console.log(fullNew);

