function appear(){
    document.getElementById("fact").style.display = "block";
    document.getElementById("more").style.display = "none";
}

var d = new Date();
var h = d.getHours();
var greet = document.getElementById("greet");
if (h > 6 && h < 10)
{
    greet.innerHTML = "上午好";
}else if(h >= 10 && h < 14)
{
    greet.innerHTML = "中午好";
}else if(h >= 14 & h < 18)
{
    greet.innerHTML = "下午好";    
}else if(h >= 18 & h < 22)
{
    greet.innerHTML = "晚上好";    
}else
{
    greet.innerHTML = "夜深了";    
}