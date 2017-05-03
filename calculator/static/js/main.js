$(document).ready(function() {

    var result;
    var num;
    var nums = [];
    var operators = [];
    
    $(".num").click(function() {

	if (num === undefined)
	    num = $(this).text();
	else
	    num = num + $(this).text();
	
	$("#calcDisp").html("<span>"+num+"</span>");

    });

    $("#clear").click(function() {
	clear();
	$("#calcDisp").html("");
    });

    $(".operator").click(function() {
	storeNum();
	
	operator = $(this).text();
	operators.push(operator);

	$("#calcDisp").html("");
	num = undefined;
    });

    $("#equals").click(function() {
	storeNum();
	
	result = nums.reduce(function(arr, curr) {
	    var currOp = operators.shift();
	    if (currOp === "+")
		return arr + curr;
	    else if (currOp === "-")
		return arr - curr;
	    else if (currOp === "x")
		return arr * curr;
	    else if (currOp === "/")
		return arr / curr;
	    else
		return arr;
	});

	$("#calcDisp").html("<span>" + result + "</span>");
	
	clear();
    });

    function clear() {
	operator = undefined;
	num = undefined;
	operators = [];
	nums = [];
    }

    function storeNum() {
	if (num.indexOf(".") > -1)
	    num = parseFloat(num);
	else
	    num = parseInt(num);
	nums.push(num);
    }
    
});
