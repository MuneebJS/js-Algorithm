var btn = document.getElementById('button');
var salary = document.getElementById('sal');

btn.onclick = function () {
    if (!isNaN(salary.value)) {
        var table = document.getElementById("table1");
        dearness_all = (salary.value * 40) / 100;
        house_rent = parseInt((salary.value * 20) / 100);
        total = +salary.value + +dearness_all + +house_rent;
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var text1 = document.createTextNode(total);
        var text2 = document.createTextNode(dearness_all);
        var text3 = document.createTextNode(house_rent);
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
        table.style.display = "table";
        salary.value = "";
        salary.focus();
    }
    else {
        alert("please write your salary in digits");
    }
}


function add() {
    first = document.getElementById('first').value;
    second = document.getElementById('second').value;
    span1 = document.getElementById('one');
    span2 = document.getElementById('two');
    span1.innerHTML = first;
    span2.innerHTML = second;
    document.getElementById("table2").style.display = 'table';
    document.getElementById('hide-div').style.display = 'block';
    first = "";
    second = "";
}

function change() {
    dum1 = span1.innerHTML;
    dum2 = span2.innerHTML;
    document.getElementById("one").innerHTML = dum2;
    document.getElementById("two").innerHTML = dum1;
}
