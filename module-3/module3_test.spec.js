describe("Module 3: Basic examples", () => {
    it("set value", async () => {
        const doctorsButton = await $("div[routerLink='/doctors']");
        const addNewDoctorButton = await $(
            ".specialization-types button.e-control"
        );
        const doctorNameInput = await $("#Name input");

        await doctorsButton.click();
        await addNewDoctorButton.click();
        await doctorNameInput.setvalue("John Doe");
    });

    /**
     * click - scrolls to and then clicks at the center of selected element.
     * This method has optional object parameter 'options' that consists of parameters which allow to configure method:
     * - options.button(Number) - which mouse button should be clicked [0, 'left', 1, 'middle', 2, 'right']
     * - options.x(Number) - the number of horizontal pixes from the center of an element
     * - options.y(Number) - the number of verticaltal pixes from the center of an element
     */

    it("click command", async () => {
        await $(".specialist-display").click();

        await $(".specialist-display").click({
            button: "2",
            x: 20,
            y: 3
        });
    });

    /**
     * setValue - clears value of an element and sends a new value(sequence of key strokes) to it.
     * Value could be a string, number or array of  string and numbers.
     */

    it.only("setValue command", async () => {
        const doctorsButton = await $("div[routerLink='/doctors']");
        const addNewDoctorButton = await $(
            ".specialization-types button.e-control"
        );

        const doctorNameInput = await $("#Name input");
        await doctorsButton.click();
        await addNewDoctorButton.click();

        await doctorNameInput.setvalue("John Doe");

        await browser.pause(5000);
    });

    /**
    * addValue - adds a value to an element(not clears it before).
    * Value could be a string, number or array of strings and numbers.
    */
    it.only("addValue command", async () => {
        const doctorsButton = await $("div[routerLink='/doctors']");
        const addNewDoctorButton = await $(
            ".specialization-types button.e-control"
        );

        const doctorNameInput = await $("#Name input");
        await doctorsButton.click();
        await addNewDoctorButton.click();

        await doctorNameInput.setvalue("John Doe");
        await doctorNameInput.addvalue(" Test");

        await browser.pause(5000);
    });

    /**
     * isDisplayed() returns true if the selected DOM - element is displayed.
     * But WDI will not wait for the element to exist to execute this command.
     */

    it.only("isDisplayed()", async () => {
        const doctorsButton = await $("div[routerLink='/doctors']");
        const doctorNameInput = await $("#Name input");
        console.log(await doctorsButton.isDisplayd());
        console.log(await doctorNameInput.isDisplayd());
    });

    /**
     * isExisting() returns true if element exists in the DOM even if the element not visible on the page.
     */

    it.only("isExisting()", async () => {
        const addNewDoctorDialog = $(".new-doctor-dialog");
        console.log(await addNewDoctorDialog.isDisplayed());
        console.log(await addNewDoctorDialog.isExisting());
    });

    /**
     * waitForDisplaed - waits for an element for the provided amount of milliseconds to be displayed or not.
     * If the element wasn't found within provided timeout then the error will be thrown.
     * This method has optional object parameter 'options' that consist of the following items:
     * options.timeout(Number) - time to wait in ms(default 500)
     * options.reverse(Boolean) - if true it will wait or element not displayed(default: false)
     * options.timeoutMsg(String) - overrides the default error message
     * options.interval(Number) - interval between checks(default: 500)
     */

    it.only("waitForDisplayed()", async () => {
        const doctorsButton = await $("div[routerLink='/doctors']");

        await doctorsButton.waitForDisplayed();
        await doctorsButton.waitForDisplayed({
            timeout: 1000,
            reverse: true,
            timeoutMsg: "Sorry, the element is not displayed",
            interval: 50
        });
    });

    /**
     * waitForExist - waits for an element for the provided amount of milliseconds to be present or not.
     * If the element wasn't found within provided timeout then the error will be thrown.
     * This method has optional object parameter 'options' that consist of the following items:
     * options.timeout(Number) - time to wait in ms(default 500)
     * options.reverse(Boolean) - if true it will wait or element not displayed(default: false)
     * options.timeoutMsg(String) - overrides the default error message
     * options.interval(Number) - interval between checks(default: 500)
     */

    it.only("waitForExist()", async () => {
        const doctorsButton = await $("div[routerLink='/doctors']");

        await doctorsButton.waitForExist();
        await doctorsButton.waitForExist({
            timeout: 1000,
            reverse: true,
            timeoutMsg: "Sorry, the element is not displayed",
            interval: 50
        });
    });

    /**
     * $$ - is a short way to call findElements command
     * in order to fetch multiple elements that will be return as array of elements.
     * The difference when calling it from an element scope is that the driver will look within the children of that element.
     * If the element was not found on the page the command will return an empty array.
     */

    it.only("$$ command", async () => {
        const baseElement = await $(".dock");
        const childrenElements = await baseElement.$$(".sidebar-item");
        console.log(childrenElements);
        // OR
        const elements = await $(".dock").$$(".sidebar-item");
        console.log(elements);
    });
});
