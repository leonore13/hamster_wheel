// Scripts for the timesheet

function submitForm() {
    //TO-DO: Find a way to save email and time upon submission
    //TO-DO: Make loading image overlay the current
            if ((validateEmail() === true) && (validateTime() === true)) {
            	$("#imagen").show();
            	setTimeout(function() {
              		$("#imagen").hide();
              		location.href="submission-success.html";
           		}, 1000);
            }
            else { 
                return false;
        }
    }
            
function validateEmail() {
    var emailID = document.forms["timesheet"]["email"].value; 
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf("."); 
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID");
            return false;
         } 
         else {
            return true;
         }
    }

function validateTime() {
    //TO-DO: Refine time input to be more specific for hour and minutes
    var timeID = document.forms["timesheet"]["time"].value;
	if (timeID < 24 && timeID >= 0){
         	return true;
         } 
         else {
            alert("Please enter a valid number of hours");
            return false;
     }
}

function getEmail() {   
    var emailID = document.forms["timesheet"]["email"].value;
    return emailID;
}

function getTime() {
    var timeID = document.forms["timesheet"]["time"].value;
    return timeID;
}


