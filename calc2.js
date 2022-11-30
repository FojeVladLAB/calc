function result(){
    var num_1, num_2, work, result;

    num_1=document.getElementById('n1').value;
    num_1=parseInt(num_1);

    num_2=document.getElementById('n2').value;
    num_2=parseInt(num_2);

    work=document.getElementById('operator-1').value;
    switch (work){
        case"+":
            result=num_1+num_2;
            break
        case"-":
            result=num_1-num_2;
            break
        case"*":
            result=num_1*num_2;
            break
        case"/":
            result=num_1/num_2;
            break
    }

    document.getElementById('out').innerHTML=result;
}
function increment1()
{
    var value = parseInt(document.getElementById('n1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
        document.getElementById('n1').value = value;
}
function decrement1()
{
    var value = parseInt(document.getElementById('n1').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
        document.getElementById('n1').value = value;
}
function increment2()
{
    var value = parseInt(document.getElementById('n2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
        document.getElementById('n2').value = value;
}
function decrement2()
{
    var value = parseInt(document.getElementById('n2').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
        document.getElementById('n2').value = value;
}