describe("numberWord", function() {
  it("returns the plain english version of a single digit number", function () {
    numberWord(5).should.equal('five');
  });

  it("returns plain english version of a number in the teens", function () {
    numberWord(15).should.equal('fifteen');
  });

  it("returns a plain english version of a double digit number over twenty", function () {
    numberWord(35).should.equal('thirty five');
  });

  it("returns a plain english version of a double digit number over twenty", function () {
    numberWord(25).should.equal('twenty five');
  });

  it("returns a plain english version of a 3 digit number with a second digit higher than 1", function () {
    numberWord(125).should.equal("one hundred twenty five");
  });
  it("returns a plain english version of a 3 digit number with a second digit higher than 1", function () {
    numberWord(115).should.equal("one hundred fifteen");
  });

  it("returns a plain english version of a 4 digit number with a third digit higher than 1", function () {
    numberWord(1126).should.equal("one thousand one hundred twenty six");
  });

  it("returns a plain english version of a 4 digit number with a third digit less than 1", function () {
    numberWord(1118).should.equal("one thousand one hundred eighteen");
  });

  it("returns a plain english version of a 5 digit number with a first digit less than higher than 19 and a third digit higher than 1", function () {
    numberWord(65348).should.equal("sixty five thousand three hundred fourty eight");
  });

  it("returns a plain english version of a 5 digit number with a first digit less than higher than 19 and a third digit higher than 1", function () {
    numberWord(18310).should.equal("eighteen thousand three hundred ten");
  });

  it("returns a plain english version of a 5 digit number with a first digit less than higher than 19 and a third digit higher than 1", function () {
    numberWord(18336).should.equal("eighteen thousand three hundred thirty six");
  });

});

