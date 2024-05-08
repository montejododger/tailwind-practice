const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const agebtn = document.getElementById('agebtn');

agebtn.addEventListener('click', howOld);

function howOld(e) {
    e.preventDefault;

    const dayVal = day.value;
    const monthVal = month.value;
    const yearVal = year.value;

    const currentDate = new Date();
    const birthdate = new Date(`${yearVal}-${monthVal}-${dayVal}`);

    let ageYears = currentDate.getFullYear() - birthdate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthdate.getMonth();
    let ageDays = currentDate.getDay() - birthdate.getDay();

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

	console.log(ageYears, ageMonths, ageDays);
}
