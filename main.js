const pageViews = document.querySelector("#pageViews")
const slider = document.querySelector("#slider")
const value = document.querySelector("#priceValue")
const discount = document.querySelector("#discount")

slider.addEventListener('input', sliderChanged)
discount.addEventListener('change', discountChanged)

let sliderMap = new Map();
sliderMap[1] = ['10K', 8]
sliderMap[2] = ['50K', 12]
sliderMap[3] = ['100K', 16]
sliderMap[4] = ['500K', 24]
sliderMap[5] = ['1M', 36]

function getViews() {
    return sliderMap[slider.value][0]
}

function getPrice() {
    price = sliderMap[slider.value][1]

    if (discount.checked) {
        price -= price * 0.25
    }

    return price
}

function setValues() {
    pageViews.textContent = getViews() + ' pageviews'
    value.textContent = '$' + getPrice() + '.00'
}

function sliderChanged(e) {
    setValues()
}

function discountChanged(e) {
    setValues()
}

setValues()