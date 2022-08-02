function viewprice()
{
    var num1=Number(document.getElementById("fnum").value);
    var num2=Number(document.getElementById("snum").value);
    var num3=Number(document.getElementById("tnum").value);
    var num4=Number(document.getElementById("lnum").value);
    var num5=Number(document.getElementById("dnum").value);
    var res1=document.getElementById("result1");
    var res2=document.getElementById("result2");
    var res3=document.getElementById("result3");
    var total=num1+num2+num3+num4+num5;
    res1.innerHTML="The total price is:"+total;
    var ar=[];
    ar.push(num1);
    ar.push(num2);
    ar.push(num3);
    ar.push(num4);
    ar.push(num5);
    var gst=0;
    for(var i=0;i<ar.length;i++)
    {
      
        if(ar[i]>=100)
        {
            gst=gst+ar[i];
        }
    }
        var gst_amount=gst*18/100;
        res2.innerHTML="GST included for the product total price is:"+gst_amount;
        var fin=total+gst_amount;
        res3.innerHTML="The total result is:"+fin;
}