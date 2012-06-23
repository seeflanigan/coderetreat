describe("CodeRetreat", function() {
  var life;

  beforeEach(function() {
    life = coderetreat;
  });

  it("welcomes you", function() {
    expect(life.begin()).toEqual("Welcome to Life");
  });

  it("does not last forever", function() {
    expect(life.end()).toEqual("Farewell, hope you made the most of it");
  });

  it("is up to you to define it", function() {
    expect(life.run()).toBeUndefined;
  });

});
