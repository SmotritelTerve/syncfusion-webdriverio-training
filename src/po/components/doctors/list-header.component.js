const BaseComponent = require("../common/base.component");

class ListHeaderComponent extends BaseComponent {
    get rootEl(){
        return $('.specialization-types');
    }

    get addNewDoctorBtn() {
        return this.rootEl.$("button.e-control");
    }
}

module.exports = ListHeaderComponent;