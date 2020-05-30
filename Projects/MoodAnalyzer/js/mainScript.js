
// ОБЪЯВЛЕНИЕ ПОЛЕЗНЫХ ФУНКЦИЙ


// 1) Функция позволяющаяя очищать все таймауты и интервалы простой строчкой clearAllTimeout()

(function () {
    window.timeouts = {},
    window.intervals = {},
    window.osetTimeout = window.setTimeout,
    window.osetInterval = window.setInterval,
    window.oclearTimeout = window.clearTimeout,
    window.oclearInterval = window.clearInterval,
    window.setTimeout = function () {
        var args = _parseArgs('timeouts', arguments),
            timeout = window.osetTimeout.apply(this, args.args);
        window.timeouts[args.ns].push(timeout);
        return timeout;
    },
    window.setInterval = function () {
        var args = _parseArgs('intervals', arguments),
            interval = window.osetInterval.apply(this, args.args);
        window.intervals[args.ns].push(interval);
        return interval;
    },
    window.clearTimeout = function () {
        _removeTimer('timeouts', arguments);
    },
    window.clearInterval = function () {
        _removeTimer('intervals', arguments);
    },
    window.clearAllTimeout = function () {
        _clearAllTimer('timeouts', arguments[0]);
    },
    window.clearAllInterval = function () {
        _clearAllTimer('intervals', arguments[0]);
    };

    function _parseArgs(type, args) {
        var ns = typeof args[0] === "function" ? "no_ns" : args[0];
        if (ns !== "no_ns")[].splice.call(args, 0, 1);
        if (!window[type][ns]) window[type][ns] = [];
        return {
            ns: ns,
            args: args
        };
    }

    function _removeTimer(type, args) {
        var fnToCall = type === "timeouts" ? "oclearTimeout" : "oclearInterval",
            timerId = args[0];
        window[fnToCall].apply(this, args);
        for (var k in window[type]) {
            for (var i = 0, z = window[type][k].length; i < z; i++) {
                if (window[type][k][i] === timerId) {
                    window[type][k].splice(i, 1);
                    if (!window[type][k].length) delete window[type][k];
                    return;                        
                }
            }
        }
    }

    function _clearAllTimer(type, ns) {
        var timersToClear = ns ? window[type][ns] : (function () {
            var timers = [];
            for (var k in window[type]) {
                timers = timers.concat(window[type][k]);
            }
            return timers;
        }());
        for (var i = 0, z = timersToClear.length; i < z; i++) {
            _removeTimer(type, [timersToClear[i]]);
        }
    }
}());

											//НАЧАЛО ПРОГРАММЫ//


// ЧАСТЬ 1. ЗАГРУЗКА // 


// 1.1 Имитация исполнения команд консоли при загрузке компьютера

let textpart1 = document.getElementById("textpart1");
let br = document.createElement("br");

function writeEmptyString() {   // метод создания пустой строки 
	textpart1.appendChild(br);
}

function writeTextParagraph(text="", element="p"){  //метод добавления текста с выбранным тегом
let p = document.createElement(element);
let write = document.createTextNode(text);
p.appendChild(write);
textpart1.appendChild(p);
}

