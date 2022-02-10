var countryCode;
var moneda;
var precio_calculado;

const price = 100;// US$


function geoip(json) {

    countryCode = json.country_code

    switch (countryCode) {
        case "GB":
            precio_calculado = 1.5 * price;
            moneda = "GBP";

            break;
        case "ES":
            precio_calculado = 3 * price;
            moneda = "EUR"
            break

        default:

            precio_calculado = price;
            moneda = "USD"
            break;
    }
    
    var priceTag = document.getElementById("pricetag")
    priceTag.innerHTML ="EL PRECIO CALCULADO: "+  precio_calculado + " "+ moneda
}

