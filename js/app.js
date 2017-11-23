var calculator = new Vue({
    el: '#calculator',
    data: {
        price: '',
        downPayment: '',
        tradeIn: '',
        length: '60',
        rate: '',
        selected: ''
    },
    computed: {
        calcPayment: function(e){
            var p = this.price - this.downPayment - this.tradeIn;
            var r = this.rate / 1200;
            var n = this.length;
            var i = Math.pow((1+r),n);
            var payment = ( p * r * i) / (i - 1) || 0;
            return currencyFormat(payment);
        },
        numFormat: function(e){
            e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    }

});

function currencyFormat (num) {
    return "$" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
