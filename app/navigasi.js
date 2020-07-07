function career () {
    $("#career").attr("class", "active");
    $("#galeri").removeAttr("class");
    $("#message").removeAttr("class");
    $("#editprofil").removeAttr("class");

    $("#career_element").show();
    $("#galeri_element").hide();
    $("#message_element").hide();
    $("#editprofil_element").hide();
}

function galeri () {
    $("#galeri").attr("class", "active");
    $("#career").removeAttr("class");
    $("#message").removeAttr("class");
    $("#editprofil").removeAttr("class");

    $("#career_element").hide();
    $("#galeri_element").show();
    $("#message_element").hide();
    $("#editprofil_element").hide();
}

function message () {
    $("#message").attr("class", "active");
    $("#career").removeAttr("class");
    $("#galeri").removeAttr("class");
    $("#editprofil").removeAttr("class");

    $("#career_element").hide();
    $("#galeri_element").hide();
    $("#message_element").show();
    $("#editprofil_element").hide();
}

function editprofil () {
    $("#editprofil").attr("class", "active");
    $("#career").removeAttr("class");
    $("#galeri").removeAttr("class");
    $("#message").removeAttr("class");

    $("#career_element").hide();
    $("#galeri_element").hide();
    $("#message_element").hide();
    $("#editprofil_element").show();
}