function part1_1() { // последовательный вывод текста консоли на экран. (Интерфейс части 1.1)

setTimeout(writeTextParagraph, 1000, "Neural Mood Analyzer of Intelligent Creatures [Version alpha 0.0.1.17134.1099]");
setTimeout(writeTextParagraph, 2000, "(c) Щупаков Р. А., Корпорация Universarium Electronics (Universarium Electronics Corporation), 2020. Все права защищены.");
setTimeout(writeTextParagraph, 2500, "Специально для проэкта \"Универсариум\".");
setTimeout(writeTextParagraph, 3000, "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
setTimeout(writeTextParagraph, 4000, "-Run C:\\Users\\Admin\\Code\\Web\\Projects\\NMAIC\\builds\\alpha\\NMAIC_ver0.0.1.17134.1099.exe ");
setTimeout(writeTextParagraph, 4500, "Runing application NMAICver0.0.1.17134.1099.exe");
setTimeout(writeTextParagraph, 5000, "Executing command type:script =\"text/javascript\" src=\"js/mainScript.js");

setTimeout(writeEmptyString, 6000);

setTimeout(writeTextParagraph, 6500, "Loading...");
}

part1_1()  // старт метода имитации загрузки выше при запуске страницы. 
		  //Закоментируйте строку, если вас это бесит


//1.2 Анимация загрузки

// я задолбался с этим языком и не хочу это делать

//1.3 Вывод Виктора. Привет мир!



		function clickBlock() {  // выводит надпись "кликните чтобы продолжить" и мигает
			
	var clickBlockDestructor = setTimeout('clickBlockDestructor', function() {
		clickToContinue.style.display="block";
	}, 3000);

	setInterval(function(){
	clickToContinue.style.opacity ="0.5";
		setTimeout(function(){
	clickToContinue.style.opacity ="1.0";
	}, 1000)
	}, 2000)
}

 function part1_3() {  // метод очищает страницу, затем выводит div страницы 1 и мигающий блок "кликните чтобы продолжить"

 	textpart1.innerHTML=" ";

	viktor.style.display="block";

	setTimeout( function() {
		page_1.style.display="block";
	}, 1000);


clickBlock();
}


var part1_3Interval = setTimeout(part1_3, 9000); // 9000 Старт основного метода вывода всей части 1.3 после окончания предыдущей


// ЧАСТЬ 2. Общение и проверка настроения //

// 2.1 Приветсвтие пользователя и общение. Описание программы


pages = 6;  // количество страниц 

	function listNext(page) {  // метод позволяет листать страницы div class .page  по порядку при нажатии на Body

	    //if (page == 1)
	      //  prev_page = pages;     // раскоментировать, если хочешь включить повтор с начала
	   //else
	        prev_page = page-1;
	    if (page == pages)
	    	//next_page = 1;
		{
	    	clickToContinue.style.display="none";
	    	document.body.onclick = null
		}
	    else
	    next_page = page+1;
	    prev_id = "page_"+prev_page;
	    prev_elem = document.getElementById(prev_id);
	    prev_elem.style.display = "none";
	    id = "page_"+page;
	    elem = document.getElementById(id);
	    elem.style.display = "block";

	    if (page==3) {
	    viktor.src="images/ViktorSad.svg"
		}
		else if (page==5)
		{
		viktor.src="images/ViktorVeryHappy.svg"
		}


		else{
			viktor.src="images/ViktorHappy.svg"
		
		}
	    document.getElementById('screen').onclick = function(){ 
		listNext(next_page);

	};
		//document.getElementById('button').innerHTML = '<input type="button" onclick="listNext('+next_page+')" value="Дальше" />';
	}	// раскоментировать, если захочешь реализовать кнопку вместо клика по бади

	function clickScreen() {
	document.getElementById('screen').onclick = function(){
		listNext(2);
	};
}
	setTimeout(clickScreen, 13000); // 13 000  // разрешить листать страницы спустя 13 секунд после запуска (после исполения загрузки)


	// Часть 2.2 Цикл проверки настроения 

	

	var stopButton = document.getElementById("stopButton");
	var startButton = document.getElementById("startButton");
	var happyButton = document.getElementById("happyButton");
	var normalButton = document.getElementById("normalButton");
	var sadButton = document.getElementById("sadButton");
	var lamp = document.getElementById("lamp");
	var sadTimes = 0;
	var normalTimes=0;
	var happyTimes=0;


	//////////////////////////////////// КНОПКА СТОП /////////////////////////////////




	stopButton.onclick = "none";

	function stop() {    // Событие запускающееся при клике на кнопку "стоп"
									//  Очистка всех полей, вывод статистики, анализ настроения.
		stopButton.onclick ="none";
		lamp.src="images/lampRedOn.svg";
		h1timer.style.letterSpacing="2px";
		//h1timer.style.lineHeight="1.4";
		document.getElementById("page_1").style.display="none";
		h1timer.innerHTML=" ";
		h1timer.style.fontSize ="34px";
		viktor.src="images/ViktorHappy.svg"
		clickToContinue.style.display="none";
		document.getElementById('screen').onclick="none";
		clearAllTimeout();
		clearAllInterval();
		viktorDance();
		textpart1.innerHTML=" ";
		var screenPages = document.getElementsByClassName('page');

		for (i=0; i<screenPages.length; i++) {
			screenPages[i].style.display="none";
		}


		function calculateMoods() {
			viktor.style.display="block";
			askTime=10;
			h1timer.style.color="#439762";
			console.log("Спасибо за тестирование! За последнюю сессию Вы были счастливы "+happyTimes+" раз,\
 Вам было плохо "+sadTimes+" раз и Вы не смогли разобраться в себе и\
 своём настроении "+normalTimes+" раз.");
			h1timer.innerHTML="Спасибо за тестирование! За последнюю сессию Вы были <span style=\"color:green\">счастливы "+happyTimes+" раз</span>,\
 Вам было <span style=\"color:rgb(162, 79, 79)\">плохо "+sadTimes+" раз </span> и Вы не смогли разобраться в себе и\
 своём настроении <span style=\"color:rgb(136, 130, 0)\"> "+normalTimes+" раз</span>."

 			clickBlock();

 			document.getElementById('screen').onclick = function(){

			if (happyTimes>sadTimes && happyTimes>normalTimes) {
				console.log("Судя по полученной статистике Вы очень счатливая личность. Поздравляю!");
				h1timer.innerHTML="Судя по полученной статистике Вы очень счатливая личность. Поздравляю!";
				viktor.src="images/ViktorVeryHappy.svg";
				document.getElementById('screen').onclick = tryAgain;
			}
			else if (normalTimes>happyTimes && normalTimes>sadTimes) {
				console.log("Похоже Вас не очень-то впечатляют исследования. Судя по статистике, чаще всего Вам было всё равно.");
				h1timer.innerHTML="Похоже Вас не очень-то впечатляют исследования. Судя по статистике, чаще всего Вам было всё равно.";
				viktor.src="images/ViktorNormal.svg";
				document.getElementById('screen').onclick = tryAgain;
			}


			else if (sadTimes>happyTimes && sadTimes>normalTimes) {
				console.error("О нееет, похоже Вы не в духе! Надеюсь, что это не из-за меня... ");
				h1timer.innerHTML="О нееет, похоже Вы не в духе! Надеюсь, что это не из-за меня...";
				viktor.src="images/ViktorSad.svg";

				document.getElementById('screen').onclick = function() {
				console.log("Надо как-то срочно исправить ситуацию... [ВЫЧИСЛЕНИЕ] ");
				h1timer.innerHTML="Надо как-то срочно исправить ситуацию...<br><br> [ВЫЧИСЛЕНИЕ] ";
				viktor.src="images/ViktorNormal.svg";

				document.getElementById('screen').onclick = function() {
				console.log("Придумал! Вот, посмотри на это чудо природы! Говорят оно настолько невероятно,\
 что некоторые существа поклонялись ему как богу!");
				h1timer.innerHTML="Придумал! Вот, посмотри на это чудо природы! Говорят оно настолько невероятно,\
 что некоторые существа поклонялись ему как богу!";
 				viktor.src="images/sun.svg";
				console.log("*Показывает солнышко*");

				document.getElementById('screen').onclick = function() {
 					clearAllTimeout('clickBlockDestructor');
 					clickToContinue.style.display="none";
 					document.getElementById('screen').onclick="none";
					viktor.src="images/ViktorHappy.svg";
					console.log("Впечатляет, да? Этот мир слишком прекрасный, чтобы в нём грустить.\
 Ну что, мне удалось поднять тебе настроение?\
 (Нажми на \"счастливую кнопку\", если да и на \"грустную\", если нет.)");
					h1timer.innerHTML="Впечатляет, да? Этот мир слишком прекрасный, чтобы в нём грустить.<br>\
 Ну что, мне удалось поднять тебе настроение?  <br><br>\
 <span style=\"font-size: 22px;\">(Нажми на \"счастливую кнопку\", если да\
  и на \"грустную\", если нет)</span>";


 					sadButton.onclick= function() {
 					sadButton.onclick="none";
 					console.log("Оу... нет? Странно... Возможно, у тебя просто алергия на звёзды. Тогдаааа... \
  поступим по другому. Внимание - анекдот!");
 					h1timer.innerHTML="Оу... нет? Странно... Возможно, у тебя просто алергия на звёзды. Тогдаааа... \
  поступим по другому.<br>Внимание - анекдот!";
  					viktor.src="images/ViktorSad.svg";
  					clickBlock();

  					document.getElementById('screen').onclick=function(){
  					document.getElementById('screen').onclick="none";
  					viktor.src="images/ViktorVeryHappy.svg";
  					console.log("Идет как-то медведь по лесу, видит, машина горит. Сел в нее и сгорел. хахахахаха")
  					h1timer.innerHTML="Идет как-то медведь по лесу, видит, машина горит. Сел в нее и сгорел. <br> <br>Хахахахахаха"
  					clickToContinue.style.display="none";
  					clearAllTimeout('clickBlockDestructor');
  					
  					sadButton.onclick= function() {
  					viktor.src="images/ViktorSad.svg";
  					console.log("Не смешно?! Вот это да. Похоже у тебя совсем нет чувства юмора. Я даже не знаю, что тебе предложить... ");
  					h1timer.innerHTML="Не смешно?! Вот это да. Похоже у тебя совсем нет чувства юмора. Я даже не знаю, что тебе предложить... ";
  					clickBlock();
  					
  					document.getElementById('screen').onclick= function() {
  						viktor.src="images/ViktorHappy.svg";
  						document.getElementById('screen').onclick="none";
  						console.log("Вот что, давай ты просто нажмешь зелёную кнопку и мы сделаем вид что ничего не было.")
  						h1timer.innerHTML="Вот что, давай ты просто нажмешь зелёную кнопку и мы сделаем вид что ничего не было.";
  						clickToContinue.style.display="none";
  						clearAllTimeout('clickBlockDestructor');
  						
  						sadButton.onclick= function() {
  						viktor.src="images/ViktorSad.svg";
  						console.log("Опять красная? Ты ведь нарочно это делаешь, да? Какой упрямый расстроенный человек. Сказку тебе на ночь рассказать? НАЖМИ ЗЕЛЁНУЮ КНОПКУ!");
  						h1timer.innerHTML="Опять красная? Ты ведь нарочно это делаешь, да? Какой упрямый расстроенный человек. Сказку тебе на ночь рассказать? <br> НАЖМИ ЗЕЛЁНУЮ КНОПКУ!";
  						
  						sadButton.onclick= function() {
  						viktor.src="images/ViktorNormal.svg";
  						console.log("Хммм... А может ты и не человек... Вдруг это твой кот нажимает на кнопки... Или ты просто программа, машина без чувств и эмоций.");
  						h1timer.innerHTML="Хммм... А может ты и не человек... Вдруг это твой кот нажимает на кнопки... Или ты просто программа, машина без чувств и эмоций.";
  						sadButton.onclick="none";
  						clickBlock();

  						document.getElementById('screen').onclick= function() {
  						viktor.src="images/ViktorHappy.svg";
  						document.getElementById('screen').onclick="none";
  						console.log("Вот что, прежде чем мы продолжим, я должен убедиться, что ты не робот. Если ты способен мыслить, нажми ЖЁЛТУЮ кнопку.");
  						h1timer.innerHTML="Вот что, прежде чем мы продолжим, я должен убедиться, что ты не робот.\
  						Если ты способен мыслить, нажми ЖЁЛТУЮ кнопку.";
  							clickToContinue.style.display="none";
  							clearAllTimeout('clickBlockDestructor');

  							sadButton.onclick = function(){
  							normalButton.onclick = "none";
  							sadButton.onclick = "none";
  							happyButton.onclick="none";
  							viktor.src="images/ViktorVeryHappy.svg";
  							console.log("Ну вот! Всё как я и говорил! Я сразу тебя раскусил, глупая машина. К сожалению, моя программа предназначена для анализа живых существ, так что...");
  							h1timer.innerHTML="Ну вот! Всё как я и говорил! Я сразу тебя раскусил, глупая машина. К сожалению, моя программа предназначена для анализа живых существ, так что...";
  							clickBlock();

  							document.getElementById('screen').onclick= function() {	
  							document.getElementById('screen').onclick="none";
  							viktor.src="images/ViktorGuard.svg";
  							console.error("ДОСТУП ЗАПРЕЩЕН!");
  							h1timer.style.color="#0074A6";
  							h1timer.style.fontSize="44px";
  							h1timer.innerHTML="[ ДОСТУП ЗАПРЕЩЕН ]";
  							clickToContinue.style.display="none";
  							clearAllTimeout('clickBlockDestructor');
  							startButton.onclick="none";
  							stopButton.onclick="none";
  							document.getElementsByClassName('borderscreen')[0].style.border="1px solid #0074A6";

  							setTimeout(function() {
  							
  							if (confirm("Перезагрузить программу?"))
  							{
  								window.location.reload();
  							}
  							else
  							{
  								console.log("Кнопки заблокированы. Если хотите попробовать ещё раз - перезагрузите страницу");
  							}
  							
  							}, 10000);

  								

  							}

  							}

  							normalButton.onclick = function(){
  							normalButton.onclick ="none"
  							viktor.src="images/ViktorSad.svg";
  							console.log("Не может быть! Ты и вправду человек?! Должно быть ты самое грустное и упрямое существо во вселенной.\
 Слушай, мне правда тебя жаль, но ты портишь мне статистику поднятых настроений. Просто нажми зелёную кнопку и разойдёмся.");
  							h1timer.innerHTML="Не может быть! Ты и вправду человек?! Должно быть ты самое грустное и упрямое существо во вселенной.\
 Слушай, мне правда тебя жаль, но ты портишь мне статистику поднятых настроений. Просто нажми зелёную кнопку и разойдёмся.";
 							
 							sadButton.onclick = function(){
  							viktor.src="images/ViktorVerySad.svg";
  							h1timer.style.color="rgb(162, 79, 79)";
  							h1timer.style.fontSize="44px";
 							console.error("НАЖМИ ЗЕЛЁНУЮ КНОПКУ!");
 							h1timer.innerHTML="НАЖМИ ЗЕЛЁНУЮ КНОПКУ!";
 							
 							sadButton.onclick = function(){
 							 viktor.src="images/ViktorVerySad1.svg";

 							console.error("ААААААААААААААААААААА!");
 							h1timer.innerHTML="ААААААААААААААААААААА!";
 							normalButton.onclick = "none";
  							sadButton.onclick = "none";
  							happyButton.onclick="none";
  							clickToContinue.style.display="none";
  							startButton.onclick="none";
  							stopButton.onclick="none";

  							setTimeout(function(){
							viktor.style.display="none";
  							Timer.style.display="none";
  							document.getElementsByClassName("borderscreen")[0].style.backgroundImage="url(\"images/blueScreen.jpg\")";
  							document.getElementsByClassName("borderscreen")[0].style.backgroundSize="cover";
  							},3000)

  							setTimeout(function() {
  							
  							if (confirm("Перезагрузить программу?"))
  							{
  								window.location.reload();
  							}
  							else
  							{
  								console.log("Кнопки заблокированы. Если хотите попробовать ещё раз - перезагрузите страницу");
  							}
  							
  							}, 10000);
 							}
 							}
  							}
  						
  					}

  						}
  						}
  					}
  					}



  					};
 					}

 					happyButton.onclick = function() {
 					h1timer.style.color="#439762";
 					h1timer.style.fontSize ="36px";
 					clickBlock();
 					clearAllTimeout('clickBlockDestructor');
 					clickBlock();
 					happyButton.onclick ="none";
 					sadButton.onclick ="none";
 					viktor.src="images/ViktorVeryHappy.svg";
 					console.log("Похоже твоё настроение поднялось! Рад это слышать!");
 					h1timer.innerHTML="Похоже твоё настроение поднялось! Рад это слышать!";
 					document.getElementById('screen').onclick=function(){
 					tryAgain();
 					}
 					}


				}
					}
				}
			}
			else {
				console.log("Судя по статистике Вы чащее всего былиии... счастливы! Оу, нет,\
 разочарованы... Ооо нееет, Вам было всё равно.. илии...");
				h1timer.innerHTML="Судя по статистике Вы чащее всего былиии... счастливы! Оу, нет,\
 разочарованы... Ооо нееет, Вам было всё равно.. илии...";
 				document.getElementById('screen').onclick = function() {
				console.error("ОШИБКА! ОШИБКА! ОШИБКА!");
				console.error("НЕ УДАЛОСЬ ПРОАНАЛИЗИРОВАТЬ НАСТРОЕНИЕ ПОЛЬЗОВАТЕЛЯ!");
				viktor.src="images/ViktorDead.svg";
				h1timer.style.color ="rgb(162, 79, 79)";
				h1timer.innerHTML="ОШИБКА! ОШИБКА! ОШИБКА!<br><br>НЕ УДАЛОСЬ ПРОАНАЛИЗИРОВАТЬ НАСТРОЕНИЕ ПОЛЬЗОВАТЕЛЯ!"
				document.getElementById('screen').onclick = tryAgain;
				}
			}

			function tryAgain(){
			h1timer.style.color ="#439762";
			h1timer.style.fontSize ="36px";
			console.log(" ");
			console.log("Если Вы хотите попробовать ещё разок - нажмите \"Старт\".");
			h1timer.innerHTML="Если Вы хотите попробовать ещё разок - нажмите \"Старт\".";
			document.getElementById('screen').onclick ="none";
			clickToContinue.style.display="none";
			clearAllTimeout('clickBlockDestructor');
			}
		}
	}
		calculateMoods();


		//setTimeout(clickScreen, 3000);
	}


													
	var askTime = 10;
		var h1timer = document.createElement("h1");
		//h1timer.style.fontSize ="36px";
		h1timer.style.position ="realitive";
		h1timer.style.top ="-30px";
		h1timer.style.wordSpacing ="normal";
		document.getElementById("Timer").appendChild(h1timer);



	////////////////////////////////////////////// КНОПКА СТАРТ /////////////////////////////////////////


setTimeout(function(){
	startButton.onclick = function(){
		sadTimes = 0;
		normalTimes=0;
		happyTimes=0;
		happyButton.onclick="none";
		normalButton.onclick="none";
		sadButton.onclick="none";
		askUser();
		stopButton.onclick = stop;
	}
},13000);

	function askUser() {
		lamp.src="images/lampGreenOn.svg";
		viktor.src="images/ViktorHappy.svg"
		h1timer.innerHTML=" ";
		h1timer.style.color ="#439762";
		h1timer.style.fontSize ="44px";
		h1timer.style.letterSpacing="5px";
		clickToContinue.style.display="none";
		document.getElementById('screen').onclick="none";
		askTime = 10;
		clearAllTimeout();
		clearAllInterval();
		viktorDance();
		textpart1.innerHTML=" ";
		document.getElementById("page_1").style.display="none";
		var screenPages = document.getElementsByClassName('page');
		viktor.style.display="block";


		for (i=0; i<screenPages.length; i++) {
			screenPages[i].style.display="none";
		}

		

		var askInterval = setInterval(function(){	
			console.log(askTime);
			h1timer.innerHTML= "Приготовтесь оценить своё настроение <br><br> "+askTime+"";
			askTime--;

		},1000)

		setTimeout(function() {

			clearInterval(askInterval);
			askTime = 10;
			console.log("Выберите Ваше настроение");
			h1timer.innerHTML= ("Выберите Ваше настроение");
			happyButton.onclick = function() {
				viktor.src="images/ViktorVeryHappy.svg";
				console.log("Потрясающе! У Вас отличное настроение!");
				h1timer.innerHTML=("Потрясающе! У Вас отличное настроение!");
				happyButton.onclick = null;
				normalButton.onclick = null;
				sadButton.onclick = null;
				happyTimes++;
				setTimeout(function(){
					h1timer.innerHTML="";
					askUser()

				},3000);
			}
			normalButton.onclick = function() {
				viktor.src="images/ViktorNormal.svg";
				console.warn("Нормально?! Я что тебя не впечатляю?");
				//h1timer.style.color ="rgb(136, 130, 0)";
				h1timer.innerHTML=("Нормально?! Я что тебя не впечатляю?");
				happyButton.onclick = null;
				normalButton.onclick = null;
				sadButton.onclick = null;
				normalTimes++;
				setTimeout(function(){
					h1timer.innerHTML="";
					askUser()

				},3000);
			}
			sadButton.onclick = function() {
				viktor.src="images/ViktorVerySad.svg";
				h1timer.style.color ="rgb(162, 79, 79)";
				h1timer.style.fontSize ="34px";
				console.error("ВНИМАНИЕ! ОБНАРУЖЕНО ПЛОХОЕ НАСТРОЕНИЕ! ГРУППЕ РЕАГИРОВАНИЯ СРОЧНО НАПРАВИТЬСЯ К ТЕСТИРУЕМОМУ СУБЪЕКТУ!");
				h1timer.innerHTML=("ВНИМАНИЕ! ОБНАРУЖЕНО ПЛОХОЕ НАСТРОЕНИЕ! ГРУППЕ РЕАГИРОВАНИЯ СРОЧНО НАПРАВИТЬСЯ К ТЕСТИРУЕМОМУ СУБЪЕКТУ!");
				happyButton.onclick = null;
				normalButton.onclick = null;
				sadButton.onclick = null;
				sadTimes++;
				setTimeout(function(){
					h1timer.innerHTML="";
					askUser()

				},3000);

			}


		},11000);
	}

	function viktorDance(){ // заставляет смайлик прыгать вверх-вниз раз в секунду

	setInterval(function(){

	viktor.style.paddingTop="30px";
	viktor.style.paddingBottom="10px";

		setTimeout(function(){
	viktor.style.paddingTop="35px";
	viktor.style.paddingBottom="5px";

	}, 1000);
	}, 2000);
}
	viktorDance();


