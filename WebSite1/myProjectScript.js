
console.log("salam");
var a = 3;
console.log(a);
a="did you see that" + a;
console.log(a);
const changeText = () => {
    document.getElementById("footer").innerHTML = "this is a test";
};

for(i=0;i<10;i++)
{
    console.log("testloop" + i);
}
console.log(i);
var textDivs= document.getElementsByClassName("textDiv");
textDivs[2].innerHTML = "salam"
for(i=0;i<textDivs.length; i++)
{
    textDivs[i].innerHTML+= "salam salam";
}
var about_status = "none";
function toggleHide() {
    if(document.getElementById("about").style.display != "none")
    {
        about_status= document.getElementById("about").style.display;
        console.log(about_status);
        document.getElementById("about").style.display = "none";
    }

    else {
        document.getElementById("about").style.display = about_status;
        console.log(about_status +"1");
    }

console.log("test");

}