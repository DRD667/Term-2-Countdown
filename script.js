// document.body.style.display = "none"
const d = new Date();
let time = d.getTime();
let dateEnglish = new Date('2022/04/27');
let dateMaths = new Date('2022/05/05');
let dateSanskrit = new Date('2022/05/07');
let dateScience = new Date('2022/05/10');
let dateSSt = new Date('2022/05/14');
let dateHindi = new Date('2022/05/18');
let dateIT = new Date('2022/05/24');
let dates = [
  dateEnglish,
  dateMaths,
  dateSanskrit,
  dateScience,
  dateSSt,
  dateHindi,
  dateIT,
];
// let timeMaths = dateEnglish.getTime();
// const milInDay = 1000 * 60 * 60 * 24;
// let diff = Math.abs(timeMaths - time);
// let daysLeft = diff / milInDay;

for (let index = 0; index < dateCell.length; index++) {
  const element = dateCell[index];
  const element2 = dates[index];
  let timeMaths = dateEnglish.getTime();
  const milInDay = 1000 * 60 * 60 * 24;
  let diff = Math.abs(timeMaths - time);
  let daysLeft = diff / milInDay;
  let dateCell = document.querySelectorAll('.date');
  element.innerHTML = `${Math.floor(daysLeft)} days`;
}
// dateCell.style.display="none";
// document.getElementById('demo').innerHTML = Math.floor(daysLeft);
