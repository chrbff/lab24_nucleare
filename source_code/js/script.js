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
         // $("#data1 #cerchio_pallina").css({'transform' : 'rotate(90deg)'});
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
});
