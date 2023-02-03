import xlsx from 'xlsx';

// 엑셀 다운로드
function downloadExcelFile(data, fileName, sheetName) {
  const workBook = xlsx.utils.book_new();

  const workSheet = xlsx.utils.json_to_sheet(data.body);
  xlsx.utils.sheet_add_aoa(workSheet, data.header); // header set

  xlsx.utils.book_append_sheet(workBook, workSheet, sheetName);
  xlsx.writeFile(workBook, fileName);
}

export { downloadExcelFile };