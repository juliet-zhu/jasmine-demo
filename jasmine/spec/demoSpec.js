describe("Juliet jasmine demo",function(){
    var juliet = new Juliet();
    beforeEach(function(){
        this.addMatchers({
            nameJuliet:function(){
                return this.actual == "Juliet";
            }
        });
    });
    it("juliet",function(){
        expect(juliet.name()).nameJuliet();
    });
    it("say hello",function(){
        expect(juliet.sayHello()).toEqual("Hello,from Juliet");
    });
    it("age",function(){
        expect(juliet.age()).not.toEqual(25);
    });
    it("eat",function(){
        expect(juliet.eat()).toEqual("no meat");
    });
})

//examples here come from demo
describe("Other mathers",function(){
    it("add two numbers together",function(){
        expect(1+3).toEqual(4);
    });
    it("is defined",function(){
        var name = "Juliet";
        expect(name).toBeDefined();
    });
    it("is not defined",function(){
        var name;
        expect(name).toBeUndefined();
    });
    it("is true",function(){
        expect(true).toBeTruthy();
    });
    it("is false",function(){
        expect(false).toBeFalsy();
    });
    it("math the text",function(){
        expect("hello Juliet").toMatch(/hello/g);
    });
    it("contain",function(){
        expect(['apple','orange']).toContain('apple');
    });

});


