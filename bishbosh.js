function myFunction2() {

    var x = document.getElementById("frm1");
    var loopValue = x.elements[0].value;
    var division1 = x.elements[1].value;
    var division2 = x.elements[2].value;
    var text="";
    var i;
    for (i = 1; i <= loopValue; i++) {

        if (i % division1 == 0 && i % division2 == 0) {

          text += "Bish-Bosh" + ", ";

          //  document.write("Bisch-Bosch" + ", ");
        } else if (i % division1 == 0) {
            text+="Bish" + ", ";


        } else if (i % division2 == 0) {
            text+="Bosh" + ", ";

          //  document.write("Bosch" + ", ");
        } else {
          text+=i + ", ";

            //document.write(i + ", ");
        }

    }
    document.getElementById("demo").innerHTML = text;


}
