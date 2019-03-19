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

}