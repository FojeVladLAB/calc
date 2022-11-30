function result(){
    var num_1, num_2, result;

    num_1=document.getElementById('n1').value;
    num_1=parseInt(num_1);

    num_2=document.getElementById('n2').value;
    num_2=parseInt(num_2);

    if (document.getElementById("+").checked) {
        var result = num_1 + num_2
        document.getElementById("out").innerHTML = result;
    } 
    else if (document.getElementById("-").checked) {
        var result = num_1 - num_2
        document.getElementById("out").innerHTML = result;
    } 
    else if (document.getElementById("*").checked) {
        var result = num_1 * num_2
        document.getElementById("out").innerHTML = result;
    } 
    else if (document.getElementById("/").checked) {
        var result = num_1 / num_2
        document.getElementById("out").innerHTML = result;
    }
}
