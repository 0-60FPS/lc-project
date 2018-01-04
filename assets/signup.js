$("#submitButton").on("click", function() {
	var array = [["#firstname", "first name"], ["#lastname", "last name"],
				["input[name='grade']:checked", "grade"], ["#email", "email"],
				["#joinReason", "reason for joining"]];
	var fillCheck = checkFilledIn(array);
	
	if (fillCheck == true) {
		var dataObj = {
			name: $("#firstname").val() + " " + $("#lastname").val(),
			grade: $("input[name='grade']:checked").val(),
			email: $("#email").val(),
			interestJoin: $("#joinReason").val(),
			clubExpect: $("#clubExpect").val()
		}
		$.ajax({
			type: "POST",
			url: "/test",
			data: dataObj,
			success: function() {
				console.log("Successfully send data")
			},
			dataType: "json"
		});
		console.log(dataObj);
	}

	
});

// Give array of required questions
function checkFilledIn(array) {
	var length = array.length,
		i,
		j,
		errorArray = [];
	for (i = 0; i < length; i++) {
		if (!$(array[i][0]).val()) {
			errorArray.push(array[i][1]);
		}
	}
	if (errorArray.length !== 0) {
		for (j = 0; j < errorArray.length; j++) {
			if (j == 0) {
				$("#error").html("Missing: " + errorArray[j]);
			} else {
				$("#error").append(", " + errorArray[j]);
			}
		}
	} else {
		return true;
	}
}