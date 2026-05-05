// def promenljivih i konst.
let PRODUCT1_NAME = "Kurs gitare";
let PRODUCT1_PRICE = 4500;
let PRODUCT1_QTY = 1;

let PRODUCT2_NAME = "Napredni akordi";
let PRODUCT2_PRICE = 5500;
let PRODUCT2_QTY = 0;

let VAT_RATE = 0.2;
let CURRENCY = "EUR";
let USD_PER_EUR= 1.16;
let RAW_COUPON = "6MLP7LOVE";
//ime,cena itd
console.log("ime 1 je : " + typeof PRODUCT1_NAME);
console.log("cena 1 je: " + typeof PRODUCT1_PRICE);
console.log("kolicina 1 je: " + typeof PRODUCT1_QTY);
console.log("coupon code 1 je: " + typeof RAW_COUPON);


let iznos = 0; 

function dodato(cena) {
    iznos += cena; 
    console.log("Jos: " + cena + ". Cena sada je: " + iznos);
}

dodato(10);
dodato(25);
dodato(50);

//kad se otvori korpa
function korpaopn() {
    alert("vaš racun je: $" + iznos);
}


function normalizeCoupon(code) {
    let cist_kod = code.trim();
    let v_k = cist_kod.toUpperCase();
    return v_k;
}

function validateAndNotify() {
    let kodint=document.getElementById('promo-input').value;
    let pravi =normalizeCoupon(kodint);
    
    if (pravi === RAW_COUPON) {
        alert("Uspesno primenjen kupooonn!.");
    } else {
        alert(" Nevažeći kod :( ");
    }
}

function login(email, password) {

    let mailcist= email.trim();
    let cistpass= password.trim();

    if (mailcist === "admin" && cistpass === "admin") {
        return true;
    } else {
        return false;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let lgnforma =document.getElementById('login-form');
    
    if (lgnforma) {
        lgnforma.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let mailint = document.getElementById('user-email').value;
            let upassint = document.getElementById('user-pass').value;

            //provera
            if (login(mailint, upassint)) {
                alert("Uspešna prijava!");
                window.location.href = "proizvodi.html";
            } else {
                alert("Pogrešni podaci!");
            }
        });
    }

    // srculence
    let heartBtn = document.getElementById('theme-button');
    if (heartBtn) {
        heartBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }
});