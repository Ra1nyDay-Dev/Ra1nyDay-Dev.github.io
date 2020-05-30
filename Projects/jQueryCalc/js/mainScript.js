MainProgram = () => {
  
  //инициализация аргументов
  let x = $("#argument1");
  let y = $("#argument2");
  let z = $("#argument3");
  let operation1 = $("#operation1");
  let operation2 = $("#operation2");
  // обнуление аргументов
  $("input").val("");
  $("select").val(" ");

  //метод проверки числа на целое

  	isInteger = (num) => {

      return (num ^ 0) === num;
	}

	//метод округляет нецелые числа до 2 знаков после запятой и выводит бесконечность при делении на 0
	checkErrorsAndRound = (result) => {
	  if (isInteger(result) == false) { 
 	  	result = result.toFixed(2);
 	  }
 	  if (result==(2/0) || result==(-2/0) || result=="NaN") {
 	  	result = "∞"
	  }
	  return result;
	}

	// метод добавления текста в "вывод" и подсчета 
 	addTextAtResultField = () => {
 	  $("input, select").on("input", function() { // в момент ввода
 	 	// Помещать все вводимые символы в поле "Вывод"
 	  	$("#result").text(x.val() + " " + operation1.val()+ " " + y.val() + " " + operation2.val() + " " + z.val());
 	  	
 	  	// Но, если заполнены только Х,У и выбрана только первая операция - добавить равно и посчитать результат (X + операция + У)
 	  	if (x.val()!="" && operation1.val()!=" " && y.val()!="" && operation2.val()==" " && z.val()=="") { 	  	  
	 	  	let result = eval(x.val() + "" + operation1.val() + "" + y.val());
	 	  	$("#result").append(" = " + checkErrorsAndRound(result));
 	  	// Иначе, если заполнены только Y, Z и выбрана только вторая операция - добавить равно и посчитать результат (У + операция + Z)
 	  	} else if ( y.val()!="" && operation2.val()!=" " && z.val()!="" && operation1.val()==" " && x.val()=="") {
	 	  	  result = eval(y.val() + "" + operation2.val() + "" + z.val());
	 	  	  $("#result").append(" = " + checkErrorsAndRound(result));

 	  	//Иначе, если заполнены только X и Z и выбрана первая операция - добавить равно и посчитать результат (Х + операция1 + Z)    
 	  	} else if (x.val()!="" && (operation1.val()!==" " && operation2.val()==" ") && z.val()!="" && y.val()=="") {
	 	  	result = eval(x.val() + "" + operation1.val() + "" + z.val());
	 	  	$("#result").append(" = " + checkErrorsAndRound(result));

	 	//Иначе, если заполнены только X и Z и выбрана первая операция - добавить равно и посчитать результат (Х + операция2 + Z)    
 	  	} else if (x.val()!="" && (operation2.val()!==" " && operation1.val()==" ") && z.val()!="" && y.val()=="") {
 	  		result = eval(x.val() + "" + operation2.val() + "" + z.val());
	 	  	$("#result").append(" = " + checkErrorsAndRound(result));
	 	
	 	//Иначе, если заполнены все поля, вывести результат  	  
	  	} else if (x.val()!="" && operation1.val()!=" " && y.val()!="" && operation2.val()!=" " && z.val()!="") {  	
 	  		result = eval(x.val() + "" + operation1.val() + "" + y.val() + operation2.val() + z.val());
	 	  	$("#result").append(" = " + checkErrorsAndRound(result));

	 	//Иначе, если заполнены все аргументы, но выбрана только первая операция - посчитать результат (х + операция1 + у)
 	  	} else if (x.val()!="" && operation1.val()!=" " && y.val()!="" && operation2.val()==" " && z.val()!="") {
	 	  	let result = eval(x.val() + "" + operation1.val() + "" + y.val());
	 	  	$("#result").text(x.val() + " " + operation1.val() + " " + y.val() +" = " + checkErrorsAndRound(result));
	 	
	 	//Иначе, если заполнены все аргументы, но выбрана только первая операция - посчитать результат (y + операция2 + Z)
 	  	} else if (x.val()!="" && operation1.val()==" " && y.val()!="" && operation2.val()!=" " && z.val()!="") {
	 	  	let result = eval(x.val() + "" + operation2.val() + "" + y.val());
	 	  	$("#result").text(x.val() + " " + operation2.val() + " " + y.val() + " = " + checkErrorsAndRound(result));
	 	}
 	  		
	 	 	  if (x.val() > 100000000 || y.val() > 100000000 || z.val() > 100000000 || x.val() < -100000000 || y.val() < -100000000 || z.val() < -100000000) {
 	  	$("#result").html("<p style =\"font-size:36px\">Боюсь, моя страничка не выдержит такие большие числа</p>");
 	  }

 	  }); // end onInput function()	


	  // Событие клика по кнопке "Возвести в квадрат"
 	  $("#degree").on("click",function(){
 	  	if (x.val()=="" && y.val()=="" && z.val()=="") {
 	  		alert("Введите хотя бы одно число");
 	  	} else {
 	  	$("#result").text(Math.pow(x.val(),2)+" ; " +Math.pow(y.val(),2)+" ; " + Math.pow(z.val(),2));
 	  	}
 	  });

 	  // Событие клика по кнопке "Сумма квадратов"
 	  $("#сalculateDegrees").on("click",function(){
 	  	if (x.val()=="" && y.val()=="" && z.val()=="") {
 	  		alert("Введите хотя бы одно число");
 	  	} else {
 	  	result = eval(Math.pow(x.val(),2) + Math.pow(y.val(),2) + Math.pow(z.val(),2));
	 	$("#result").text(Math.pow(x.val(),2) + " + " + Math.pow(y.val(),2) + " + " + Math.pow(z.val(),2) + " = " + checkErrorsAndRound(result));
 	  	}
 	  });

	  // Событие клика по кнопке "Квадратный корень"
 	  $("#sqrt").on("click",function(){
 	  	if (x.val()=="" && y.val()=="" && z.val()=="") {
 	  		alert("Введите хотя бы одно число!");
 	  	} else if (x.val()<0 || y.val()<0 || z.val()<0) {
 	  		alert("Числа должны быть положительные")
 	  	} else {
 	  		let xsqrt = eval(Math.sqrt(x.val()));
 	  		xsqrt = checkErrorsAndRound(xsqrt);
 	  		let ysqrt = eval(Math.sqrt(y.val()));
 	  		ysqrt = checkErrorsAndRound(ysqrt);
 	  		let zsqrt = eval(Math.sqrt(z.val()));
 	  		zsqrt = checkErrorsAndRound(zsqrt);

 	  		$("#result").text(xsqrt +" ; "+ ysqrt +" ; " + zsqrt);
 	  	}
 	  });

 	  	  // Событие клика по кнопке "Cумма корней"
 	  $("#сalculateSqrts").on("click",function(){
 	  	if (x.val()=="" && y.val()=="" && z.val()=="") {
 	  		alert("Введите хотя бы одно число");
 	  	} else if (x.val()<0 || y.val()<0 || z.val()<0) {
 	  		alert("Числа должны быть положительные")
 	  	} else {
 	  		let xsqrt = eval(Math.sqrt(x.val()));
 	  		xsqrt = checkErrorsAndRound(xsqrt);
 	  		let ysqrt = eval(Math.sqrt(y.val()));
 	  		ysqrt = checkErrorsAndRound(ysqrt);
 	  		let zsqrt = eval(Math.sqrt(z.val()));
 	  		zsqrt = checkErrorsAndRound(zsqrt);
 	  		let result = eval(Math.sqrt(x.val()) + Math.sqrt(y.val()) + Math.sqrt(z.val()));
 	  		$("#result").text(xsqrt +" + "+ ysqrt +" + " + zsqrt + " = " + checkErrorsAndRound(result));
 	  	}
 	  });

 	  	  // Событие клика по кнопке "Считать со скобками между Х и У"
 	  $("#xyParentheses").on("click",function(){
 	  	if (x.val()=="" || y.val()=="" || z.val()=="" || operation1.val()==" " || operation2.val()==" ") {
 	  		alert("Все поля и операции должны быть заполнены");
 	  	} else {
 	  		result = eval("(" + x.val() + "" + operation1.val() + "" + y.val()+ ")" + operation2.val() + z.val());
	 	  	$("#result").text("(" + x.val() + "" + operation1.val() + "" + y.val()+ ")" + operation2.val() + z.val() + " = " + checkErrorsAndRound(result));
 	  	}

 	  	});


 	  	  // Событие клика по кнопке "Считать со скобками между Х и У"
 	  $("#yzParentheses").on("click",function(){
 	  	if (x.val()=="" || y.val()=="" || z.val()=="" || operation1.val()==" " || operation2.val()==" ") {
 	  		alert("Все поля и операции должны быть заполнены");
 	  	} else {
 	  		result = eval(x.val() + "" + operation1.val() + "" + "(" + y.val()+ "" + operation2.val() + z.val() +")");
	 	  	$("#result").text(x.val() + "" + operation1.val() + "" + "(" + y.val()+ "" + operation2.val() + z.val() +")" + " = " + checkErrorsAndRound(result));
 	  	}

 	  	});

 	  $("#return").on("click",function(){
 	  	 $("input").trigger("input");
 	  });



 	} // end addTextAtResultField() 

 	// Вызов функций

 	addTextAtResultField();

 
 } // end MainProgram() code

$("document").ready(MainProgram);