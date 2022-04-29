$(document).ready(function () {
   ////// ATOMO /////////////

   /////// interazione usa /////////
   $("#data1 svg #sagoma_hover_usa").click(
      function () {
         $("#data1 svg #gruppo_usa .st1, #data1 svg #gruppo_usa .st2").css("stroke", "#83f9f3");
         $("#data1 svg #nome_usa").css("display", "block");
         $("#data1 svg #asta_3 .st12, #data1 svg #asta_2 .st12").css("stroke", "#83f9f3");
         $("#data1 svg #asta_3 .st11, #data1 svg #asta_2 .st11").css("fill", "#83f9f3");
         $("#data1 svg #asta_2_sottile .st2, #data1 svg #asta_2_sottile .st10, #data1 svg #asta_3_sottile .st2, #data1 svg #asta_3_sottile .st10").css("stroke", "#83f9f3");
         $("#tabella .voce_tabella_usa").css("background-color", "#83f9f3");

         $("#data1 #cerchio_pallina .st8").css("display", "block");


         $("#data1 svg #gruppo_rus .st1").css("stroke", "#4a4a4a");
         $("#data1 svg #gruppo_rus .st2").css("stroke", "#ededef");
         $("#data1 svg #asta_1 .st12").css("stroke", "#ededef");
         $("#data1 svg #asta_1 .st11").css("fill", "#ededef");
         $("#data1 svg #asta_1_sottile .st2, #data1 svg #asta_1_sottile .st10").css("stroke", "#ededef");
         $("#data1 svg #nome_rus").css("display", "none");
         $("#tabella .voce_tabella_russia").css("background-color", "#1c1c1c");

         $("#data1 svg #gruppo_altri .st1").css("stroke", "#4a4a4a");
         $("#data1 svg #gruppo_altri .st2").css("stroke", "#ededef");
         $("#data1 svg #nome_altri").css("display", "none");
         $("#data1 svg #aste_altri .st12").css("stroke", "#ededef");
         $("#data1 svg #aste_altri .st11").css("fill", "#ededef");
         $("#tabella .voce_tabella_altri").css("background-color", "#1c1c1c");
         $("#data1 #cerchio_pallina .st8").css("display", "block");
      });

   $("#data1 svg #sagoma_hover_usa").hover(
      function () {
         $("#data1 svg #sagoma_hover_usa").css("cursor", "pointer");
      });

   /////// interazione russia /////////
   $("#data1 svg #sagoma_hover_rus").click(
      function () {
         $("#data1 svg #gruppo_rus .st1, #data1 svg #gruppo_rus .st2").css("stroke", "#fc4646");
         $("#data1 svg #nome_rus").css("display", "block");
         $("#data1 svg #asta_1 .st12, #data1 svg #asta_2 .st12").css("stroke", "#fc4646");
         $("#data1 svg #asta_1 .st11, #data1 svg #asta_2 .st11").css("fill", "#fc4646");
         $("#data1 svg #asta_1_sottile .st2, #data1 svg #asta_1_sottile .st10, #data1 svg #asta_2_sottile .st2, #data1 svg #asta_2_sottile .st10").css("stroke", "#fc4646");
         $("#tabella .voce_tabella_russia").css("background-color", "#fc4646");
         $("#data1 #cerchio_pallina .st8").css("display", "block");

         $("#data1 svg #gruppo_usa .st1").css("stroke", "#4a4a4a");
         $("#data1 svg #gruppo_usa .st2").css("stroke", "#ededef");
         $("#data1 svg #asta_3 .st12").css("stroke", "#ededef");
         $("#data1 svg #asta_3 .st11").css("fill", "#ededef");
         $("#data1 svg #asta_3_sottile .st2, #data1 svg #asta_3_sottile .st10").css("stroke", "#ededef");
         $("#data1 svg #nome_usa").css("display", "none");
         $("#tabella .voce_tabella_usa").css("background-color", "#1c1c1c");

         $("#data1 svg #gruppo_altri .st1").css("stroke", "#4a4a4a");
         $("#data1 svg #gruppo_altri .st2").css("stroke", "#ededef");
         $("#data1 svg #nome_altri").css("display", "none");
         $("#data1 svg #aste_altri .st12, #data1 svg #asta_3 .st12").css("stroke", "#ededef");
         $("#data1 svg #aste_altri .st11, #data1 svg #asta_3 .st11").css("fill", "#ededef");
         $("#data1 svg #asta_3_sottile .st2, #data1 svg #asta_3_sottile .st10").css("stroke", "#ededef");
         $("#tabella .voce_tabella_altri").css("background-color", "#1c1c1c");
         $("#data1 #cerchio_pallina .st8").css("display", "block");

      });

   $("#data1 svg #sagoma_hover_rus").hover(
      function () {
         $("#data1 svg #sagoma_hover_rus").css("cursor", "pointer");
      });

   /////// interazione altri /////////
   $("#data1 svg #sagoma_hover_altri").click(
      function () {
         $("#data1 svg #gruppo_altri .st1, #data1 svg #gruppo_altri .st2").css("stroke", "#7E3FE5");
         $("#data1 svg #nome_altri").css("display", "block");
         $("#data1 svg #aste_altri .st12, #data1 svg #asta_1 .st12, #data1 svg #asta_3 .st12").css("stroke", "#7E3FE5");
         $("#data1 svg #aste_altri .st11, #data1 svg #asta_1 .st11, #data1 svg #asta_3 .st11").css("fill", "#7E3FE5");
         $("#data1 svg #asta_1_sottile .st2, #data1 svg #asta_1_sottile .st10, #data1 svg #asta_3_sottile .st2, #data1 svg #asta_3_sottile .st10").css("stroke", "#7E3FE5");
         $("#tabella .voce_tabella_altri").css("background-color", "#7E3FE5");
         $("#data1 #cerchio_pallina .st8").css("display", "block");

         $("#data1 svg #asta_2 .st12").css("stroke", "#ededef");
         $("#data1 svg #asta_2 .st11").css("fill", "#ededef");
         $("#data1 svg #asta_2_sottile .st2, #data1 svg #asta_2_sottile .st10").css("stroke", "#ededef");

         $("#data1 svg #gruppo_usa .st1").css("stroke", "#4a4a4a");
         $("#data1 svg #gruppo_usa .st2").css("stroke", "#ededef");
         $("#data1 svg #nome_usa").css("display", "none");
         $("#tabella .voce_tabella_usa").css("background-color", "#1c1c1c");

         $("#data1 svg #gruppo_rus .st1").css("stroke", "#4a4a4a");
         $("#data1 svg #gruppo_rus .st2").css("stroke", "#ededef");
         $("#data1 svg #nome_rus").css("display", "none");
         $("#tabella .voce_tabella_russia").css("background-color", "#1c1c1c");

      });

   $("#data1 svg #sagoma_hover_altri").hover(
      function () {
         $("#data1 svg #sagoma_hover_altri").css("cursor", "pointer");
      });


   // click slider trattato
   $("#tasto_popolazioni").click(
         function () {
            $("#tasto_nazioni").css("background", "#1c1c1c");
            $("#tasto_nazioni").css("opacity", "1");
            $("div#tasto_nazioni p").css("color", "#ededef");
            $("#tasto_popolazioni").css("background", "#ededef");
            $("#tasto_popolazioni").css("opacity", "1");
            $("div#tasto_popolazioni p").css("color", "#1c1c1c");

            $("#popolazioni").css("display", "block");
            $("#popolazioni").css("opacity", "1");
            $("#nazioni").css("display", "none");
            $("#nazioni").css("opacity", "1");
         });
   $("#tasto_popolazioni").hover(
      function () {
         $("#tasto_popolazioni").css("cursor", "pointer");
       });

   $("#tasto_nazioni").click(
      function () {
         $("#tasto_nazioni").css("background", "#ededef");
         $("#tasto_nazioni").css("opacity", "1");
         $("div#tasto_nazioni p").css("color", "#1c1c1c");
         $("#tasto_popolazioni").css("background", "#1c1c1c");
         $("#tasto_popolazioni").css("opacity", "1");
         $("div#tasto_popolazioni p").css("color", "#ededef");

         $("#nazioni").css("display", "block");
         $("#nazioni").css("opacity", "1");
         $("#popolazioni").css("display", "none");
         $("#popolazioni").css("opacity", "1");
      });

   $("#tasto_nazioni").hover(
      function () {
         $("#tasto_nazioni").css("cursor", "pointer");
      });

      window.setInterval((function () {
         var start = Date.now();
         var textNode = document.createTextNode('0');
         document.getElementById('soldi-spesi').appendChild(textNode);
         return function () {
            textNode.data = Math.floor(((Date.now() - start) / 1000) * 2294.43333).toLocaleString(
               'it-IT', // leave undefined to use the visitor's browser
               // locale or a string like 'en-US' to override it.
               {
                  minimumFractionDigits: 0
               }
            );
         };
      }()), 1000);

      $('.USA').waypoint(function () {
         $('.PALLA_USA').css("opacity", "1");
         $('.LINEA_USA').css("stroke-width", "3px");
         $('.LINEA_USA').css("stroke", "#83F9F3");
      }, {
         offset: '60%'
      });

      $('.CINA').waypoint(function () {
         $('.PALLA_CINA').css("opacity", "1");
         $('.LINEA_CINA').css("stroke-width", "3px");
         $('.LINEA_CINA').css("stroke", "#7E3FE5");
      }, {
         offset: '89%'
      });

      $('.RUSSIA').waypoint(function () {
         $('.PALLA_RUSSIA').css("opacity", "1");
         $('.LINEA_RUSSIA').css("stroke-width", "3px");
         $('.LINEA_RUSSIA').css("stroke", "#FF514B");
      }, {
         offset: '90%'
      });

      $('.GRANBRETAGNA').waypoint(function () {
         $('.PALLA_GRANBRETAGNA').css("opacity", "1");
         $('.LINEA_GRANBRETAGNA').css("stroke-width", "3px");
         $('.LINEA_GRANBRETAGNA').css("stroke", "#7E3FE5");
      }, {
         offset: '89%'
      });

      $('.FRANCIA').waypoint(function () {
         $('.PALLA_FRANCIA').css("opacity", "1");
         $('.LINEA_FRANCIA').css("stroke-width", "3px");
         $('.LINEA_FRANCIA').css("stroke", "#7E3FE5");
      }, {
         offset: '86%'
      });

      $('.INDIA').waypoint(function () {
         $('.PALLA_INDIA').css("opacity", "1");
         $('.LINEA_INDIA').css("stroke-width", "3px");
         $('.LINEA_INDIA').css("stroke", "#7E3FE5");
      }, {
         offset: '90%'
      });

      $('.ISRAELE').waypoint(function () {
         $('.PALLA_ISRAELE').css("opacity", "1");
         $('.LINEA_ISRAELE').css("stroke-width", "3px");
         $('.LINEA_ISRAELE').css("stroke", "#7E3FE5");
      }, {
         offset: '91%'
      });

      $('.PAKISTAN').waypoint(function () {
         $('.PALLA_PAKISTAN').css("opacity", "1");
         $('.LINEA_PAKISTAN').css("stroke-width", "3px");
         $('.LINEA_PAKISTAN').css("stroke", "#7E3FE5");
      }, {
         offset: '91%'
      });

      $('.COREANORD').waypoint(function () {
         $('.PALLA_COREANORD').css("opacity", "1");
         $('.LINEA_COREANORD').css("stroke-width", "3px");
         $('.LINEA_COREANORD').css("stroke", "#7E3FE5");
      }, {
         offset: '91%'
      });


// click grafico chiara- DATA 4 -

$('#unicredit_container').click (
  function () {
    $("#data4 svg #unicredit_container .st0").css("fill", "#fc4646");
    $("#data4 svg #Uc_centrale .st1").css("fill", "#ededef");
    $("#data4 svg #Uc_details").css("display", "block");


  });










});
