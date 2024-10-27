function listSheetsWithLinks() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheets = ss.getSheets();
    
    sheets.forEach(sheet => {
      const sheetName = sheet.getName();
      const sheetId = sheet.getSheetId();
      const sheetUrl = `https://docs.google.com/spreadsheets/d/${ss.getId()}/edit#gid=${sheetId}`;
      
      Logger.log(`${sheetName}: ${sheetUrl}`); // Prikaz imena radnog lista i linka
    });
  }
  