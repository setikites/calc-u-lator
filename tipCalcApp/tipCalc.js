function centsToDollars (cents)
{
    return (cents / 100);
}

function dollarsToCents (dollars)
{
    return (dollars * 100);
}

function calculateTip()
{
    var tipForm = document.TipCalculator;
    
    var billBase = dollarsToCents (tipForm.bill.value - 0);
    var tipPct = tipForm.tip.value - 0;
    var numPeople = tipForm.numPeople.value - 0;
    
    // calculate tip
    var tip = Math.round((tipPct / 100.0) * billBase);
    
    // calculate bill
    var bill = (billBase + tip);
    
    // calculate amount per person
    var perPerson = Math.round (bill / numPeople);
    
    // set form values
    tipForm.answer.value = centsToDollars (bill);
    tipForm.tipTotal.value = centsToDollars (tip);
    tipForm.perPerson.value = centsToDollars (perPerson);
    
}
