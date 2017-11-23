var calculator = new Vue({
    el: '#calculator',
    data: {
        price: '',
        selected: '',
        currencySymbol: '€',
        durationProjects: '',
        durationDesk: '',
        pricePlanProject: '',
        pricePlanDesk: '',
        users: '5',
        agents: '0',
        helpdocSites: '0',
        projectsSelected: false,
        deskSelected: false,
        eduDiscount: false,
        customDiscount: ''
    },
    computed: {
        calcPayment: function(e){
            var payment = 0;

            //Calculate Projects totals
            if(this.projectsSelected){
                payment += parseInt(this.durationProjects, 10) * parseInt(this.users, 10);
            }

            //Calculate Desk totals
            if(this.deskSelected){
                var planPrice = 0;
                if(this.durationDesk == 'monthly' && this.pricePlan == 'basic'){
                    planPrice = 7;
                } else if (this.durationDesk == 'monthly' && this.pricePlanDesk == 'pro'){
                    planPrice = 5;
                } else if (this.durationDesk == 'annual' && this.pricePlanDesk == 'basic'){
                    planPrice = 30;
                } else if (this.durationDesk == 'annual' && this.pricePlanDesk == 'pro'){
                    planPrice = 20;
                }
                var helpdocSitesTotal = 0;
                if(parseInt(this.helpdocSites, 10) > 1){
                    helpdocSitesTotal = parseInt(this.helpdocSites, 10) * 20;
                }
                payment += (parseInt(planPrice, 10) * parseInt(this.agents, 10)) + helpdocSitesTotal;
            }

            //Subtract discounts
            if(this.eduDiscount == true){
                payment = payment - (payment * 0.15);
            } else {
                payment = payment - (payment * (this.customDiscount/100));
            }

            return this.currencySymbol + payment;
        }
    },
    methods: {
        clickTest: function (event) {
            chrome.tabs.create({ url: 'exportHTML/export.html' });
        }
    }

});
