//V2, user inputs a seed word that applies entropy to an rog.
//There's an input box.
//The user types in one word.
//That word is applied as entropy to the rog.
//The users can experiment with different words to try to get different results, or perhaps, to conclude that off of the word they picked,
//the resulting scripture was in fact given to them by god.
function getScripture(entropy){
  passtheword = entropy; //pass this from user input //use my code from The Updater.
                        //test that the value has changed with console.log.
  //Math.seedrandom(passtheword)
  //Math.seedrandom()
  Math.seedrandom(passtheword, { entropy: true });
  console.log(Math.random());          // Always 0.9282578795792454
  randBook = Math.floor(1 + Math.random() * 66); // untested.
  var bookNumSearch = randBook - 1;
  var randBookName = bookName[bookNumSearch]; //important, the normal function

  if (randBookName == "Genesis") {
    var chapternum = 50; //
    var arr = genesisArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Exodus") {
    var chapternum = 40; //
    var arr = exodusArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Leviticus") {
    var chapternum = 27; //
    var arr = leviticusArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Numbers") {
    var chapternum = 36; //
    var arr = numbersArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Deuteronomy") {
    var chapternum = 34; //
    var arr = deuteronomyArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Joshua") {
    var chapternum = 24; //
    var arr = joshuaArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Judges") {
    var chapternum = 21; //
    var arr = judgesArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Ruth") {
    var chapternum = 4; //
    var arr = ruthArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "1 Samuel") {
    var chapternum = 31; //
    var arr = onesamuelArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "2 Samuel") {
    var chapternum = 24; //
    var arr = twosamuelArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "1 Kings") {
    var chapternum = 22; //
    var arr = onekingsArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "2 Kings") {
    var chapternum = 25; //
    var arr = twokingsArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "1 Chronicles") {
    var chapternum = 29; //
    var arr = onechroniclesArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "2 Chronicles") {
    var chapternum = 36; //
    var arr = twochroniclesArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Ezra") {
    var chapternum = 10; //
    var arr = ezraArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Nehemiah") {
    var chapternum = 13; //
    var arr = nehemiahArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Esther") {
    var chapternum = 10; //
    var arr = estherArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Job") {
    var chapternum = 42; //
    var arr = jobArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Psalms") {
    var chapternum = 150; //
    var arr = psalmsArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Proverbs") {
    var chapternum = 31; //
    var arr = proverbsArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Ecclesiastes") {
    var chapternum = 12; //
    var arr = ecclesiastesArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Song of Solomon") {
    var chapternum = 8; //
    var arr = songofsolomonArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Isaiah") {
    var chapternum = 66; //
    var arr = isaiahArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Jeremiah") {
    var chapternum = 52; //
    var arr = jeremiahArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Lamentations") {
    var chapternum = 5; //
    var arr = lamentationsArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Ezekiel") {
    var chapternum = 48; //
    var arr = ezekielArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Daniel") {
    var chapternum = 12; //
    var arr = danielArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Hosea") {
    var chapternum = 14; //
    var arr = hoseaArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Joel") {
    var chapternum = 3; //
    var arr = joelArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Amos") {
    var chapternum = 9; //
    var arr = amosArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Obadiah") {
    var randChapter = 1;
    var randVerseCount = 21;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Jonah") {
    var chapternum = 4; //
    var arr = jonahArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Micah") {
    var chapternum = 7; //
    var arr = micahArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Nahum") {
    var chapternum = 3; //
    var arr = nahumArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Habakkuk") {
    var chapternum = 3; //
    var arr = habakkukArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Zephaniah") {
    var chapternum = 3; //
    var arr = zephaniahArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Haggai") {
    var chapternum = 2; //
    var arr = haggaiArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Zechariah") {
    var chapternum = 14; //
    var arr = zechariahArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Malachi") {
    var chapternum = 4; //
    var arr = malachiArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Matthew") {
    var chapternum = 28; //
    var arr = exodusArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Mark") {
    var chapternum = 16; //
    var arr = markArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Luke") {
    var chapternum = 24; //
    var arr = lukeArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "John") {
    var chapternum = 21; //
    var arr = johnArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Acts") {
    var chapternum = 28; //
    var arr = actsArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Romans") {
    var chapternum = 16; //
    var arr = romansArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "1 Corinthians") {
    var chapternum = 16; //
    var arr = onecorinthiansArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "2 Corinthians") {
    var chapternum = 13; //
    var arr = twocorinthiansArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Galatians") {
    var chapternum = 6; //
    var arr = galatiansArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Ephesians") {
    var chapternum = 6; //
    var arr = ephesiansArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Philippians") {
    var chapternum = 4; //
    var arr = philippiansArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Colossians") {
    var chapternum = 4; //
    var arr = colossiansArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "1 Thessalonians") {
    var chapternum = 5; //
    var arr = thessaloniansArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }

  else if (randBookName == "2 Thessalonians") {
    var chapternum = 3; //
    var arr = twothessaloniansArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "1 Timothy") {
    var chapternum = 6; //
    var arr = onetimothyArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "2 Timothy") {
    var chapternum = 4; //
    var arr = twotimothyArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Titus") {
    var chapternum = 3; //
    var arr = titusArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Philemon") {
    var randChapter = 1;
    var randVerseCount = 25;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Hebrews") {
    var chapternum = 13; //
    var arr = hebrewsArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "James") {
    var chapternum = 5; //
    var arr = jamesArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "1 Peter") {
    var chapternum = 5; //
    var arr = onepeterArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "2 Peter") {
    var chapternum = 3; //
    var arr = twopeterArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "1 John") {
    var chapternum = 5; //
    var arr = onejohnArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "2 John") {
    var randChapter = 1;
    var randVerseCount = 13;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "3 John") {
    var randChapter = 1;
    var randVerseCount = 14;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Jude") {
    var randChapter = 1;
    var randVerseCount = 25;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  else if (randBookName == "Revelation") {
    var chapternum = 22; //
    var arr = revelationArr //
    var randChapter = Math.floor(1 + Math.random() * chapternum);
    var randVerseCount = arr[randChapter - 1] ;
    var randVerse = Math.floor(1 + Math.random() * randVerseCount)
  }
  //
  vargetScripture = randBookName + " " + randChapter + ":" + randVerse;
  vargetScriptureLink = new String("https://bible-api.com/" + randBookName + "+" + randChapter + ":" + randVerse);
  console.log(vargetScripture) //delete
  console.log(vargetScriptureLink) //delete
  //vargetScriptureOutput = vargetScripture + "<br>" + "<a href=\"" + vargetScriptureLink + "\">" + vargetScriptureLink + "</a>";
  vargetScriptureOutput = "<a href=\"" + vargetScriptureLink + "\">" + vargetScripture + "</a>";


  function fetchScripture(scripturelink) {
  $.getJSON(scripturelink, function(data) {

    var text = `<div style="display:inline;margin-top:-20px;margin-left:6px;">
           ${data.text} <br> <br>
          </div>`

    $(".scripture").html(text);
    });
  }
  fetchScripture(vargetScriptureLink)
  return vargetScriptureOutput;
}
