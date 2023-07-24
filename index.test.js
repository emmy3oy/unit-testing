const { reverse, greet, subtraction } = require("./index");
const chai = require("chai");
describe("Function that reverses a string", () => {
  it("should be a function", () => {
    chai.expect(typeof reverse).to.deep.equal('function');
  });
  it("should reverse a string", () => {
    chai.expect(reverse("hello")).to.be.equal("olleh");
  });
  it("should always have strings as arguments", () => {
    chai.expect(reverse(4)).to.be.equal("Argument has to be a string");
  });
});

describe("function that returns a greeting", () => {
  it("should be a function", () => {
    chai.expect(typeof greet).to.deep.equal("function");
  });
  it("should return the greeting message with the given name", () => {
    chai.expect(greet('Aisosa')).to.be.equal("Hello Aisosa");
  });

  it("should handle empty name and return a generic greeting", () => {
    chai.expect(greet()).to.be.equal("Hello");
  });

  
});


// describe("function that performs subtraction", () => {
//   it("should be a function", () => {
//     chai.expect(typeof substraction).to.deep.equal("function");
//   });

//   it("should subtract two numbers and return the result", () => {
//     chai.expect(substraction(4, 1)).to.be.equal(3);
//   });

//   it("should handle non-number arguments and return an error message", () => {
//     chai.expect(substraction('7', '9')).to.be.equal("Arguments have to be a number");
//   });

//   it("should handle one non-number argument and return an error message", () => {
//     chai.expect(substraction(4, '1')).to.be.equal("Arguments have to be a number");
//   });

//   it("should not handle more than two arguments and return an error message", () => {
//     chai.expect(substraction(4, 1, 6)).to.be.equal("Must have just 2 arguments allowed");
//   });
// });



describe("function that performs subtraction", () => {
  it("should be a function", () => {
    chai.expect(typeof subtraction).to.deep.equal("function");
  });

  it("should subtract two numbers and return the result", () => {
    chai.expect(subtraction(4, 1)).to.be.equal(3);
  });

  it("should handle non-number arguments and return an error message", () => {
    chai
      .expect(subtraction("7", "9"))
      .to.be.equal("Arguments have to be a number");
  });

  it("should handle one non-number argument and return an error message", () => {
    chai
      .expect(subtraction(4, "1"))
      .to.be.equal("Arguments have to be a number");
  });

  it("should not handle more than two arguments and return an error message", () => {
    chai
      .expect(subtraction(4, 1, 6))
      .to.be.equal("Must have just 2 arguments allowed");
  });
});
