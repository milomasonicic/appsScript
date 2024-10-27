function doGet() {
    return HtmlService.createTemplateFromFile('index').evaluate()
        .setTitle('Banka 1')
        .addMetaTag('viewport','width=device-width , initial-scale=1')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  }
  
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
  }
  
  function globalVariables(){ 
    var varArray = {
      spreadsheetId   : '1iyciRtj5UoPn9vEhlXE554SaYd8PjG4lGK2r7iH3x58', //** CHANGE !!!
      dataRage        : 'Data!A3:D3',                                    //** CHANGE !!!
      idRange         : 'Data!A3:A',                                    //** CHANGE !!!
      lastCol         : 'D',                                            //** CHANGE !!!
      insertRange     : 'Data!A1:D1',                                   //** CHANGE !!!
      sheetID         : '0'                                             //** CHANGE !!! 
    };
    return varArray;
  }
  
  
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
    ws.appendRow([newId, e.first, e.last, e.age, e.loc]);
  }
  
  
  /*function addData(e){
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const ws = ss.getSheetByName("Sheet1");
   Logger.log("ws: " + ws); 
  
     // Proveri da li radni list postoji
    if (!ws) {
      Logger.log("Radni list 'DATA' nije pronađen.");
      return; // Izađi iz funkcije ako radni list nije pronađen
    }
    
    // Proveri poslednji red
    const lastRow = ws.getLastRow();
    if (lastRow < 2) { // Ako nema podataka od drugog reda
      Logger.log("Nema dovoljno redova u radnom listu.");
  
      // Dodaj nekoliko praznih redova ako ih nema
      ws.appendRow(["", "", "", "", ""]); // Dodaj prazni red
      ws.appendRow(["", "", "", "", ""]); // Dodaj još jedan prazni red
      return; // Izađi iz funkcije ako nema dovoljno redova
    }
  
  
    const uniqID = ws.getRange(2,1,ws.getLastRow()-1,1).getValues();
    var maxNumber =0;
    uniqID.forEach(r =>{
        maxNumber = r[0]> maxNumber? r[0] : maxNumber;
    });
    var newId =maxNumber +1;
    ws.appendRow([newId,
                  e.first,
                  e.last,
                  e.age,
                  e.loc                                      
                ]);  
  
  }*/