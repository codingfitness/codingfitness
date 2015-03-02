describe('very simple case of alien language', function() {
  var dictionary = [
    "abc",
    "bca",
    "dac",
    "dbc",
    "cba"
  ];

  var L = 3;

  it('should find the number of words for test case 1', function() {
    var pattern = "(ab)(bc)(ca)";
    expect(numberWords(pattern, dictionary, L)).to.equal(2);
  });
 
  it('should find the number of words for test case 2', function() {
    var pattern = "abc";
    expect(numberWords(pattern, dictionary, L)).to.equal(1);
  });

  it('should find the number of words for test case 3', function() {
    var pattern = "(abc)(abc)(abc)";
    expect(numberWords(pattern, dictionary, L)).to.equal(3);
  });

  it('should find the number of words for test case 4', function() {
    var pattern = "(zyx)bc";
    expect(numberWords(pattern, dictionary, L)).to.equal(0);
  });    

});

describe('alien language test 1', function() {
  var dictionary = [
    "nwlrbbmqbh",
    "cdarzowkky",
    "hiddqscdxr",
    "jmowfrxsjy",
    "bldbefsarc",
    "bynecdyggx",
    "xpklorelln",
    "mpapqfwkho",
    "pkmcoqhnwn",
    "kuewhsqmgb",
    "buqcljjivs",
    "wmdkqtbxix",
    "mvtrrbljpt",
    "nsnfwzqfjm",
    "afadrrwsof",
    "sbcnuvqhff",
    "bsaqxwpqca",
    "cehchzvfrk",
    "mlnozjkpqp",
    "xrjxkitzyx",
    "acbhhkicqc",
    "oendtomfgd",
    "wdwfcgpxiq",
    "vkuytdlcgd",
    "ewhtacioho"
  ];

  var L = 10;

  it('should find the number of words for test case 1', function() {
    var pattern = "rdtqkvwcsg";
    expect(numberWords(pattern, dictionary, L)).to.equal(0);
  });
 
  it('should find the number of words for test case 2', function() {
    var pattern = "nwlr(nqxb)bm(dgqw)bh";
    expect(numberWords(pattern, dictionary, L)).to.equal(1);
  });

  it('should find the number of words for test case 3', function() {
    var pattern = "(gu)(umo)(cdq)(bru)(ote)(xyk)(oah)(hwc)(vdm)(xr)";
    expect(numberWords(pattern, dictionary, L)).to.equal(0);
  });

  it('should find the number of words for test case 4', function() {
    var pattern = "(aknw)(glmw)(jlue)(kruw)(bci)(xbu)(mue)(qemn)(tyab)(hmrd)";
    expect(numberWords(pattern, dictionary, L)).to.equal(1);
  });

  it('should find the number of words for test case 5', function() {
    var pattern = "(ijklmopqrstuvyzabcefgh)(qrtuvwxyzabcdefghijklmnop)(ijmnopqsuvwxyabcdefgh)(fghijklmopqrstuvxyzbcde)(pqrstuvwxyzbcdefghijkno)(ghijlpqsuvwxyzabcdef)(yzbcdefgijlmnopqrstuvwx)(nopqrstuvwxyzabcdefghijklm)(klmnopqrsuvwxyzabcdefghj)(rstuvwxbcdefgijklmnopq)";
    expect(numberWords(pattern, dictionary, L)).to.equal(6);
  });

  it('should find the number of words for test case 6', function() {
    var pattern = "(mnopqrstuvwxyzbcefgikl)(efghjkmnopqrstuvwxyzabcd)(tuvwxyzbcdefghijklmnopq)(pqrstuvwxyabcdefghijklmn)(cdefghijklmnopqstvxzab)(klmnoqrstuvwxyabcdeghi)(jlopqrsuvwxyzabdefghi)(cdefghijklmnopqruxzab)(abdefghijklmnpqrstuvwxz)(zabcdfgijklmnoprstuvwxy)";
    expect(numberWords(pattern, dictionary, L)).to.equal(7);
  });

  it('should find the number of words for test case 7', function() {
    var pattern = "(rtwd)(dgmy)(sdqr)(kzc)(nqyb)(qtv)(qbc)(xijt)(vcil)(bnvx)";
    expect(numberWords(pattern, dictionary, L)).to.equal(1);
  });

  it('should find the number of words for test case 8', function() {
    var pattern = "(ghjklmnpstuvwyzabcdef)(xyzabdegjklmnopqstuv)(abcdefghiklmnopqrstuwxz)(cdefghijklmnopqrstuvwxyab)(hjmnopqrstuvwxyzabcdefg)(rtvwyzabcdefghijklnop)(yzcdefhjklmnpqrstuvwx)(opqrstvwxyzabcdefghijklm)(qruvwxyzacdefgijlmno)(xyzabcegiklmnopqstuvw)";
    expect(numberWords(pattern, dictionary, L)).to.equal(8);
  });

  it('should find the number of words for test case 9', function() {
    var pattern = "(almq)(fot)(pqah)(kovd)(ira)(mqr)(mvwx)(svbj)(sao)(zfi)";
    expect(numberWords(pattern, dictionary, L)).to.equal(1);
  });

  it('should find the number of words for test case 10', function() {
    var pattern = "(opqrsvwxyzabcdefghijklmn)(yzabcdefgijklmnpqrstuvwx)(ijklmopqrstuvwxzabcefgh)(stuvwxyzabcdefhijklmnopq)(mnopqrstuvwxyzabdefghijkl)(ijklmnopqrstuvwxzbcdefh)(stuvwzabcdefgijklmnopq)(efghijklmnopqrsuvwxyacd)(rstuvxyzadefghijklmnopq)(noqrsuwxyzabdfghjlm)";
    expect(numberWords(pattern, dictionary, L)).to.equal(8);
  });    

});
