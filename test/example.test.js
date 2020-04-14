// IMPORT MODULES under test here:
// import example from '../src/example.js';

function stuff(eight){
    return eight;
}

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    

    const expected = 8;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = stuff(8);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
