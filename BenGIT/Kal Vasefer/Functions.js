/**
 * 
 */
function frontpage()
{
	window.location= "FrontPageExample.html";
}
function secondpage()
{
	window.location="odot.html";
}
function howtouse()
{
	window.location="userguide.html"
}
function regpage()
{
	window.location="register.html";
}
function connectionpage()
{
	window.location="connection.html";
}
function savedetails(username1,Fname,Lname,pw,maildetail)
{
	var input1 = document.getElementById('username1').value;
	var input2 = document.getElementById('Fname').value;
	var input3 = document.getElementById('Lname').value;
	var input4 = document.getElementById('pw').value;
	var input5 = document.getElementById('maildetail').value;
	alert("Register Complete");
	//localStorage.setItem('username', username1);
	//localStorage.setItem('FName', Fname);
	//localStorage.setItem('LName', Lname);
	//localStorage.setItem('pw', pw);
	//localStorage.setItem('email', maildetail)
}
function unitestpages()
{
	if(window.location("register.html")==null)
		return alert("register page error")+false;
	if(window.location("connection.html")==null)
		return alert("connection page error")+false;
	if(window.location("userguide.html")==null)
		return alert("userguide page error")+false;
	if(window.location("FrontPageExample.html")==null)
		return alert("FrontPageExample page error")+false;
}
function unitestuserdetails(username1,Fname,Lname,pw,maildetail)
{
	if (username1 == null)
		return alert("username wrong") + false;
	if (Fname == null)
		return alert("First Name wrong") + false;
	if (Lname == null)
		return alert("Last Name wrong") + false;
	if (pw == null)
		return alert("password Wrong") + false;
	if (maildetail == null)
		return alert("mail wrong") + false;
}
function LionExam()
{
	window.location="LionExam.html"
}
function CheckAnswer(Question,Check)
{
	if (Question == 1) alert("yes")
	else alert("nono")
}