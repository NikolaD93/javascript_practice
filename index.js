const dayjs = require('dayjs');

dayjs.locale('es')

// const date = dayjs('2025-05-19').locale('es').format();
console.log(dayjs('2018-08-08').day() + 1)