function validate()
{
 var username=document.getElementById("username").value;
 var spouse=document.getElementById("spousename").value;

 var errorusername=document.getElementById("errorusername");
 var errorspouse=document.getElementById("errorspouse");

 var i;
 if(username.length==0)
 {
     errorusername.innerHTML="<font color=red>Please enter a valid username</font>";
     i=false;
     return false;
 }
 else
 {
    errorusername.innerHTML=" ";
    i=true;
 }
if(spouse.length==0)
{
    errorspouse.innerHTML="<font color=red>Please enter a valid spouse name</font>";
    i=false;
    return false;
}
else
{
    errorspouse.innerHTML=" ";
    i=true;
}

if(i==true)
{
    change();
}
else
{
    ;
}
}

function mygender(gender)
{
    document.getElementById("acq_gender").innerHTML="<h2>is : "+gender+"</h2>";
}

function mycomment(comments)
{
    document.getElementById("comment_details").innerHTML="<h2> is : "+comments+"</h2>";
}

function change()
{   var name=document.getElementById("name_details");
    var gender_details=document.getElementById("gender_details");
    var like_details=document.getElementById("like_details");
    
    var username=document.getElementById("username").value;
    
    name.innerHTML="<h2>Congratulations you have entered the details with Name: "+username+"</h2>";
    gender_details.innerHTML="<h2>Gender <h2>";
    like_details.innerHTML="<h2>Your Comment </h2>";
    
}
