describe("Module 4: Advanced examples", () => {
    beforeEach(async () => {
        await browser.url("/showcase/angular/appoinmentplanner/#/doctors");
    });

    /**
     * $ - is a short way to call the findElement command
     * in order to fetch a single element on the page similar 
     * to the $ command from the browser scope.
     * The difference when calling it from an element scope is
     * that the driver will look whithin the children of that element.
     * If the element was not found on the page the command will
     * throw an Error.
     */

    it("$ command", async() => {
        const baseElement = await $(".specialist-display");
        const childrenElement = await baseElement.$("#Specialist_1");
        childrenElement.click();
        // OR
        const element = await $(".specialist-display").$("#Specialist_1");
        console.log(element);
    })
})