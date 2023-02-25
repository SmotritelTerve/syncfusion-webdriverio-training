const { pages } = require('./../po');

describe('Doctors page', () => {
    beforeEach(async () => {
        await pages('dashboard').open();
    })

    it('Check page title', async() => {
        
       await expect(browser)
        .toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it('Open modal window for adding a new doctor', async() => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await expect(pages('doctors').AddDoctorModal.rootEl).toBeDisplayed();
    });

    it('Add a new doctor', async() => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await expect(pages('doctors').AddDoctorModal.rootEl).toBeDisplayed();

        await pages('doctors').AddDoctorModal.input('name').setValue('John Doe');
        await pages('doctors').AddDoctorModal.input('phone').setValue('11111111111111');
        await pages('doctors').AddDoctorModal.input('email').setValue('test@test.com');
        await pages('doctors').AddDoctorModal.input('education').setValue('Basic');
        await pages('doctors').AddDoctorModal.input('designation').setValue('Test');

        await pages('doctors').AddDoctorModal.saveBtn.click();

        await expect(pages('doctors').AddDoctorModal.rootEl).not.toBeDisplayed();

        await expect(pages('doctors').specialistCard(8).name).toHaveText('Dr. John Doe');
        await expect(pages('doctors').specialistCard(8).education).toHaveText('Basic', {ignoreCase: true});
    });

    it('Close a modal window for adding a new doctor', async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await expect(pages('doctors').AddDoctorModal.rootEl).toBeDisplayed();
        await pages('doctors').AddDoctorModal.closeBtn.click();
        await expect(pages('doctors').AddDoctorModal.rootEl).not.toBeDisplayed();
    })
})