// definere nåværende dato og tid
const date = new Date();

const renderCalendar = () => {
    date.setDate(1);
    date.setDate(1);

    // definere måned dager
    const monthDays = document.querySelector('.days');

    // definere siste dagen av månedene
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // definere dagen før siste dagen
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    //definere første dagen i månedene
    const firstDayIndex = date.getDay();

    // definere siste dagen i månedene
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    // definere dagene som kommer i neste måned
    const nextDays = 7 - lastDayIndex - 1;

    //definere måneder
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];


    // dette vil vise nåværende måned
    document.querySelector('.date h1').innerHTML
        =months[date.getMonth()];

    //dette vil vise paragrafet som viser datoen
    document.querySelector('.date p').innerHTML
        =new Date().toDateString();

    //lar dager være en empty string
    let days = "";

    // forloop med x som kondisjon, for å displaye første dagen av hver måned
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    //forloop med i som kondisjon, for å displaye dagene
    for(let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate()&&date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`; // eks: x += 10 <=> x = x + 10 //
        }
    }

    //forloop med j som kondisjon, for å displaye upcoming days fra neste måned
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`
        monthDays.innerHTML = days;
    }
};

// når du trykker på venstre-pil, så vil du komme til forrige måned
document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})

// når du trykker på høyre-pil, vil du komme til neste måned
document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar()
})

renderCalendar()

//Disclaimer: Har ikke kodet inn år, så det er bare 2021, men om du klikker på høyre-pil og får januar,
// så er dagene fulgt etter 2022. Har ikke kodet inn år 2022 (eller 2020) fordi jeg er usikker på hvordan
// jeg skal klare å definere overgangen fra December -> Jan, eller Dec <- Jan, og deretter kode
// inn at år skal skifte mellom disse to parameterne.