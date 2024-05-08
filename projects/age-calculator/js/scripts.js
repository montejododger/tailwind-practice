const ageForm = document.getElementById('ageForm');
const agebtn = document.getElementById('agebtn');

const yearsNum = document.getElementById('years-nums');
const monthsNum = document.getElementById('months-nums');
const daysNum = document.getElementById('days-nums');


ageForm.addEventListener('submit', howOld);

function howOld(e) {
    e.preventDefault();

    const currentDate = new Date();

    const formData = new FormData(ageForm);

    const day = formData.get('day');
    const month = formData.get('month');
    const year = formData.get('year');


    const birthdate = new Date(`${year},${month},${day}`);


    const birthYear = birthdate.getFullYear();
    const birthMonth = birthdate.getMonth() + 1;
    const birthDay = birthdate.getDate();

    const currYear = currentDate.getFullYear();
    const currMonth = currentDate.getMonth() + 1;
    const currDay = currentDate.getDate();

    let ageYears = currYear - birthYear;
    let ageMonths = currMonth - birthMonth;
    let ageDays = currDay - birthDay;

    // Adjust for negative months or days
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    if (ageDays < 0) {
        ageDays += new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).getDate();
        ageMonths--;
    }
	// ageYears === "" ? "" : monthsNum.innerText = ageYears;
	yearsNum.innerText = ageYears;
	monthsNum.innerText = ageMonths
	daysNum.innerText = ageDays;
}
