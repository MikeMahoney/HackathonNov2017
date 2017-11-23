var calculator = new Vue({
    el: '#calculator',
    data: {
        price: '',
        selected: '',
        currencySymbol: '€',
        durationProjects: 'monthly',
        durationDesk: 'monthly',
        pricePlanProject: 'pro',
        pricePlanDesk: 'pro',
        users: '5',
        projectsSelected: false,
        deskSelected: false,
        eduDiscount: false,
        customDiscount: ''
    },
    computed: {
        calcPayment: function(e){
            var payment = 0;
            if(this.projectsSelected){
                payment = parseInt(this.duration, 10) * parseInt(this.users, 10);
                if(this.eduDiscount == true){
                    payment = payment - (payment * 0.15);
                } else {
                    payment = payment - (payment * (this.customDiscount/100));
                }
            }
            if(this.deskSelected){
                if(this.eduDiscount == true){
                    payment = payment - (payment * 0.15);
                } else {
                    payment = payment - (payment * (this.customDiscount/100));
                }
            }
            return this.currencySymbol + payment;
        }
    }

});
