/**
 * RSVP receiver for the Sonia & Francis wedding website.
 * Paste this whole file into Extensions > Apps Script (inside your Google Sheet),
 * then Deploy > New deployment > Web app > Execute as: Me, Who has access: Anyone.
 * Copy the Web App URL into CONFIG.rsvp.endpoint in script.js.
 * After ANY change to this file: Deploy > Manage deployments > Edit > New version > Deploy.
 */
var SHEET_NAME = 'RSVPs';
var HEADERS = ['Received', 'Name', 'Phone', 'Attending', 'Guests', 'Message', 'Page'];

// Stops a cell from being run as a formula (=, +, -, @ at the start) and trims long text.
function clean_(v, max) {
  var s = String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim();
  if (s.length > (max || 500)) s = s.substring(0, max || 500);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return s;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (data.website) return json_({ ok: true });            // honeypot filled: ignore silently

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sh.setFrozenRows(1);
    }
    var row = sh.getLastRow() + 1;
    sh.getRange(row, 3).setNumberFormat('@');                // keep leading zeros in phone numbers
    var guests = Math.max(0, Math.min(50, parseInt(data.guests, 10) || 0));
    sh.getRange(row, 1, 1, HEADERS.length).setValues([[
      new Date(),
      clean_(data.name, 120),
      clean_(data.phone, 40),
      clean_(data.attending, 40),
      guests,
      clean_(data.message, 600),
      clean_(data.page, 300)
    ]]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function doGet() { return json_({ ok: true, message: 'RSVP endpoint is running.' }); }

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
