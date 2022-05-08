// document.body.style.display = "none"

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

let dateCell = document.querySelectorAll('.date');

function comp() {
  const d = new Date();
  let time = d.getTime();
  for (let index = 0; index < dateCell.length; index++) {
    const element = dateCell[index];
    const element2 = dates[index];

    let timeSubject = element2.getTime();
    const milInDay = 1000 * 60 * 60 * 24;
    let diff = Math.floor(timeSubject - time);
    let daysLeft = Math.floor(diff / milInDay + 1);
    console.log(daysLeft);
    if (daysLeft > 1) {
      element.innerHTML = `${Math.floor(daysLeft)} days`;
    } else if (daysLeft === 1) {
      element.innerHTML = `${Math.floor(daysLeft)} day`;
    } else {
      element.innerHTML = `Over`;
    }
  }
}
comp();
setInterval(comp, 5000);
// dateCell.style.display="none";
// document.getElementById('demo').innerHTML = Math.floor(daysLeft);
