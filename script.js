
function main() {

    let mytable = `<table class="table">
<thead>
  <th>#</th>
  <th>Icon or image</th>
  <th>Name of the store</th>
  <th>Adress</th>
  <th>City</th>
  <th>Price</th>
  <th>Link of the store</th>
  <th>Rating of the place</th>
  <th>Options</th>
</thead>
<tbody>
  <tr class="tel">
    <th>1</th>
    <td><img src="img/tel1.avif" /></td>
    <td>HOME CENTER</td>
    <td>alon 12</td>
    <td>TEL-AVIV</td>
    <td>3200</td>
    <td>
      <a
        href="https://www.homecenter.co.il/tv-screen/product-page/25193?gclid=CjwKCAiA5sieBhBnEiwAR9oh2lru_CeU6yhWSHQ3Ngbfuh8TdFoKm1UD1iiY0a5mzfPlBttUMUZrdRoC1pMQAvD_BwE"
        class="link-warning">Link to the store website</a
      >
    </td>
    <td>3/5</td>
    <td>
      <button type="button" class="btn_del btn btn-danger">
        delete</button
      >&nbsp<button type="button" class="btn_buy btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
        buy
      </button>
    </td>
  </tr>
  <tr class="tel">
    <th>2</th>
    <td><img src="img/tel2.jpg" /></td>
    <td>Moblieland</td>
    <td>Hamshger 19</td>
    <td>Netanya</td>
    <td>3000</td>
    <td>
      <a
        href="https://www.mobileland.co.il/items/4993240?gclid=CjwKCAiA5sieBhBnEiwAR9oh2viFGQOy_s_WDM1yHfs9ljaNuvU08J0ycFGlqiZCITnzzXmLFMQIuhoC7eQQAvD_BwE"
        class="link-warning">Link to the store website</a
      >
    </td>
    <td>2/5</td>
    <td>
      <button type="button" class="btn_del btn btn-danger">
        delete</button
      >&nbsp<button type="button" class="btn_buy btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
        buy
      </button>
    </td>
  </tr>
  <tr class="tel">
    <th>3</th>
    <td><img src="img/tel3.avif"/></td>
    <td>Masni hashmal</td>
    <td>Sokolov 1</td>
    <td>Jerusalem</td>
    <td>3340</td>
    <td>
      <a
        href="https://www.payngo.co.il/248355.html?gclid=CjwKCAiA5sieBhBnEiwAR9oh2lPZLDXyLBH5Aj9PXmkXzlr5sG4XwwpaSPX56n3gy2O2o59X-GqFUxoCyHMQAvD_BwE"
        class="link-warning">Link to the store website</a
      >
    </td>
    <td>1/5</td>
    <td>
      <button type="button" class="btn_del btn btn-danger">
        delete</button
      >&nbsp<button type="button" class="btn_buy btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
        buy
      </button>
    </td>
  </tr>
  <tr class="tel">
    <th>4</th>
    <td><img src="img/tel4.png" /></td>
    <td>U and U</td>
    <td>Shankin 25</td>
    <td>Haifa</td>
    <td>3100</td>
    <td>
      <a
        href="https://uandu.com.ng/shop/electronics/televisions/hisense-32-fhd-smart-tv-32a4h/"
        class="link-warning">Link to the store website</a
      >
    </td>
    <td>5/5</td>
    <td>
      <button type="button" class="btn_del btn btn-danger">
        delete</button
      >&nbsp<button type="button" class="btn_buy btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
        buy
      </button>
    </td>
  </tr>
</tbody>
</table>
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Modal Header -->
<div class="modal-header">
  <h4 class="modal-title">Purchase page</h4>
</div>
      <!-- Modal body -->
      <div class="modal-body">
          <form id = "purchase" method="post" action="#" onsubmit="return valid_form()">
          <table class="table">
              <tr>
              <td>Name of the store:</td>
              <td><input id ="name_store" type="text"/></td>
              </tr>
              <td>Price:</td>
              <td><input id ="price" type="number"/></td>
              </tr>
              <tr>
              <td>Credit Card number :</td>
              <td><input id="num_card" type="text" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" maxlength="19" placeholder="xxxx-xxxx-xxxx-xxxx" required/></td>
              </tr>
              <tr>
              <td>Date of expiration : </td>
              <td><input id="dateLimte_card" type="text" pattern="[0-9]{2}/[0-9]{4}" maxlength="7" placeholder="MM / YYYY" required/></td>
              </tr>
              </table>
          </form>
       
        
        
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="submit" form="purchase" class="btn btn-success">Send</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>`

    // Add table
    document.body.innerHTML = mytable;


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
