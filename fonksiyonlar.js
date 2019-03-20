const adim=document.getElementById("ad");
const soyadim=document.getElementById("soyad");
const yasim=document.getElementById("yas");
const kaydet=document.getElementById("kaydet");

class fonk{

    static kaydetme(e) {
        if (adim.value==="" || soyadim.value==="" || yasim.value==="") {
            uyariVer("danger","Boş geçilemez");

        } else {
            kisiler.ad=adim.value;
            kisiler.soyad=soyadim.value;
            kisiler.yas=yasim.value;
            
            Storage.storagekaydet(kisiler);
      
            uyariVer("success","Kayıt Başarılı");
        }
       e.preventDefault();
    }
    static guncelleme(isimal,soyadal,yasal,sorguisim,sorgusoyad){
        Storage.tiklananKisiGuncelleStorage(isimal,soyadal,yasal,sorguisim,sorgusoyad);
    }
    static addEventListener(){
        kaydet.addEventListener("click",this.kaydetme);
        // guncelle.addEventListener("click",this.guncelleme);
    }
    
    static textbosalt(){
        adim.value="";
        soyadim.value="";
        yasim.value="";
    }
    

}

function uyariVer(type,textcontent){
    const div=document.createElement("div");
    console.log(div);
    const cardBody=document.querySelector(".card-body");
    div.className=`alert alert-${type}`;
    div.textContent=textcontent;
    cardBody.appendChild(div);
    setTimeout(() => {
     div.remove();
 }, 1000);

 }