window.addEventListener("scroll", function() {
    const img = document.querySelector("#img > img");
    const footer = document.querySelector("footer");
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
        img.classList.add("hidden");
    } else {
        img.classList.remove("hidden");
    }
});


var getOderTotal = function (customer, lineItems, discountCode) {
    var discountCodeTotal = 0;
    var lineItemsTotal = 0;
    var shippingTotal = 0;
    var texTotal = 0;

    for (var i = 0; i < lineItems.length; i++) {
        var lineItems = line[i];
        lineItemsTotal += lineItems.price * lineItem
    }

}
