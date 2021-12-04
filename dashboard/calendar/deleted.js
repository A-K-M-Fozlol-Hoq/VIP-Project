const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const today = new Date();
const [date, setDate] = useState(today);
const [day, setDay] = useState(date.getDate());
const [month, setMonth] = useState(date.getMonth());
const [year, setYear] = useState(date.getFullYear());
const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  
const today = new Date();
let date = today;
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let startDay= getStartDayOfMonth(date);

// useEffect(() => {
    
//   }, [date]);
function changedDate (){
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    startDay =getStartDayOfMonth(date);
}
function getStartDayOfMonth(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startDate === 0 ? 7 : startDate;
}

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const days = isLeapYear(year) ? DAYS_LEAP : DAYS;