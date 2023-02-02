
function main() {
    let televisions =
    {
        "arrTel": document.querySelectorAll('.tel')
    }
    televisions.arrTel.forEach((e) => {

        // Parameters of the function checkRating(current_tel, numberOfRatnig)
        checkRating(e, parseInt(e.children.item(7).innerHTML.replace("/", "").replace("5", "")));

    });

    avg(televisions.arrTel);

    check_tel(televisions.arrTel);

    btns_buy_and_delete();
}

// Mission 2
function checkRating(current_tel, numberOfRatnig) {
    numberOfRatnig >= 4 ? current_tel.style.background = "#5cb85c" :
        numberOfRatnig < 2 ? current_tel.style.background = "#DC143C" :
            current_tel.style.background = "white";
}

// Mission 3
function avg(arr_tel) {
    let sum = 0;
    // Average for all TVs
    arr_tel.forEach(e => {
        sum += parseInt(e.children.item(5).innerHTML);
    });
    return sum / arr_tel.length;
}


// Mission 4
function check_tel(arr_tel) {
    // This function returns the position in the table of the TV with the most profitable offer

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



// Mission 5
function btns_buy_and_delete() {

    // Collect the buy buttons
    let btn_buy = {
        "btns": document.querySelectorAll('.btn_buy')
    }

    //Performs a loop that will give all the buy buttons the option to open a Modal to buy
    btn_buy.btns.forEach(e => {
        e.addEventListener("click", () => {
            document.getElementById("name_store").value = e.parentNode.parentNode.children.item(2).innerHTML;
            document.getElementById("price").value = e.parentNode.parentNode.children.item(5).innerHTML;
        })
    });


    // Collect the delete buttons
    let btn_del = {
        "btns": document.querySelectorAll('.btn_del')
    }
    //Performs a loop that will give all buttons the option to delete while pressed
    btn_del.btns.forEach(e => {
        e.addEventListener("click", () => {
            e.parentNode.parentNode.remove();
        });
    });
}

main();
