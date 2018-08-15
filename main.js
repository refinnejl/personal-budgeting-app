//Date
    var d = new Date();
    var n = 20;
    var day = d.setDate(n);
    var month = d.getMonth();
    
    var marr = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var date1 = marr[month] + ' ' + d.getDate();
    var day = d.setDate(n+6);
    var date2 = marr[month] + ' ' + d.getDate();
    var dtext = 'Week of ' + date1 + ' to ' + date2;
    document.getElementById('date').innerHTML = dtext;

    //Money you can spend
    var tCost = document.getElementById('tCost').value;
    var cost1 = document.getElementById('cost1').value;
    var cost2 = document.getElementById('cost2').value;
    var cost3 = document.getElementById('cost3').value;
    var spendSum = parseFloat(tCost) - (parseFloat(cost1)+ parseFloat(cost2) + parseFloat(cost3));
    var spendTotal =  '$ ' + parseFloat(spendSum).toFixed(2);
    document.getElementById('spendTotal').innerHTML = spendTotal;
   
        
    
   

   

    

    
    


