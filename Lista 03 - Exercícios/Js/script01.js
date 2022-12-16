var valor_a = parseFloat(prompt("Digite o valor A: "));
    var valor_b = parseFloat(prompt("Digite o valor B: "));
    var valor_c = parseFloat(prompt("Digite o valor C: "));
    var valor_d = parseFloat(prompt("Digite o valor D: "));

   var AmB = valor_a + valor_b;
   var AmC = valor_a + valor_c;
   var AmD = valor_a + valor_d;
   var BmC = valor_b + valor_c;
   var BmD = valor_b + valor_d;
   var CmD = valor_c + valor_d;

   var AxB = valor_a * valor_b;
   var AxC = valor_a * valor_c;
   var AxD = valor_a * valor_d;
   var BxC = valor_b * valor_c;
   var BxD = valor_b * valor_d;
   var CxD = valor_c * valor_d;

   document.write("valor A = "+ valor_a + "|valor B " + valor_b + "|valor C " + valor_c + "|valor D " + valor_d + "<br>");
   
   document.write(valor_a + " + " + valor_b + " = " + AmB + "<br>");
   document.write(valor_a + " + " + valor_c + " = " + AmC + "<br>");
   document.write(valor_a + " + " + valor_d + " = " + AmD + "<br>");
   document.write(valor_b + " + " + valor_c + " = " + BmC + "<br>");
   document.write(valor_b + " + " + valor_d + " = " + BmD + "<br>");
   document.write(valor_c + " + " + valor_d + " = " + CmD + "<br>");
   
   document.write("</br>");
 
   document.write("valor A = "+ valor_a + "|valor B " + valor_b + "|valor C " + valor_c + "|valor D " + valor_d + "<br>");
   document.write(valor_a + " X " + valor_b + " = " + AxB + "<br>");
   document.write(valor_a + " X " + valor_c + " = " + AxC + "<br>");
   document.write(valor_a + " X " + valor_d + " = " + AxD + "<br>");
   document.write(valor_b + " X " + valor_c + " = " + BxC + "<br>");
   document.write(valor_b + " X " + valor_d + " = " + BxD + "<br>");
   document.write(valor_c + " X " + valor_d + " = " + CxD + "<br>");
   
