const kisiler=new Kisial();
//submit butonu click evebti çağrılıyor
fonk.addEventListener();
const dataobje=JSON.parse(localStorage.getItem("kisinesnesi"));


const dizi=[];

dataobje.forEach((index) => {
   dizi.push(Object.values(index));
});



$(document).ready(function datatable() {
   let isimal;
   let soyadal;
   let yasal;
   let guncellemetr;
  let table=$('#example').DataTable( {
       data: dizi,
       columns: [
           { title: "Ad" },
           { title: "Soyad" },
           { title: "Yaş" }
       ],      
      //  "initComplete": function () {
      //      var api = this.api();
      //      api.$('td').click( function () {
      //          api.search( this.innerHTML ).draw();
      //      } );
      //  }
   } );

      $('#kaydet').on( 'click', function (e) {
            if(adim.value!=="" || soyadim.value!=="" || yasim.value!==""){
               table.row.add( [
                  adim.value,
                  soyadim.value,
                  yasim.value,
              ] ).draw( true ); 
            }
            fonk.textbosalt();
            e.preventDefault();
             
     } );
     $('#example tbody').on( 'click', 'tr', function (e) {
      if ( $(this).hasClass('selected') ) {
          $(this).removeClass('selected');
        

         fonk.textbosalt();
      }
      else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
          isimal=e.target.parentElement.childNodes[0].textContent;
          soyadal=e.target.parentElement.childNodes[1].textContent;
          yasal=e.target.parentElement.childNodes[2].textContent;
          adim.value=isimal;
          soyadim.value=soyadal;
          yasim.value=yasal;
          guncellemetr=e.target.parentElement;
          console.log(e.target.parentElement);
      }
  } );

  $('#button').click( function (e) {
        
         table.row('.selected').remove().draw( false );

         Storage.tiklananKisiSilStorage(isimal,soyadal);
         fonk.textbosalt();
  } );
  $('#guncelleme').click( function (e) {
   if(adim.value!=="" || soyadim.value!=="" || yasim.value!==""){
      fonk.guncelleme(adim.value,soyadim.value,yasim.value,isimal,soyadal);
      guncellemetr.childNodes[0].textContent=adim.value;
      guncellemetr.childNodes[1].textContent=soyadim.value;
      guncellemetr.childNodes[2].textContent=yasim.value;
   }

      // var temp = table.row(5).data();
      // temp[0] = 'Tom';
      // table.row(5).data(temp).draw();
} );
   // Otomatik click içim
   // $('#addRow').click();
   // $('#example tbody').on( 'click', 'tr', function (e) {
   //     $(this).toggleClass('selected');
   //     console.log(e.target);
   // } );
} );