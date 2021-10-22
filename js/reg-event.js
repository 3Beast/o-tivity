function setup(){

    let btnSubmit = document.getElementById("btn");
    btnSubmit.addEventListener("click", handleSubmit);

    let inpEvname = document.getElementById("eventname");
    let inpType = document.getElementById("type");
    let inpOrg = document.getElementById("org");
    let inpDate = document.getElementById("date");
    let inpCap = document.getElementById("capacity");

    function handleSubmit() {

       let evname = inpEvname.value;
        let type = inpType.value;
        let org = inpOrg.value;
        let date = inpDate.value;
        let cap = inpCap.value;
        let event = {name:evname, type:type, organizer:org, date:date, cap:cap};

        window.localStorage.setItem('event', JSON.stringify(event));
    }
}