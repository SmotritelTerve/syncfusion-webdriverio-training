const ListHeaderComponent = require("../components/doctors/list-header.component");
const AddDoctorComponent = require("../components/doctors/add-doctor.component");

class DoctorsPage{
    constructor() {
        // super("/showcase/angular/appointmentplanner/#/doctors");
        this.AddDoctorModal = new AddDoctorComponent();
        this.doctorListHeader = new ListHeaderComponent();
    }

    async open(){
        await browser
            .url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors')
    }

    specialistCard(id) {
        return new SpecialistCard(id);
    }
}

module.exports = DoctorsPage;