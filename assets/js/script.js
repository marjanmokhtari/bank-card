
let inpnum = document.getElementById('inpnum')
let numcard = document.getElementById('numcard')
let cvv2 = document.getElementById('cvv2')
let cvv2box = document.getElementById('cvv2box')
let date1 = document.getElementById('date1')
let date2 = document.getElementById('date2')
let datacard1 = document.getElementById('datacard1')

// ********* add number card
inpnum.addEventListener("keyup", (e) => {

  if (e.keyCode != 8) {
    if ((inpnum.value).length < 25) {
      if (
        (inpnum.value).length == 4 ||
        (inpnum.value).length == 11 ||
        (inpnum.value).length == 18
      ) {
        inpnum.value += ' - '
      }
    }
    // ********focus cvv2
    else {
      cvv2.focus()
    }
  }
  // ***********delet space and dash
  else {
    if (
      (inpnum.value).length == 7 ||
      (inpnum.value).length == 14 ||
      (inpnum.value).length == 21
    ) {
      inpnum.value = inpnum.value.slice(0, (inpnum.value.length) - 3)

    }
  }

  // *********add card number to card
  numcard.value = inpnum.value;

});

cvv2.addEventListener('keyup', () => {

  let cv = cvv2.value
  if (cv.length <= 3) {
    cvv2box.innerHTML = cv

  } else {
    cvv2.value = cv.slice(0, 3)
  }
  // ******* focus date 1

  if ((cvv2.value).length > 2) {
    date1.focus()
  }

})

// ************* date1 **************
date1.addEventListener('keyup', () => {
  let dat = date1.value

  if (dat.length <= 2) {
    datacard1.value = dat
  } else {
    date1.value = dat.slice(0, 2)
    date2.focus()
  }

})

// ************* date2 **************


date2.addEventListener('keyup', () => {
  let date = date2.value
  if (date.length <= 2) {
    datacard2.value = date
  } else {
    date2.value = date.slice(0, 2)
  }
})
// *************************************
// ********* clear data ****************

document.getElementById('btn').addEventListener('click',()=>{

  cvv2.value=''
  date1.value=''
  date2.value=''
  inpnum.value=''


})