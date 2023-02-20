const BaseComponent = require("./base.component");

class SideMenuComponent extends BaseComponent {
    constructor() {
        super("#plannerSiderBar");
    }

    get name( ){
        return this.rootEl.$("p.name");
    }

    /**
     * @param name {'dashbord' | 'schedule' | 'doctors'}
     */
    item(name) {
        const selectors = {
            dashboard: '[routerlink="/dashboard"]',
            schedule: '[routerlink="/calendar"]',
            doctors: '[routerlink="/doctors"]',
        };
        return this.rootEL.$(selectors[name.toLowerCase()]);
    }
}

module.exports = SideMenuComponent;