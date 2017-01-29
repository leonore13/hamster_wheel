// Scripts for the timesheet
function submitForm() {
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
    var timeID = document.forms["timesheet"]["time"].value;
	if (timeID < 24 && timeID >= 0){
         	return true;
         } 
         else {
            alert("Please enter a valid number of hours");
            return false;
     }
}


