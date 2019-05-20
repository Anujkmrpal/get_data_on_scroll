var express = require('express');
var router = express.Router();
var xlsx=require('xlsx');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
  
});
router.get('/getExcel', function(req, res, next) {
  var headingWb= xlsx.readFile('./public/assets/Book1.xlsx', {sheetRows: 1});
    var wsheading=headingWb.Sheets['Sheet1'];
    var headingData=xlsx.utils.sheet_to_json(wsheading, {
      header: 1,
      defval: '',
      blankrows: true
    });
//     console.log("headingData = ",headingData);

//     var range = xlsx.utils.decode_range(wsheading['!ref']);
// range.s.r = 1; // <-- zero-indexed, so setting to 1 will skip row 0
// wsheading['!ref'] = xlsx.utils.encode_range(range);
// console.log("wsheading = ",wsheading);
// var dataAAAA=xlsx.utils.sheet_to_json(wsheading, {header:1})


//  var dataAAAA=xlsx.utils.sheet_to_json(wsheading, {
//     header: 1,
//     defval: '',
//     blankrows: true
//   });
  // console.log("dataAAAA - ",dataAAAA);


  //   /* get the range */
  //  var range = xlsx.utils.decode_range(wsheading['!ref']);
  //  /* skip n rows */
  //  range.s.c+= 0;
  //  range.s.r+= 10;
  //  range.e.c+= 0;
  //  range.e.r+= 50;
  //  if(range.s.r >= range.e.r) range.s.r = range.e.r;
  //  /* update range */
  //  console.log("range =",range);
  //  wsheading['!ref'] = xlsx.utils.encode_range(range);

  //  console.log("wsheading wqw = ",wsheading);
  //  var dataAAAA=xlsx.utils.sheet_to_json(wsheading, {
  //   header: 1,
  //   defval: '',
  //   blankrows: true
  // });
  // console.log("dataAAAA - ",dataAAAA);





    var wb= xlsx.readFile('./public/assets/Book1.xlsx');
    var ws=wb.Sheets['Sheet1'];


    var data=xlsx.utils.sheet_to_json(ws, {
      header: 1,
      defval: '',
      blankrows: true
    });
  // console.log("data = ",data);
  return res.json({ title: 'Express' ,headingData:headingData,data:data});
});

module.exports = router;
