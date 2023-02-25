class SideMenuComponent{
    get rootEl(){
        return $('#plannerSiderBar');
    }

    get name( ){
        return this.rootEl.$(".name");
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
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }
}

module.exports = SideMenuComponent;