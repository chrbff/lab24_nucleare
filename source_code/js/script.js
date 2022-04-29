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



   ////// TESTATE DAL 1945 - 2020 /////////////


   /////// interazione USA /////////

   $("#data2 svg #Base_permanente #Pallino_USA").click(
      function () {
         $("#data2 svg #USA .st0, #data2 svg #USA .st1, #data2 svg #USA .st2, #data2 svg #USA .st3, #data2 svg #USA .st4, #data2 svg #USA .st5, #data2 svg #USA .st6, #data2 svg #USA .st7, #data2 svg #USA .st8, #data2 svg #USA .st9, #data2 svg #USA .st10").css("opacity", 1);
         $("#data2 svg #Base_permanente #Pallino_USA .st21").css("fill", "#83f9f3");
         // $("#data2 svg #Base_permanente #Pallino_USA .st7").css("color", "#1c1c1c");

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

   /////// interazione RUSSIA /////////

   $("#data2 svg #Base_permanente #Pallino_RU").click(
      function () {
         $("#data2 svg #RUSSIA .st1, #data2 svg #RUSSIA .st3, #data2 svg #RUSSIA .st4, #data2 svg #RUSSIA .st6, #data2 svg #RUSSIA .st7, #data2 svg #RUSSIA .st8, #data2 svg #RUSSIA .st10, #data2 svg #RUSSIA .st11, #data2 svg #RUSSIA .st12, #data2 svg #RUSSIA .st13").css("opacity", 1);
         $("#data2 svg #Base_permanente #Pallino_RU .st22").css("fill", "#fc4646");

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

   /////// interazione ALtri Stati /////////

   $("#data2 svg #Base_permanente #Pallini_altri_stati").click(
      function () {
         $("#data2 svg #Altri_stati .st1, #data2 svg #Altri_stati .st3, #data2 svg #Altri_stati .st4, #data2 svg #Altri_stati .st6, #data2 svg #Altri_stati .st7, #data2 svg #Altri_stati .st8, #data2 svg #Altri_stati .st14, #data2 svg #Altri_stati .st15, #data2 svg #Altri_stati .st16").css("opacity", 1);
         $("#data2 svg #Base_permanente #Pallini_altri_stati .st23").css("fill", "#7E3FE5");

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

});