describe("Test suite", () => {
    it("First test", async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App");
    })

    it("Second test", async () => {
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("input[name='Name']").setValue("John Doe");
        await $("//button[text()='Save']").click();

        const emailError = await $("label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email");
    })
})