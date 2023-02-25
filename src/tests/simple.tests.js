xdescribe('Doctors page', () => {
    beforeEach(async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors");
    })

    it('Check page title', async() => {
        
        // const title =  await browser.getTitle();
        // console.log(title);

        // if(title !== 'Appointment Planner - Syncfusion Angular Components Showcase App'){
        //     throw new Error('Page title in"t correct')
        // }

        //other way to verify

        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it('Open modal window for adding a new doctor', async() => {
        // click on doctors item in the side menu
        // const doctorItem = await $('[routerLink="/doctors"]');
        // await doctorItem.click();
        await $('[routerLink="/doctors"]').click();
        // click on add new doctor btn
        await $('.specialization-types button.e-control').click();
        // check that a modal window is displayed
        await expect($('.new-doctor-dialog')).toBeDisplayed();
    });

    it('Add a new doctor', async() => {
        // click on doctors item in the side menu
        await $('[routerLink="/doctors"]').click();
        // click on add new doctor btn
        await $('.specialization-types button.e-control').click();
        // wait for visibility of modal window
        await $('.new-doctor-dialog').waitForDisplayed();

        await $('[name="Name"]').setValue('John Doe');
        await $('#DoctorMobile').setValue('11111111111111');
        await $('[name="Email"]').setValue('test@test.com');
        await $('[name="Education"]').setValue('Basic');
        await $('[name="Designation"]').setValue('Test');

        await $('.e-footer-content button.e-primary').click();

        await expect('$.new-doctor-dialog').not.toBeDisplayed();

        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8').$('.education')).toHaveText('Basic', {ignoreCase: true});
    });

    it('Close a modal window for adding a new doctor', async () => {
        await $('[routerLink="/doctors"]').click();
        await $('.specialization-types button.e-control').click();
        await $('.new-doctor-dialog').waitForDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect('$.new-doctor-dialog').not.toBeDisplayed();
    })

})