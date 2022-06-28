
//`ES1 wydano w terminie 1997-06`
//`ES4 nie zostało wydane`.

const calendarJS = {
    'ES1': '1997-06',
    'ES2': '1998-06',
    'ES3': '1999-12',
    'ES4': null,
    'ES5': '2009-12',
    'ES6': '2015-06',
    'ES7': '2016-06',
    'ES8': '2017-06',
    'ES9': '2018-06',
}

for (const relase in calendarJS){
    const value = calendarJS[relase]
    if(value === null){
        console.log( relase + ' nie zostało wydane')
    } else {
        console.log(relase + ' wydano w terminie ' + calendarJS[relase])
    }
}