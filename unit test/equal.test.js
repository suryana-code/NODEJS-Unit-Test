test("test toBe", () => {
    const name = "Suryana";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Suryana');
});


test("test toEqual", () => {
    let person = {id: "MSH"};
    Object.assign(person, {name: "Suryana"}); 

    expect(person).toEqual({id: "MSH", name: "Suryana"});
})
