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

      $('#kaydet').on( 'click', function () {
            if(adim.value!=="" && soyadim.value!=="" && yasim.value!==""){
               table.row.add( [
                  adim.value,
                  soyadim.value,
                  yasim.value,
              ] ).draw( true ); 
            }
      
     } );
     $('#example tbody').on( 'click', 'tr', function (e) {
      if ( $(this).hasClass('selected') ) {
          $(this).removeClass('selected');
         //  console.log(e.target.parentElement.childNodes[0].textContent,e.target.parentElement)

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
      
      }
  } );

  $('#button').click( function (e) {
        
         table.row('.selected').remove().draw( false );

         Storage.tiklananKisiSilStorage(isimal,soyadal);
         fonk.textbosalt();
  } );
  $('#guncelleme').click( function (e) {

      fonk.guncelleme(adim.value,soyadim.value,yasim.value,isimal,soyadal);
} );
   // Otomatik click içim
   // $('#addRow').click();
   // $('#example tbody').on( 'click', 'tr', function (e) {
   //     $(this).toggleClass('selected');
   //     console.log(e.target);
   // } );
} );