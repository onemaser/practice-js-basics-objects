const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '28',
        month: '06',
        year: '1985'
    }
}

console.log(Number(user.born.day), Number(user.born.month))

const actuallDate = new Date();
const actuallDay = actuallDate.getDate()
const actuallMonth = actuallDate.getMonth() + 1


if(Number(user.born.day) === actuallDay && Number(user.born.month) === actuallMonth) {
    console.log('Happy birthday!') 
} else {
    console.log('not today')
}