function filterFunction() {

    var input = document.getElementById("myInput").value;
    var filter = input.toUpperCase();
    var a = document.getElementsByTagName("li");

    for (var i = 0; i < a.length; i++) {  
        var txtValue = a[i].textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {

            console.log(txtValue.toUpperCase());
            console.log(filter);
            console.log(txtValue.toUpperCase().indexOf(filter));

            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
  
}