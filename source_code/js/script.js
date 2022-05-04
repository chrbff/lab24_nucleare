$(document).ready(function () {
   ////// ATOMO /////////////

   /////// interazione usa su atomo /////////
   $("#data1 svg #sagoma_hover_usa").click(
      function () {
         $("#data1 svg #gruppo_usa .st1, #data1 svg #gruppo_usa .st2").css("stroke", "#83f9f3");
         $("#data1 svg #nome_usa").css("display", "block");
         $("#data1 svg #asta_3 .st12, #data1 svg #asta_2 .st12").css("stroke", "#83f9f3");
         $("#data1 svg #asta_3 .st11, #data1 svg #asta_2 .st11").css("fill", "#83f9f3");
         $("#data1 svg #asta_2_sottile .st2, #data1 svg #asta_2_sottile .st10, #data1 svg #asta_3_sottile .st2, #data1 svg #asta_3_sottile .st10").css("stroke", "#83f9f3");
         $("#tabella .voce_tabella_usa").css("background-color", "#83f9f3");
         $("#tabella .voce_tabella_usa").css("color", "#1c1c1c");
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

   ///// interazione usa su tabella//////

   $("#tabella .voce_tabella_usa").click(
      function () {
         $("#data1 svg #gruppo_usa .st1, #data1 svg #gruppo_usa .st2").css("stroke", "#83f9f3");
         $("#data1 svg #nome_usa").css("display", "block");
         $("#data1 svg #asta_3 .st12, #data1 svg #asta_2 .st12").css("stroke", "#83f9f3");
         $("#data1 svg #asta_3 .st11, #data1 svg #asta_2 .st11").css("fill", "#83f9f3");
         $("#data1 svg #asta_2_sottile .st2, #data1 svg #asta_2_sottile .st10, #data1 svg #asta_3_sottile .st2, #data1 svg #asta_3_sottile .st10").css("stroke", "#83f9f3");
         $("#tabella .voce_tabella_usa").css("background-color", "#83f9f3");
         $("#tabella .voce_tabella_usa").css("color", "#1c1c1c");
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

   $("#tabella .voce_tabella_usa").hover(
      function () {
         $("#tabella .voce_tabella_usa").css("cursor", "pointer");
      });





   /////// interazione russia su atomo/////////
   $("#data1 svg #sagoma_hover_rus").click(
      function () {
         $("#data1 svg #gruppo_rus .st1, #data1 svg #gruppo_rus .st2").css("stroke", "#fc4646");
         $("#data1 svg #nome_rus").css("display", "block");
         $("#data1 svg #asta_1 .st12, #data1 svg #asta_2 .st12").css("stroke", "#fc4646");
         $("#data1 svg #asta_1 .st11, #data1 svg #asta_2 .st11").css("fill", "#fc4646");
         $("#data1 svg #asta_1_sottile .st2, #data1 svg #asta_1_sottile .st10, #data1 svg #asta_2_sottile .st2, #data1 svg #asta_2_sottile .st10").css("stroke", "#fc4646");
         $("#tabella .voce_tabella_russia").css("background-color", "#fc4646");
         $("#tabella .voce_tabella_usa").css("color", "#ededef");
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

   ///// interazione russia su tabella//////

   $("#tabella .voce_tabella_russia").click(
      function () {
         $("#data1 svg #gruppo_rus .st1, #data1 svg #gruppo_rus .st2").css("stroke", "#fc4646");
         $("#data1 svg #nome_rus").css("display", "block");
         $("#data1 svg #asta_1 .st12, #data1 svg #asta_2 .st12").css("stroke", "#fc4646");
         $("#data1 svg #asta_1 .st11, #data1 svg #asta_2 .st11").css("fill", "#fc4646");
         $("#data1 svg #asta_1_sottile .st2, #data1 svg #asta_1_sottile .st10, #data1 svg #asta_2_sottile .st2, #data1 svg #asta_2_sottile .st10").css("stroke", "#fc4646");
         $("#tabella .voce_tabella_russia").css("background-color", "#fc4646");
         $("#tabella .voce_tabella_usa").css("color", "#ededef");
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

   $("#tabella .voce_tabella_russia").hover(
      function () {
         $("#tabella .voce_tabella_russia").css("cursor", "pointer");
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
         $("#tabella .voce_tabella_usa").css("color", "#ededef");
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

   ///// interazione altri su tabella//////

   $("#tabella .voce_tabella_altri").click(
      function () {
         $("#data1 svg #gruppo_altri .st1, #data1 svg #gruppo_altri .st2").css("stroke", "#7E3FE5");
         $("#data1 svg #nome_altri").css("display", "block");
         $("#data1 svg #aste_altri .st12, #data1 svg #asta_1 .st12, #data1 svg #asta_3 .st12").css("stroke", "#7E3FE5");
         $("#data1 svg #aste_altri .st11, #data1 svg #asta_1 .st11, #data1 svg #asta_3 .st11").css("fill", "#7E3FE5");
         $("#data1 svg #asta_1_sottile .st2, #data1 svg #asta_1_sottile .st10, #data1 svg #asta_3_sottile .st2, #data1 svg #asta_3_sottile .st10").css("stroke", "#7E3FE5");
         $("#tabella .voce_tabella_altri").css("background-color", "#7E3FE5");
         $("#tabella .voce_tabella_usa").css("color", "#ededef");

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
         $("#tabella .voce_tabella_russia").css("background-color", "#1c1c1c"); ß
      });

   $("#tabella .voce_tabella_altri").hover(
      function () {
         $("#tabella .voce_tabella_altri").css("cursor", "pointer");
      });



   ////// TESTATE DAL 1945 - 2020 /////////////


   /////// interazione USA /////////

   $("#data2 svg #Base_permanente #Pallino_USA").click(
      function () {
         $("#data2 svg #USA .st0, #data2 svg #USA .st1, #data2 svg #USA .st2, #data2 svg #USA .st3, #data2 svg #USA .st4, #data2 svg #USA .st5, #data2 svg #USA .st6, #data2 svg #USA .st7, #data2 svg #USA .st8, #data2 svg #USA .st9, #data2 svg #USA .st10").css("opacity", 1);
         $("#data2 svg #Base_permanente #Pallino_USA .st21").css("fill", "#83f9f3");
         $("#data2 svg #Base_permanente #Pallino_USA #USA.st7").css("fill", "#1c1c1c");

         //Se clicco USA mi scompaiono Russia e Altri Stati
         $("#data2 svg #RUSSIA .st1, #data2 svg #RUSSIA .st3, #data2 svg #RUSSIA .st4, #data2 svg #RUSSIA .st6, #data2 svg #RUSSIA .st7, #data2 svg #RUSSIA .st8, #data2 svg #RUSSIA .st10, #data2 svg #RUSSIA .st11, #data2 svg #RUSSIA .st12, #data2 svg #RUSSIA .st13").css("opacity", 0);
         $("#data2 svg #Base_permanente .st3, #data2 svg #Base_permanente .st4, #data2 svg #Base_permanente .st18").css("opacity", 0); //Scompare il titolo "Testate nucleari globali"
         $("#data2 svg #Base_permanente #Pallino_RU .st22").css("fill", "#1c1c1c"); //Il pallino Russia torna spento

         $("#data2 svg #Altri_stati .st1, #data2 svg #Altri_stati .st3, #data2 svg #Altri_stati .st4, #data2 svg #Altri_stati .st6, #data2 svg #Altri_stati .st7, #data2 svg #Altri_stati .st8, #data2 svg #Altri_stati .st14, #data2 svg #Altri_stati .st15, #data2 svg #Altri_stati .st16").css("opacity", 0);
         $("#data2 svg #Base_permanente #Pallini_altri_stati .st23").css("fill", "#1c1c1c"); //I pallini di Altri stati torna spento

         //Se clicco USA mi scompare 30.000
         $("#data2 svg #Base_permanente #trentamila").css("opacity", 0);

         //Se clicco Altri Stati mi ricompare 40.000
         $("#data2 svg #Base_permanente #quarantamila").css("opacity", 1);
      });

   //Trasformazione del cursore al click
   $("#Base_permanente #Pallino_USA").hover(
      function () {
         $("#Base_permanente #Pallino_USA").css("cursor", "pointer");
      });


   /////// interazione RUSSIA /////////

   $("#data2 svg #Base_permanente #Pallino_RU").click(
      function () {
         $("#data2 svg #RUSSIA .st1, #data2 svg #RUSSIA .st3, #data2 svg #RUSSIA .st4, #data2 svg #RUSSIA .st6, #data2 svg #RUSSIA .st7, #data2 svg #RUSSIA .st8, #data2 svg #RUSSIA .st10, #data2 svg #RUSSIA .st11, #data2 svg #RUSSIA .st12, #data2 svg #RUSSIA .st13").css("opacity", 1);
         $("#data2 svg #Base_permanente #Pallino_RU .st22").css("fill", "#fc4646");
         $("#data2 svg #Base_permanente #Pallino_USA #USA.st7").css("fill", "#EDEDEF");

         //Se clicco Russia mi scompaiono USA e Altri Stati
         $("#data2 svg #USA .st0, #data2 svg #USA .st1, #data2 svg #USA .st2, #data2 svg #USA .st3, #data2 svg #USA .st4, #data2 svg #USA .st5, #data2 svg #USA .st6, #data2 svg #USA .st7, #data2 svg #USA .st8, #data2 svg #USA .st9, #data2 svg #USA .st10").css("opacity", 0);
         $("#data2 svg #Base_permanente .st3, #data2 svg #Base_permanente .st4, #data2 svg #Base_permanente .st18").css("opacity", 0); //Scompare il titolo "Testate nucleari globali"
         $("#data2 svg #Base_permanente #Pallino_USA .st21").css("fill", "#1c1c1c"); //Il pallino USA torna spento

         $("#data2 svg #Altri_stati .st1, #data2 svg #Altri_stati .st3, #data2 svg #Altri_stati .st4, #data2 svg #Altri_stati .st6, #data2 svg #Altri_stati .st7, #data2 svg #Altri_stati .st8, #data2 svg #Altri_stati .st14, #data2 svg #Altri_stati .st15, #data2 svg #Altri_stati .st16").css("opacity", 0);
         $("#data2 svg #Base_permanente #Pallini_altri_stati .st23").css("fill", "#1c1c1c"); //I pallini di Altri stati torna spento

         //Se clicco Russia mi ricompare 30.000
         $("#data2 svg #Base_permanente #trentamila").css("opacity", 1);

         //Se clicco Russia mi scompare 40.000
         $("#data2 svg #Base_permanente #quarantamila").css("opacity", 0);
      });

   //Trasformazione del cursore al click
   $("#Base_permanente #Pallino_RU").hover(
      function () {
         $("#Base_permanente #Pallino_RU").css("cursor", "pointer");
      });


   /////// interazione ALtri Stati /////////

   $("#data2 svg #Base_permanente #Pallini_altri_stati").click(
      function () {
         $("#data2 svg #Altri_stati .st1, #data2 svg #Altri_stati .st3, #data2 svg #Altri_stati .st4, #data2 svg #Altri_stati .st6, #data2 svg #Altri_stati .st7, #data2 svg #Altri_stati .st8, #data2 svg #Altri_stati .st14, #data2 svg #Altri_stati .st15, #data2 svg #Altri_stati .st16").css("opacity", 1);
         $("#data2 svg #Base_permanente #Pallini_altri_stati .st23").css("fill", "#7E3FE5");
         $("#data2 svg #Base_permanente #Pallino_USA #USA.st7").css("fill", "#EDEDEF");

         //Se clicco Altri stati mi scompaiono Russia e USA
         $("#data2 svg #RUSSIA .st1, #data2 svg #RUSSIA .st3, #data2 svg #RUSSIA .st4, #data2 svg #RUSSIA .st6, #data2 svg #RUSSIA .st7, #data2 svg #RUSSIA .st8, #data2 svg #RUSSIA .st10, #data2 svg #RUSSIA .st11, #data2 svg #RUSSIA .st12, #data2 svg #RUSSIA .st13").css("opacity", 0);
         $("#data2 svg #Base_permanente .st3, #data2 svg #Base_permanente .st4, #data2 svg #Base_permanente .st18").css("opacity", 0); //Scompare il titolo "Testate nucleari globali"
         $("#data2 svg #Base_permanente #Pallino_RU .st22").css("fill", "#1c1c1c"); //Il pallino Russia torna spento

         $("#data2 svg #USA .st0, #data2 svg #USA .st1, #data2 svg #USA .st2, #data2 svg #USA .st3, #data2 svg #USA .st4, #data2 svg #USA .st5, #data2 svg #USA .st6, #data2 svg #USA .st7, #data2 svg #USA .st8, #data2 svg #USA .st9, #data2 svg #USA .st10").css("opacity", 0);
         $("#data2 svg #Base_permanente #Pallino_USA .st21").css("fill", "#1c1c1c"); //Il pallino USA torna spento

         //Se clicco Altri Stati mi ricompare 30.000
         $("#data2 svg #Base_permanente #trentamila").css("opacity", 1);

         //Se clicco Altri Stati mi ricompare 40.000
         $("#data2 svg #Base_permanente #quarantamila").css("opacity", 1);
      });

   //Trasformazione del cursore al click
   $("#Base_permanente #Pallini_altri_stati").hover(
      function () {
         $("#Base_permanente #Pallini_altri_stati").css("cursor", "pointer");
      });




   /////// slider trattato nazioni/popolazioni /////////

   $("#tasto_popolazioni").click(
      function () {
         $("#tasto_nazioni").css("background", "#1c1c1c");
         $("#tasto_nazioni").css("opacity", "1");
         $("div#tasto_nazioni p").css("color", "#ededef");
         $("#tasto_popolazioni").css("background", "#ededef");
         $("#tasto_popolazioni").css("opacity", "1");
         $("div#tasto_popolazioni p").css("color", "#1c1c1c");

         // $("#popolazioni").css("display", "block");
         // $("#popolazioni").css("opacity", "1");
         // $("#nazioni").css("display", "none");
         // $("#nazioni").css("opacity", "1");
         $("#nazioni").removeClass("visible");
         $("#popolazioni").addClass("visible");
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

         // $("#nazioni").css("display", "block");
         // $("#nazioni").css("opacity", "1");
         // $("#popolazioni").css("display", "none");
         // $("#popolazioni").css("opacity", "1");
         $("#popolazioni").removeClass("visible");
         $("#nazioni").addClass("visible");
      });

   $("#tasto_nazioni").hover(
      function () {
         $("#tasto_nazioni").css("cursor", "pointer");
      });




   /////// apparizione sfere spese per armi nucleari /////////

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





   /////// conteggio spese al minuto (timer) /////////

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





   /////// interazione banche /////////

   // unicredit
   $('#Uc_container').click(
      function () {
         $("#data4 svg #Uc_container .st0").css("fill", "#fc4646");
         $("#data4 svg #Uc_grande .st1").css("fill", "#ededef");
         $("#data4 svg #Uc_details").css("opacity", "1");

         $("#data4 svg #Isp_container .st0").css("fill", "#4A4A4A");
         $("#data4 svg #Isp_grande .st1").css("fill", "#1C1C1C");
         $("#data4 svg #Isp_details").css("opacity", "0");
         $("#data4 svg #Bpm_container .st0").css("fill", "#4A4A4A");
         $("#data4 svg #Bpm_grande .st1").css("fill", "#1C1C1C");
         $("#data4 svg #Bpm_tooltip").removeClass("visible");
      });
   $('#Uc_container').hover(
      function () {
         $("#Uc_container").css("cursor", "pointer");
      });

   // intesa san paolo
   $('#Isp_container').click(
      function () {
         $("#data4 svg #Isp_container .st0").css("fill", "#fc4646");
         $("#data4 svg #Isp_grande .st1").css("fill", "#ededef");
         $("#data4 svg #Isp_details").css("opacity", "1");

         $("#data4 svg #Uc_container .st0").css("fill", "#4A4A4A");
         $("#data4 svg #Uc_grande .st1").css("fill", "#1C1C1C");
         $("#data4 svg #Uc_details").css("opacity", "0");
         $("#data4 svg #Bpm_container .st0").css("fill", "#4A4A4A");
         $("#data4 svg #Bpm_grande .st1").css("fill", "#1C1C1C");
         $("#data4 svg #Bpm_tooltip").removeClass("visible");
      });
   $('#Isp_container').hover(
      function () {
         $("#Isp_container").css("cursor", "pointer");
      });

   // bpm
   $('#Bpm_container').click(
      function () {
         $("#data4 svg #Bpm_container .st0").css("fill", "#fc4646");
         $("#data4 svg #Bpm_grande .st1").css("fill", "#ededef");
         $("#data4 svg #Bpm_tooltip").addClass("visible");

         $("#data4 svg #Uc_container .st0").css("fill", "#4A4A4A");
         $("#data4 svg #Uc_grande .st1").css("fill", "#1C1C1C");
         $("#data4 svg #Uc_details").css("opacity", "0");
         $("#data4 svg #Isp_container .st0").css("fill", "#4A4A4A");
         $("#data4 svg #Isp_grande .st1").css("fill", "#1C1C1C");
         $("#data4 svg #Isp_details").css("opacity", "0");
      });
   $('#Bpm_container').hover(
      function () {
         $("#Bpm_container").css("cursor", "pointer");
      });

      $('#Bpm_tooltip_close').click(
         function () {
            $("#data4 svg #Bpm_container .st0").css("fill", "#4A4A4A");
            $("#data4 svg #Bpm_grande .st1").css("fill", "#1C1C1C");
            $("#data4 svg #Bpm_tooltip").removeClass("visible");
         });
      $('#Bpm_tooltip_close').hover(
         function () {
            $("#Bpm_tooltip_close").css("cursor", "pointer");
         });
});


