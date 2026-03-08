let currentLang = localStorage.getItem("lang") || "ar";

function changeLanguage() {

currentLang = currentLang === "ar" ? "en" : "ar";

localStorage.setItem("lang", currentLang);

applyLanguage();

}

function applyLanguage(){

document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

const home = document.getElementById("nav-home");
const facilities = document.getElementById("nav-facilities");
const packages = document.getElementById("nav-packages");
const help = document.getElementById("nav-help");
const services = document.getElementById("nav-services");
const contact = document.getElementById("nav-contact");

if(currentLang === "ar"){

home.innerText = "الصفحة الرئيسية";
facilities.innerText = "المرافق";
packages.innerText = "الحزم";
help.innerText = "المساعدة";
services.innerText = "خدماتنا";
contact.innerText = "اتصل بنا";

}else{

home.innerText = "Home";
facilities.innerText = "Facilities";
packages.innerText = "Packages";
help.innerText = "Help";
services.innerText = "Services";
contact.innerText = "Contact";

}

}

// تشغيل اللغة عند فتح الصفحة
window.onload = applyLanguage;