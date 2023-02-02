const deadline = "June 1 2023 00:00:00";

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  const date = document.querySelector(id);
  const timeinterval = setInterval(function () {
    var t = getTimeRemaining(endtime)
    date.innerHTML =
      t.days +
      " дней " +
      t.hours +
      " часов " +
      t.minutes +
      " минут " +
      t.seconds +
      " секунд";
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }, 1000);
}

initializeClock(".content__time-сountdown", deadline);



//-----------------------Validation-------------------------------------------------------------

const input = document.querySelector(".footer__container-form-box-input")
const button = document.querySelector(".footer__container-form-button")

button.addEventListener("click", function(e){
  e.preventDefault()
	const mail = input.value
	const regEx = /^\w+(([\.-])?[!#$%&'*+-/=?^_`{|}~]+\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/
	const errorSymbols = /(\w*[<>()@,;:\/"*]+\w*)\@/
	const cyrillic = /[а-яА-Я]/

	const hidden = document.querySelectorAll(".hidden>div")
	hidden.forEach(div => div.classList.add("none"))

	if(mail.match(cyrillic)){
		document.getElementById("m1").classList.remove("none")
	}else{
		if(mail.match(regEx)){
			document.getElementById("m2").classList.remove("none")
		}else if(mail.match(errorSymbols)){
				document.getElementById("m3").classList.remove("none")
		}else{
			document.getElementById("m4").classList.remove("none")
		}
	}
})