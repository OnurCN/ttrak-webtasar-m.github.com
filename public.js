function chck()
{
    var a = document.getElementById("ad");
    var sa = document.getElementById("soyad");
    var ep = document.getElementById("eposta").value;
    var aciklama = document.getElementById("acik").value;
    
    var len = a.value.length;
    var len2 = sa.value.length;
    if(len < 3)
    {
        alert("Adınızın uzunluğu 3 karakterden az olamaz");
    }
    if(len2 < 3)
    {
        alert("Soyadınızın uzunluğu 3 karakterden az olamaz");
    }

    var dizi = new Array();

    var say = ep.indexOf("@");

    if(say == -1)
    {
        alert("Lütfen doğru bir şekilde epostanızı giriniz !");
    }
    else
    {
        dizi = ep.split("@");
        
        if(dizi[0] == "hotmail.com" || dizi[0] == "gmail.com" || dizi[0] == "outlook.com")
        {
            alert("Lütfen doğru bir şekilde epostanızı giriniz !");
        }
        else if(dizi[1] == "hotmail.com" || dizi[1] == "gmail.com" || dizi[1] == "outlook.com")
        {
            alert("Gönderiniz kaydedildi.");
        }
        else
        {
            alert("Lütfen doğru bir şekilde epostanızı giriniz !");
        }
    }
}
var sayac = 1;
function ac()
{
    var x = document.getElementById("su-menu");
    switch(sayac)
    {
        case 1:x.style.visibility="visible";x.style.opacity=1;sayac++;break;
        case 2:x.style.visibility="hidden";x.style.opacity=0;sayac--;break;
    }
    
}