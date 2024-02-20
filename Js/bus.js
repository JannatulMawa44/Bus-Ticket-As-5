const seats = document.querySelectorAll('.seat_btn')
for (let index = 0; index < seats.length; index++) {
   const seat = seats[index];
   seat.addEventListener('click', function () {

      const seatId = seat.id;
      const seatCheck = seatList.includes(seatId)
      if (seatCheck === false) {
        if (seatCount <= 4) {
          seat.style.backgroundColor = "#1DD100"
            const seatName = seat.querySelector("P").innerText;
            const seatContainer = document.getElementById('seatInfo');

            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            td1.innerText = seatName;
            td2.innerText = "Economy";
            td3.innerText = "550";

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            seatInfo.appendChild(tr)
            document.querySelector(".badge").innerText = seatCount;

            const seatLeft = 8 - seatCount;
            document.getElementById("seatsLeft").innerText = seatLeft;

            totalCost = seatCount * 550;
            document.getElementById("totalPrice").innerText = totalCost;
            document.getElementById("totalPayment").innerText = totalCost;


            seatCount++;

            const seatId = seat.id;

            seatList.push(seatId)
            console.log(seatList)
          } else {
}

   } else {

      }
     })   
}
function disFun(couponElemnt) {

   if (couponElemnt === "NEW15") {
      const discountPrice = totalCost * 0.15;
      return discountPrice;
   } else if (couponElemnt === "Couple 20") {
      const discountPrice = totalCost * 0.2;
      return discountPrice;
   }
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {

   const couponElemnt = document.getElementById("input-field").value;


   if (totalCost === 2200) {
      const couponCheck = couponList.includes(couponElemnt)



      if (couponCheck === true) {


         discountPrice = disFun(couponElemnt);


         const discountRow = document.getElementById('totaldiscount');

         const tr = document.createElement("tr");
         const td1 = document.createElement("td");
         const td2 = document.createElement("td");
         const td3 = document.createElement("td");
         td1.innerText = "Discount Price:";
         td2.innerText = "";
         td3.innerText = discountPrice;

         tr.appendChild(td1)
         tr.appendChild(td2)
         tr.appendChild(td3)
         totaldiscount.appendChild(tr)



         const totalPayment = totalCost - discountPrice;
         document.getElementById("totalPayment").innerText = totalPayment;


         document.getElementById("couponPush").setAttribute("hidden", "")


      } else {
         alert("Invalid")
      }
   } else {

   }

})
let seatCount = 1;
let totalCost = 0;

let seatList = [];
const couponList = ["NEW15", "Couple 20"]

















