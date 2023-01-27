let televisions = document.querySelectorAll('.tel');
televisions.forEach((e) => {
    checkRating(e, parseInt(e.children.item(7).innerHTML.replace("/", "").replace("5", "")));
});
avg(televisions);
console.log(check_tel(televisions))



function checkRating(current_tel, numberOfRatnig) {
    if (numberOfRatnig >= 4) {
        current_tel.style.background = "#5cb85c";
    }
    else if (numberOfRatnig < 2) {
        current_tel.style.background = "#DC143C";
    }
}

function avg(arr_tel) {
    let sum = 0;
    arr_tel.forEach(e => {
        sum += parseInt(e.children.item(5).innerHTML);
    });
    return sum / arr_tel.length;
}

function check_tel(arr_tel) {
    let favTel = arr_tel[0];
    let minPrice = parseInt(arr_tel[0].children.item(5).innerHTML);
    arr_tel.forEach(e => {
        if (parseInt(e.children.item(7).innerHTML) >= 4) {
            if (minPrice > parseInt(e.children.item(5).innerHTML)) {
                minPrice = parseInt(e.children.item(5).innerHTML);
                favTel = e;
            }
        }
    });
    return favTel.children.item(0).innerHTML;
}




function ex5() {
    let btn_buy = document.querySelectorAll('.btn_buy');

    btn_buy.forEach(e => {
        e.addEventListener("click", () => {
            document.getElementById("name_store").value = e.parentNode.parentNode.children.item(2).innerHTML;
            document.getElementById("price").value = e.parentNode.parentNode.children.item(5).innerHTML;
        })
    });

    let btn_del = document.querySelectorAll('.btn_del')

    btn_del.forEach(e => {
        e.addEventListener("click", () => {
            e.parentNode.parentNode.remove();
        });
    });
}

ex5();
