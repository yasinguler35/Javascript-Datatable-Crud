class Storage{

    static storageal(){
        let kisiler;
        if (JSON.parse(localStorage.getItem("kisinesnesi")===null)) {
            kisiler=[];
        } else {
            kisiler=JSON.parse(localStorage.getItem('kisinesnesi'));
        }
        return kisiler;
    }
    
    static storagekaydet(kisinesnesi){
        let kisial=this.storageal();
        kisial.push(kisinesnesi);
        localStorage.setItem("kisinesnesi",JSON.stringify(kisial));
    }
        
    static tiklananKisiSilStorage(ad,soyad) {
        let kisisil=this.storageal();
        kisisil.forEach(function(element,index) {
            if (element.ad===ad && element.soyad===soyad) {
                kisisil.splice(index,1);
            }
        });
    
        localStorage.setItem("kisinesnesi",JSON.stringify(kisisil));
    }
    static tiklananKisiGuncelleStorage(isimal,soyadal,yasal,sorguisim,sorgusoyad) {
        let kisiguncelle=this.storageal();
        kisiguncelle.forEach(function(element,index) {
            if (element.ad===sorguisim && element.soyad===sorgusoyad) {
                console.log({ad:isimal,soyad:soyadal,yas:yasal});
                kisiguncelle[index]={ad:isimal,soyad:soyadal,yas:yasal};
            }
        });
    
        localStorage.setItem("kisinesnesi",JSON.stringify(kisiguncelle));
    }

}