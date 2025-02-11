const myMaths = require("./math");

test(`Addition de 2 et 3 doit retourner 5`, () => {
    expect(myMaths.add(2,3)).toBe(5);
});

test(`c et d doivent être égaux`, () => {
    expect(myMaths.equal(3,3)).toEqual(true);
})

test(`Addition de 2 et 3 doit retourner 5`, () => {
    expect(myMaths.multiply(2,3)).toBe(6);
});