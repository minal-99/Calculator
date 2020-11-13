let btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    //Input for bill amount
    let billAmount = parseFloat(document.getElementById('bill_amount').value);
    //Input for tip percentage
    let tipPercentage = document.getElementById('tip_percentage').value;
    //Input for number of people
    let numberPeople = document.getElementById('no_people').value;
    if(billAmount <= 0 || tipPercentage <= 0 || numberPeople <= 0)
    {
        alert("Invalid input");
    }
    else if(isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberPeople))
    {
        alert("Characters not allowed");
    }
    else if(numberPeople%1 != 0){
        alert("Number of people should not be a float number");
    }
    else{
    let value = billAmount / tipPercentage;
    //Calculate tip amount to be paid per person
    let tipAmount = document.getElementById('tip_amount').value= '$'+(value/ (numberPeople)).toFixed(2);
    //Calculate total amount to be paid per person
    let totalAmount = document.getElementById('total').value ='$'+((billAmount + value)/(numberPeople)).toFixed(2);
    }
})
jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});
