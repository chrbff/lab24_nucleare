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
      $("#tabella .voce_tabella_russia").css("color", "#ededef");

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
      $("#tabella .voce_tabella_russia").css("color", "#ededef");

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
      $("#tabella .voce_tabella_russia").css("color", "#1c1c1c");
      $("#data1 #cerchio_pallina .st8").css("display", "block");

      $("#data1 svg #gruppo_usa .st1").css("stroke", "#4a4a4a");
      $("#data1 svg #gruppo_usa .st2").css("stroke", "#ededef");
      $("#data1 svg #asta_3 .st12").css("stroke", "#ededef");
      $("#data1 svg #asta_3 .st11").css("fill", "#ededef");
      $("#data1 svg #asta_3_sottile .st2, #data1 svg #asta_3_sottile .st10").css("stroke", "#ededef");
      $("#data1 svg #nome_usa").css("display", "none");
      $("#tabella .voce_tabella_usa").css("background-color", "#1c1c1c");
      $("#tabella .voce_tabella_usa").css("color", "#ededef");

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
      $("#tabella .voce_tabella_russia").css("color", "#1c1c1c");
      $("#data1 #cerchio_pallina .st8").css("display", "block");

      $("#data1 svg #gruppo_usa .st1").css("stroke", "#4a4a4a");
      $("#data1 svg #gruppo_usa .st2").css("stroke", "#ededef");
      $("#data1 svg #asta_3 .st12").css("stroke", "#ededef");
      $("#data1 svg #asta_3 .st11").css("fill", "#ededef");
      $("#data1 svg #asta_3_sottile .st2, #data1 svg #asta_3_sottile .st10").css("stroke", "#ededef");
      $("#data1 svg #nome_usa").css("display", "none");
      $("#tabella .voce_tabella_usa").css("background-color", "#1c1c1c");
      $("#tabella .voce_tabella_usa").css("color", "#ededef");

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
      $("#tabella .voce_tabella_russia").css("color", "#ededef");

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
      $("#tabella .voce_tabella_russia").css("background-color", "#1c1c1c");
      $("#tabella .voce_tabella_russia").css("color", "#ededef");

    });

  $("#tabella .voce_tabella_altri").hover(
    function () {
      $("#tabella .voce_tabella_altri").css("cursor", "pointer");
    });



  ////// TESTATE DAL 1945 - 2020 /////////////


  /////// interazione USA /////////

  $("#data2 svg #Base_permanente #Pallini #Pallino_USA").click(
    function () {
      $("#data2 svg #USA .st0, #data2 svg #USA .st1, #data2 svg #USA .st2, #data2 svg #USA .st3, #data2 svg #USA .st4, #data2 svg #USA .st5, #data2 svg #USA .st6, #data2 svg #USA .st7, #data2 svg #USA .st8, #data2 svg #USA .st9").css("opacity", 1);
      $("#data2 svg #Base_permanente #Pallini #Pallino_USA .st20").css("fill", "#83f9f3");
      //$("#data2 svg #Base_permanente #Pallini #Pallino_USA .st20").data("click");
      $("#data2 svg #Base_permanente #Pallini #Pallino_USA #USA.st7").css("fill", "#1c1c1c");
      $("#data2 svg #USA #trentunomila .st7").css("color", "#83F9F3");

      //Se clicco USA mi scompaiono Russia e Altri Stati
      $("#data2 svg #RUSSIA .st1, #data2 svg #RUSSIA .st3, #data2 svg #RUSSIA .st4, #data2 svg #RUSSIA .st6, #data2 svg #RUSSIA .st7, #data2 svg #RUSSIA .st8, #data2 svg #RUSSIA .st10, #data2 svg #RUSSIA .st11, #data2 svg #RUSSIA .st12, #data2 svg #RUSSIA .st13").css("opacity", 0);
      $("#data2 svg #Base_permanente .st3, #data2 svg #Base_permanente .st4").css("opacity", 0); //Scompare il titolo "Testate nucleari globali"
      $("#data2 svg #Base_permanente #Pallini #Pallino_RU .st21").css("fill", "#1c1c1c"); //Il pallino Russia torna spento

      $("#data2 svg #Altri_stati .st1, #data2 svg #Altri_stati .st3, #data2 svg #Altri_stati .st4, #data2 svg #Altri_stati .st6, #data2 svg #Altri_stati .st7, #data2 svg #Altri_stati .st8, #data2 svg #Altri_stati .st13, #data2 svg #Altri_stati .st14, #data2 svg #Altri_stati .st15, #data2 svg #Altri_stati .st16").css("opacity", 0);
      $("#data2 #Base_permanente #Pallini #Pallini_altri_stati .st13").css("fill", "#1c1c1c"); //I pallini di Altri stati torna spento

      //Se clicco USA mi scompare 30.000
      $("#data2 svg #Base_permanente #Numero_Testate #trentamila").css("opacity", 0);

      //Se clicco Altri Stati mi ricompare 40.000
      $("#data2 svg #Base_permanente #Numero_Testate #quarantamila").css("opacity", 1);
    });

  //Trasformazione del cursore al click
  $("#Base_permanente #Pallini #Pallino_USA").hover(
    function () {
      $("#Base_permanente #Pallini #Pallino_USA").css("cursor", "pointer");
    });


  /////// interazione RUSSIA /////////

  $("#data2 svg #Base_permanente #Pallini #Pallino_RU").click(
    function () {
      $("#data2 svg #RUSSIA .st1, #data2 svg #RUSSIA .st3, #data2 svg #RUSSIA .st4, #data2 svg #RUSSIA .st6, #data2 svg #RUSSIA .st7, #data2 svg #RUSSIA .st8, #data2 svg #RUSSIA .st10, #data2 svg #RUSSIA .st11, #data2 svg #RUSSIA .st12, #data2 svg #RUSSIA .st13").css("opacity", 1);
      $("#data2 svg #Base_permanente #Pallini #Pallino_RU .st21").css("fill", "#fc4646");
      $("#data2 svg #Base_permanente #Pallini #Pallino_USA #USA.st7").css("fill", "#EDEDEF");

      //Se clicco Russia mi scompaiono USA e Altri Stati
      $("#data2 svg #USA .st0, #data2 svg #USA .st1, #data2 svg #USA .st2, #data2 svg #USA .st3, #data2 svg #USA .st4, #data2 svg #USA .st5, #data2 svg #USA .st6, #data2 svg #USA .st7, #data2 svg #USA .st8, #data2 svg #USA .st9, #data2 svg #USA .st10").css("opacity", 0);
      $("#data2 svg #Base_permanente .st3, #data2 svg #Base_permanente .st4").css("opacity", 0); //Scompare il titolo "Testate nucleari globali"
      $("#data2 svg #Base_permanente #Pallini #Pallino_USA .st20").css("fill", "#1c1c1c"); //Il pallino USA torna spento

      $("#data2 svg #Altri_stati .st1, #data2 svg #Altri_stati .st3, #data2 svg #Altri_stati .st4, #data2 svg #Altri_stati .st6, #data2 svg #Altri_stati .st7, #data2 svg #Altri_stati .st8, #data2 svg #Altri_stati .st13, #data2 svg #Altri_stati .st14, #data2 svg #Altri_stati .st15, #data2 svg #Altri_stati .st16").css("opacity", 0);
      $("#data2 svg #Base_permanente #Pallini #Pallini_altri_stati .st13").css("fill", "#1c1c1c"); //I pallini di Altri stati torna spento

      //Se clicco Russia mi ricompare 30.000
      $("#data2 svg #Base_permanente #trentamila").css("opacity", 1);

      //Se clicco Russia mi scompare 40.000
      $("#data2 svg #Base_permanente #quarantamila").css("opacity", 0);
    });

  //Trasformazione del cursore al click
  $("#Base_permanente #Pallini #Pallino_RU").hover(
    function () {
      $("#Base_permanente #Pallini #Pallino_RU").css("cursor", "pointer");
    });


  /////// interazione Altri Stati /////////

  $("#data2 svg #Base_permanente #Pallini #Pallini_altri_stati").click(
    function () {
      $("#data2 svg #Altri_stati .st1, #data2 svg #Altri_stati .st3, #data2 svg #Altri_stati .st4, #data2 svg #Altri_stati .st6, #data2 svg #Altri_stati .st7, #data2 svg #Altri_stati .st8, #data2 svg #Altri_stati .st13, #data2 svg #Altri_stati .st14, #data2 svg #Altri_stati .st15, #data2 svg #Altri_stati .st16").css("opacity", 1);
      $("#data2 svg #Base_permanente #Pallini #Pallini_altri_stati .st13").css("fill", "#7E3FE5");
      $("#data2 svg #Base_permanente #Pallini #Pallino_USA #USA.st7").css("fill", "#EDEDEF");
      $("#data2 svg #Base_permanente #Pallini #Pallino_RU .st21").css("fill", "#1c1c1c"); //Il pallino Russia torna spento

      //Se clicco Altri stati mi scompaiono Russia e USA
      $("#data2 svg #USA .st0, #data2 svg #USA .st1, #data2 svg #USA .st2, #data2 svg #USA .st3, #data2 svg #USA .st4, #data2 svg #USA .st5, #data2 svg #USA .st6, #data2 svg #USA .st7, #data2 svg #USA .st8, #data2 svg #USA .st9, #data2 svg #USA .st10").css("opacity", 0);
      $("#data2 svg #RUSSIA .st1, #data2 svg #RUSSIA .st3, #data2 svg #RUSSIA .st4, #data2 svg #RUSSIA .st6, #data2 svg #RUSSIA .st7, #data2 svg #RUSSIA .st8, #data2 svg #RUSSIA .st10, #data2 svg #RUSSIA .st11, #data2 svg #RUSSIA .st12, #data2 svg #RUSSIA .st13").css("opacity", 0);
      $("#data2 svg #Base_permanente .st3, #data2 svg #Base_permanente .st4").css("opacity", 0); //Scompare il titolo "Testate nucleari globali"
      $("#data2 svg #Base_permanente #Pallini #Pallino_RU .st22").css("fill", "#1c1c1c"); //Il pallino Russia torna spento

      $("#data2 svg #USA .st1, #data2 svg #USA .st2, #data2 svg #USA .st3, #data2 svg #USA .st4, #data2 svg #USA .st5, #data2 svg #USA .st6, #data2 svg #USA .st7, #data2 svg #USA .st8, #data2 svg #USA .st9, #data2 svg #USA .st10").css("opacity", 0);
      $("#data2 svg #Base_permanente #Pallini #Pallino_USA .st20").css("fill", "#1c1c1c"); //Il pallino USA torna spento

      //Se clicco Altri Stati mi ricompare 30.000
      $("#data2 svg #Base_permanente #trentamila").css("opacity", 1);

      //Se clicco Altri Stati mi ricompare 40.000
      $("#data2 svg #Base_permanente #quarantamila").css("opacity", 1);
    });

  //Trasformazione del cursore al click
  $("#Base_permanente #Pallini #Pallini_altri_stati").hover(
    function () {
      $("#Base_permanente #Pallini #Pallini_altri_stati").css("cursor", "pointer");
    });



  ////// TRATTATO ////////

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


  ////// SPESE ARMI NUCLEARI ////////

  /////// apparizione sfere spese per armi nucleari DESKTOP /////////

  $('#data3 .data3-desktop svg .USA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-desktop svg .USA .PALLA_USA').css("opacity", "1");
      $('#data3 .data3-desktop svg .USA .LINEA_USA').css("stroke-width", "3px");
      $('#data3 .data3-desktop svg .USA .LINEA_USA').css("stroke", "#83F9F3");
    } else if (direction === 'up') {
      $('#data3 .data3-desktop svg .USA .PALLA_USA').css("opacity", "0");
      $('#data3 .data3-desktop svg .USA .LINEA_USA').css("stroke-width", "1px");
      $('#data3 .data3-desktop svg .USA .LINEA_USA').css("stroke", "#6D6D6C");
    }

  }, { offset: '60%' });

  $('#data3 .data3-desktop svg .CINA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-desktop svg .CINA .PALLA_CINA').css("opacity", "1");
      $('#data3 .data3-desktop svg .CINA .LINEA_CINA').css("stroke-width", "3px");
      $('#data3 .data3-desktop svg .CINA .LINEA_CINA').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-desktop svg .CINA .PALLA_CINA').css("opacity", "0");
      $('#data3 .data3-desktop svg .CINA .LINEA_CINA').css("stroke-width", "1px");
      $('#data3 .data3-desktop svg .CINA .LINEA_CINA').css("stroke", "#6D6D6C");
    }

  }, { offset: '89%' });

  $('#data3 .data3-desktop svg .RUSSIA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-desktop svg .RUSSIA .PALLA_RUSSIA').css("opacity", "1");
      $('#data3 .data3-desktop svg .RUSSIA .LINEA_RUSSIA').css("stroke-width", "3px");
      $('#data3 .data3-desktop svg .RUSSIA .LINEA_RUSSIA').css("stroke", "#FF514B");
    } else if (direction === 'up') {
      $('#data3 .data3-desktop svg .RUSSIA .PALLA_RUSSIA').css("opacity", "0");
      $('#data3 .data3-desktop svg .RUSSIA .LINEA_RUSSIA').css("stroke-width", "1px");
      $('#data3 .data3-desktop svg .RUSSIA .LINEA_RUSSIA').css("stroke", "#6D6D6C");
    }

  }, { offset: '90%' });

  $('#data3 .data3-desktop svg .GRANBRETAGNA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-desktop svg .GRANBRETAGNA .PALLA_GRANBRETAGNA').css("opacity", "1");
      $('#data3 .data3-desktop svg .GRANBRETAGNA .LINEA_GRANBRETAGNA').css("stroke-width", "3px");
      $('#data3 .data3-desktop svg .GRANBRETAGNA .LINEA_GRANBRETAGNA').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-desktop svg .GRANBRETAGNA .PALLA_GRANBRETAGNA').css("opacity", "0");
      $('#data3 .data3-desktop svg .GRANBRETAGNA .LINEA_GRANBRETAGNA').css("stroke-width", "1px");
      $('#data3 .data3-desktop svg .GRANBRETAGNA .LINEA_GRANBRETAGNA').css("stroke", "#6D6D6C");
    }

  }, { offset: '89%' });

  $('#data3 .data3-desktop svg .FRANCIA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-desktop svg .FRANCIA .PALLA_FRANCIA').css("opacity", "1");
      $('#data3 .data3-desktop svg .FRANCIA .LINEA_FRANCIA').css("stroke-width", "3px");
      $('#data3 .data3-desktop svg .FRANCIA .LINEA_FRANCIA').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-desktop svg .FRANCIA .PALLA_FRANCIA').css("opacity", "0");
      $('#data3 .data3-desktop svg .FRANCIA .LINEA_FRANCIA').css("stroke-width", "1px");
      $('#data3 .data3-desktop svg .FRANCIA .LINEA_FRANCIA').css("stroke", "#6D6D6C");
    }

  }, { offset: '86%' });

  $('#data3 .data3-desktop svg .INDIA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-desktop svg .INDIA .PALLA_INDIA').css("opacity", "1");
      $('#data3 .data3-desktop svg .INDIA .LINEA_INDIA').css("stroke-width", "3px");
      $('#data3 .data3-desktop svg .INDIA .LINEA_INDIA').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-desktop svg .INDIA .PALLA_INDIA').css("opacity", "0");
      $('#data3 .data3-desktop svg .INDIA .LINEA_INDIA').css("stroke-width", "1px");
      $('#data3 .data3-desktop svg .INDIA .LINEA_INDIA').css("stroke", "#6D6D6C");
    }

  }, { offset: '90%' });

  $('#data3 .data3-desktop svg .ISRAELE').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-desktop svg .ISRAELE .PALLA_ISRAELE').css("opacity", "1");
      $('#data3 .data3-desktop svg .ISRAELE .LINEA_ISRAELE').css("stroke-width", "3px");
      $('#data3 .data3-desktop svg .ISRAELE .LINEA_ISRAELE').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-desktop svg .ISRAELE .PALLA_ISRAELE').css("opacity", "0");
      $('#data3 .data3-desktop svg .ISRAELE .LINEA_ISRAELE').css("stroke-width", "1px");
      $('#data3 .data3-desktop svg .ISRAELE .LINEA_ISRAELE').css("stroke", "#6D6D6C");
    }

  }, { offset: '91%' });

  $('#data3 .data3-desktop svg .PAKISTAN').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-desktop svg .PAKISTAN .PALLA_PAKISTAN').css("opacity", "1");
      $('#data3 .data3-desktop svg .PAKISTAN .LINEA_PAKISTAN').css("stroke-width", "3px");
      $('#data3 .data3-desktop svg .PAKISTAN .LINEA_PAKISTAN').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-desktop svg .PAKISTAN .PALLA_PAKISTAN').css("opacity", "0");
      $('#data3 .data3-desktop svg .PAKISTAN .LINEA_PAKISTAN').css("stroke-width", "1px");
      $('#data3 .data3-desktop svg .PAKISTAN .LINEA_PAKISTAN').css("stroke", "#6D6D6C");
    }

  }, { offset: '91%' });

  $('#data3 .data3-desktop svg .COREANORD').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-desktop svg .COREANORD .PALLA_COREANORD').css("opacity", "1");
      $('#data3 .data3-desktop svg .COREANORD .LINEA_COREANORD').css("stroke-width", "3px");
      $('#data3 .data3-desktop svg .COREANORD .LINEA_COREANORD').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-desktop svg .COREANORD .PALLA_COREANORD').css("opacity", "0");
      $('#data3 .data3-desktop svg .COREANORD .LINEA_COREANORD').css("stroke-width", "1px");
      $('#data3 .data3-desktop svg .COREANORD .LINEA_COREANORD').css("stroke", "#6D6D6C");
    }

  }, { offset: '91%' });


  /////// apparizione sfere spese per armi nucleari MOBILE /////////

  $('#data3 .data3-mobile svg .USA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-mobile svg .USA .PALLA_USA').css("opacity", "1");
      $('#data3 .data3-mobile svg .USA .LINEA_USA').css("stroke-width", "3px");
      $('#data3 .data3-mobile svg .USA .LINEA_USA').css("stroke", "#83F9F3");
    } else if (direction === 'up') {
      $('#data3 .data3-mobile svg .USA .PALLA_USA').css("opacity", "0");
      $('#data3 .data3-mobile svg .USA .LINEA_USA').css("stroke-width", "1px");
      $('#data3 .data3-mobile svg .USA .LINEA_USA').css("stroke", "#6D6D6C");
    }

  }, { offset: '60%' });

  $('#data3 .data3-mobile svg .CINA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-mobile svg .CINA .PALLA_CINA').css("opacity", "1");
      $('#data3 .data3-mobile svg .CINA .LINEA_CINA').css("stroke-width", "3px");
      $('#data3 .data3-mobile svg .CINA .LINEA_CINA').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-mobile svg .CINA .PALLA_CINA').css("opacity", "0");
      $('#data3 .data3-mobile svg .CINA .LINEA_CINA').css("stroke-width", "1px");
      $('#data3 .data3-mobile svg .CINA .LINEA_CINA').css("stroke", "#6D6D6C");
    }

  }, { offset: '89%' });

  $('#data3 .data3-mobile svg .RUSSIA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-mobile svg .RUSSIA .PALLA_RUSSIA').css("opacity", "1");
      $('#data3 .data3-mobile svg .RUSSIA .LINEA_RUSSIA').css("stroke-width", "3px");
      $('#data3 .data3-mobile svg .RUSSIA .LINEA_RUSSIA').css("stroke", "#FF514B");
    } else if (direction === 'up') {
      $('#data3 .data3-mobile svg .RUSSIA .PALLA_RUSSIA').css("opacity", "0");
      $('#data3 .data3-mobile svg .RUSSIA .LINEA_RUSSIA').css("stroke-width", "1px");
      $('#data3 .data3-mobile svg .RUSSIA .LINEA_RUSSIA').css("stroke", "#6D6D6C");
    }

  }, { offset: '90%' });

  $('#data3 .data3-mobile svg .GRANBRETAGNA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-mobile svg .GRANBRETAGNA .PALLA_GRANBRETAGNA').css("opacity", "1");
      $('#data3 .data3-mobile svg .GRANBRETAGNA .LINEA_GRANBRETAGNA').css("stroke-width", "3px");
      $('#data3 .data3-mobile svg .GRANBRETAGNA .LINEA_GRANBRETAGNA').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-mobile svg .GRANBRETAGNA .PALLA_GRANBRETAGNA').css("opacity", "0");
      $('#data3 .data3-mobile svg .GRANBRETAGNA .LINEA_GRANBRETAGNA').css("stroke-width", "1px");
      $('#data3 .data3-mobile svg .GRANBRETAGNA .LINEA_GRANBRETAGNA').css("stroke", "#6D6D6C");
    }

  }, { offset: '89%' });

  $('#data3 .data3-mobile svg .FRANCIA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-mobile svg .FRANCIA .PALLA_FRANCIA').css("opacity", "1");
      $('#data3 .data3-mobile svg .FRANCIA .LINEA_FRANCIA').css("stroke-width", "3px");
      $('#data3 .data3-mobile svg .FRANCIA .LINEA_FRANCIA').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-mobile svg .FRANCIA .PALLA_FRANCIA').css("opacity", "0");
      $('#data3 .data3-mobile svg .FRANCIA .LINEA_FRANCIA').css("stroke-width", "1px");
      $('#data3 .data3-mobile svg .FRANCIA .LINEA_FRANCIA').css("stroke", "#6D6D6C");
    }

  }, { offset: '86%' });

  $('#data3 .data3-mobile svg .INDIA').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-mobile svg .INDIA .PALLA_INDIA').css("opacity", "1");
      $('#data3 .data3-mobile svg .INDIA .LINEA_INDIA').css("stroke-width", "3px");
      $('#data3 .data3-mobile svg .INDIA .LINEA_INDIA').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-mobile svg .INDIA .PALLA_INDIA').css("opacity", "0");
      $('#data3 .data3-mobile svg .INDIA .LINEA_INDIA').css("stroke-width", "1px");
      $('#data3 .data3-mobile svg .INDIA .LINEA_INDIA').css("stroke", "#6D6D6C");
    }

  }, { offset: '90%' });

  $('#data3 .data3-mobile svg .ISRAELE').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-mobile svg .ISRAELE .PALLA_ISRAELE').css("opacity", "1");
      $('#data3 .data3-mobile svg .ISRAELE .LINEA_ISRAELE').css("stroke-width", "3px");
      $('#data3 .data3-mobile svg .ISRAELE .LINEA_ISRAELE').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-mobile svg .ISRAELE .PALLA_ISRAELE').css("opacity", "0");
      $('#data3 .data3-mobile svg .ISRAELE .LINEA_ISRAELE').css("stroke-width", "1px");
      $('#data3 .data3-mobile svg .ISRAELE .LINEA_ISRAELE').css("stroke", "#6D6D6C");
    }

  }, { offset: '91%' });

  $('#data3 .data3-mobile svg .PAKISTAN').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-mobile svg .PAKISTAN .PALLA_PAKISTAN').css("opacity", "1");
      $('#data3 .data3-mobile svg .PAKISTAN .LINEA_PAKISTAN').css("stroke-width", "3px");
      $('#data3 .data3-mobile svg .PAKISTAN .LINEA_PAKISTAN').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-mobile svg .PAKISTAN .PALLA_PAKISTAN').css("opacity", "0");
      $('#data3 .data3-mobile svg .PAKISTAN .LINEA_PAKISTAN').css("stroke-width", "1px");
      $('#data3 .data3-mobile svg .PAKISTAN .LINEA_PAKISTAN').css("stroke", "#6D6D6C");
    }

  }, { offset: '91%' });

  $('#data3 .data3-mobile svg .COREANORD').waypoint(function (direction) {

    if (direction === 'down') {
      $('#data3 .data3-mobile svg .COREANORD .PALLA_COREANORD').css("opacity", "1");
      $('#data3 .data3-mobile svg .COREANORD .LINEA_COREANORD').css("stroke-width", "3px");
      $('#data3 .data3-mobile svg .COREANORD .LINEA_COREANORD').css("stroke", "#7E3FE5");
    } else if (direction === 'up') {
      $('#data3 .data3-mobile svg .COREANORD .PALLA_COREANORD').css("opacity", "0");
      $('#data3 .data3-mobile svg .COREANORD .LINEA_COREANORD').css("stroke-width", "1px");
      $('#data3 .data3-mobile svg .COREANORD .LINEA_COREANORD').css("stroke", "#6D6D6C");
    }

  }, { offset: '91%' });


  ////////// BANCHE //////////

  // unicredit
  $('.Uc_container').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");

      $("#data4 svg .Uc_details").css("opacity", "1");
      $("#data4 svg .Uc_grande .st1").css("fill", "#ededef");
      $("#data4 svg .Uc_container .st0").css("fill", "#fc4646");
      //$("#data4 .tooltip").css("opacity", "0");

    });
  $('.Uc_container').hover(
    function () {
      $(".Uc_container").css("cursor", "pointer");
    });

  // intesa san paolo
  $('.Isp_container').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");

      $("#data4 svg .Isp_details").css("opacity", "1");
      $("#data4 svg .Isp_grande .st1").css("fill", "#ededef");
      $("#data4 svg .Isp_container .st0").css("fill", "#fc4646");
    });
  $('.Isp_container').hover(
    function () {
      $(".Isp_container").css("cursor", "pointer");
    });

  // bpm
  $('.Bpm_container').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");

      $("#data4 svg .Bpm_grande .st1").css("fill", "#ededef");
      $("#data4 svg .Bpm_container .st0").css("fill", "#fc4646");
      $("#data4 svg .Bpm_tooltip.tooltip").css("opacity", "1");
      $("#data4 svg .Bpm_tooltip.tooltip").css("visibility", "visible");
    });
  $('.Bpm_container').hover(
    function () {
      $(".Bpm_container").css("cursor", "pointer");
    });

  $('.Bpm_tooltip_close').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");
    });
  $('.Bpm_tooltip_close').hover(
    function () {
      $(".Bpm_tooltip_close").css("cursor", "pointer");
    });

  //Cdp
  $('.Cdp_container').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");

      $("#data4 svg .Cdp_grande .st1").css("fill", "#ededef");
      $("#data4 svg .Cdp_container .st0").css("fill", "#fc4646");
      $("#data4 svg .Cdp_tooltip.tooltip").css("opacity", "1");
      $("#data4 svg .Cdp_tooltip.tooltip").css("visibility", "visible");
    });
  $('.Cdp_container').hover(
    function () {
      $(".Cdp_container").css("cursor", "pointer");
    });

  $('.Cdp_tooltip_close').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");
    });
  $('.Cdp_tooltip_close').hover(
    function () {
      $(".Cdp_tooltip_close").css("cursor", "pointer");
    });

  //Mb
  $('.Mb_container').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");

      $("#data4 svg .Mb_grande .st1").css("fill", "#ededef");
      $("#data4 svg .Mb_container .st0").css("fill", "#fc4646");
      $("#data4 svg .Mb_tooltip.tooltip").css("opacity", "1");
      $("#data4 svg .Mb_tooltip.tooltip").css("visibility", "visible");
    });
  $('.Mb_container').hover(
    function () {
      $(".Mb_container").css("cursor", "pointer");
    });

  $('.Mb_tooltip_close').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");
    });
  $('.Mb_tooltip_close').hover(
    function () {
      $(".Mb_tooltip_close").css("cursor", "pointer");
    });

  //Bps
  $('.Bps_container').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");

      $("#data4 svg .Bps_grande .st1").css("fill", "#ededef");
      $("#data4 svg .Bps_container .st0").css("fill", "#fc4646");
      $("#data4 svg .Bps_tooltip.tooltip").css("opacity", "1");
      $("#data4 svg .Bps_tooltip.tooltip").css("visibility", "visible");
    });
  $('.Bps_container').hover(
    function () {
      $(".Bps_container").css("cursor", "pointer");
    });

  $('.Bps_tooltip_close').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");
    });
  $('.Bps_tooltip_close').hover(
    function () {
      $(".Bps_tooltip_close").css("cursor", "pointer");
    });

  //Cv
  $('.Cv_container').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");

      $("#data4 svg .Cv_grande .st1").css("fill", "#ededef");
      $("#data4 svg .Cv_container .st0").css("fill", "#fc4646");
      $("#data4 svg .Cv_tooltip.tooltip").css("opacity", "1");
      $("#data4 svg .Cv_tooltip.tooltip").css("visibility", "visible");
    });
  $('.Cv_container').hover(
    function () {
      $(".Cv_container").css("cursor", "pointer");
    });

  $('.Cv_tooltip_close').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");
    });
  $('.Cv_tooltip_close').hover(
    function () {
      $(".Cv_tooltip_close").css("cursor", "pointer");
    });

  //An
  $('.An_container').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");

      $("#data4 svg .An_grande .st1").css("fill", "#ededef");
      $("#data4 svg .An_container .st0").css("fill", "#fc4646");
      $("#data4 svg .An_tooltip.tooltip").css("opacity", "1");
      $("#data4 svg .An_tooltip.tooltip").css("visibility", "visible");
    });
  $('.An_container').hover(
    function () {
      $(".An_container").css("cursor", "pointer");
    });

  $('.An_tooltip_close').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");
    });
  $('.An_tooltip_close').hover(
    function () {
      $(".An_tooltip_close").css("cursor", "pointer");
    });

  //Bi
  $('.Bi_container').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");

      $("#data4 svg .Bi_grande .st1").css("fill", "#ededef");
      $("#data4 svg .Bi_container .st0").css("fill", "#fc4646");
      $("#data4 svg .Bi_tooltip.tooltip").css("opacity", "1");
      $("#data4 svg .Bi_tooltip.tooltip").css("visibility", "visible");
    });
  $('.Bi_container').hover(
    function () {
      $(".Bi_container").css("cursor", "pointer");
    });

  $('.Bi_tooltip_close').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");
    });
  $('.Bi_tooltip_close').hover(
    function () {
      $(".Bi_tooltip_close").css("cursor", "pointer");
    });

  //Bper
  $('.Bper_container').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");

      $("#data4 svg .Bper_grande .st1").css("fill", "#ededef");
      $("#data4 svg .Bper_container .st0").css("fill", "#fc4646");
      $("#data4 svg .Bper_tooltip.tooltip").css("opacity", "1");
      $("#data4 svg .Bper_tooltip.tooltip").css("visibility", "visible");
    });
  $('.Bper_container').hover(
    function () {
      $(".Bper_container").css("cursor", "pointer");
    });

  $('.Bper_tooltip_close').click(
    function () {
      $("#data4 svg .riquadro .st0").css("fill", "#4A4A4A");
      $("#data4 svg .riquadro .sigla .st1").css("fill", "#1C1C1C");
      $("#data4 svg .riquadro .dettagli").css("opacity", "0");
      $("#data4 svg .tooltip").css("opacity", "0");
      $("#data4 svg .tooltip").css("visibility", "hidden");
    });
  $('.Bper_tooltip_close').hover(
    function () {
      $(".Bper_tooltip_close").css("cursor", "pointer");
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
});
