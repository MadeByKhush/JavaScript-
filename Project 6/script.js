
    function calculation()
    {

        let valueA = parseFloat(document.getElementById("num1").value);
        let valueB = parseFloat(document.getElementById("num2").value);
        let opra = document.getElementById("operator").value
        let result;

        if(opra == '+') result =  valueA+valueB;
        else if(opra == '-') result =  valueA-valueB;
        else if(opra == '*') result =  valueA*valueB;
        else if(opra == '/') result =  valueA/valueB;

        document.getElementById("print").innerText = result;
    }

