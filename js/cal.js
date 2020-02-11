function add()
{
    var n1=parseFloat(document.getElementById('n1').value);
    var n2=parseFloat(document.getElementById('n2').value);
    var r;
    r=n1+n2;
    document.getElementById('result').innerHTML=r;
}
function mult()
{
    var n1=parseFloat(document.getElementById('n1').value);
    var n2=parseFloat(document.getElementById('n2').value);
    var r;
    r=n1*n2;
    document.getElementById('result').innerHTML=r;
}
function div()
{
    var n1=parseFloat(document.getElementById('n1').value);
    var n2=parseFloat(document.getElementById('n2').value);
    var r = n1/n2;
    document.getElementById('result').innerHTML=r;
}
function sub()
{
    var n1=parseFloat(document.getElementById('n1').value);
    var n2=parseFloat(document.getElementById('n2').value);
    var r = n1-n2;
    document.getElementById('result').innerHTML= r;
}