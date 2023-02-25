const DashboardPage = require('./../po/pages/dashboard.page');
const DoctorsPage = require('./../po/pages/doctors.page');

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe('Doctors page', () => {
    beforeEach(async () => {
        await dashboardPage.open();
    })

    it('Check page title', async() => {
        
       await expect(browser)
        .toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    });

    it('Open modal window for adding a new doctor', async() => {
        await dashboardPage.sideMenu.item('doctors').click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await expect(doctorsPage.AddDoctorModal.rootEl).toBeDisplayed();
    });

    it('Add a new doctor', async() => {
        await dashboardPage.sideMenu.item('doctors').click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await expect(doctorsPage.AddDoctorModal.rootEl).toBeDisplayed();

        await $('[name="Name"]').setValue('John Doe');
        await $('#DoctorMobile').setValue('11111111111111');
        await $('[name="Email"]').setValue('test@test.com');
        await $('[name="Education"]').setValue('Basic');
        await $('[name="Designation"]').setValue('Test');

        await $('.e-footer-content button.e-primary').click();

        await expect('$.new-doctor-dialog').not.toBeDisplayed();

        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8')
            .$('.education'))
                .toHaveText('Basic', {ignoreCase: true});
    });

    it('Close a modal window for adding a new doctor', async () => {
        await dashboardPage.sideMenu.item('doctors').click();
        await doctorsPage.doctorListHeader.addNewDoctorBtn.click();
        await expect(doctorsPage.AddDoctorModal.rootEl).toBeDisplayed();
        await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
        await expect('$.new-doctor-dialog').not.toBeDisplayed();
    })

})