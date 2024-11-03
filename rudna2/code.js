function doGet() {

    return HtmlService.createTemplateFromFile('index').evaluate()
          .setTitle('Upitnik Hipotekarna Banka')
        
          .addMetaTag('viewport','width=device-width , initial-scale=1')
          .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)  
  }
  
  function include(filename) {
      return HtmlService.createHtmlOutputFromFile(filename).getContent();
  }
  
  
  //add data
  
  function addData(e) {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const ws = ss.getSheetByName("Sheet1");
    
      // Proveri da li radni list postoji
      if (!ws) {
        Logger.log("Radni list 'Sheet1' nije pronađen.");
        return; // Izađi iz funkcije ako radni list nije pronađen
      }
    
      // Proveri poslednji red
      const lastRow = ws.getLastRow();
      Logger.log("Poslednji red: " + lastRow);
    
      // Ako nema podataka, dodaj jedan prazan red
      if (lastRow < 2) { // Ako nema podataka od drugog reda
        Logger.log("Nema dovoljno redova u radnom listu. Dodajem novi prazan red.");
        ws.appendRow(["", "", "", "", ""]); // Dodaj jedan prazan red
      }
    
      // Sada možemo da dobijemo jedinstvene ID-eve
      const updatedLastRow = ws.getLastRow(); // Ažuriraj lastRow nakon dodavanja praznog reda
      //const uniqID = ws.getRange(2, 1, updatedLastRow - 1, 1).getValues();
      const uniqID = ws.getRange(2, 1, updatedLastRow + 1, 1).getValues();
      var maxNumber = 0;
    
      uniqID.forEach(r => {
        maxNumber = r[0] > maxNumber ? r[0] : maxNumber;
      });
    
      var newId = maxNumber + 1;
    
      // Dodaj nove podatke
      ws.appendRow([newId, e.ime_kompanije, e.broj_zaposlenih, e.tip_drustva, e.procenat_prihoda, 
      e.jasna_strategija,
      e.imenovanje_sluzbenika,
      e.zivotna_sredina, e.esg_okvir,
      e.esg_okvir_dodatak,
      e.procjena_rizika,
      test1 ="lorem 241", 
      test2="lorem 241" , 
      test3="lorem 241" ,
      test4 ="lorem 241",   
      test5 ="lorem 241",
      test6 ="lorem 241", 
      test7="lorem 241",  e.test8="lorem 241",  e.test9="lorem 241",
      test10="lorem 241", e.test11="lorem 241", e.test12="lorem 241", 
      test13="lorem 241", e.test14="lorem 241", e.test15="lorem 241"
           
      ]);
    }