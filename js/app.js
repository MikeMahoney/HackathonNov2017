var calculator = new Vue({
    el: '#calculator',
    data: {
        price: '',
        selected: '',
        currencySymbol: '€',
        duration: 'monthly',
        pricePlan: 'pro',
        users: '5',
        projectsSelected: false,
        deskSelected: false,
        eduDiscount: false,
        customDiscount: ''
    },
    computed: {
        calcPayment: function(e){
            var payment = parseInt(this.duration, 10) * parseInt(this.users, 10);
            if(this.eduDiscount == true){
                payment = payment - (payment * 0.15);
            } else {
                payment = payment - (this.customDiscount/100);
            }
            return this.currencySymbol + payment;
        }
    }

});
