$(function() {
    $("#functionPicker").change(function() {
        $("#inputForm").html("");

        var selectedFunction = $("#functionPicker").val();

        if (selectedFunction == "name") {
            var newText =   '<div class="row">' +
                                '<div class="col text-center">' +            
                                    '<span class="mx-5"><input type="text" name="firstName" id="firstName" placeholder="Enter first name"></span>' +
                                    '<span class="mx-5"><input type="text" name="lastName" id="lastName" placeholder="Enter last name"></span>' +
                                    '<br>' +
                                    '<input type="hidden" name="actionType" value="name">' +
                                '</div>' +
                            '</div>' +
                            '<div class="row mt-4">' +
                                '<div class="col text-center">' +
                                    '<input type="submit">' +
                                '</div>' +
                            '</div>';

            $("#inputForm").html(newText);
            $("#inputForm").attr("method", "GET");
        }

        if (selectedFunction == "hamming") {
            var newText =   '<div class="row">' +
                                '<div class="col text-center">' +
                                    '<input type="number" name="hammingInput" id="hammingInput" placeholder="Enter a number">' +
                                    '<br>' +
                                    '<input type="hidden" name="actionType" value="hamming">' +
                                '</div>' +
                            '</div>' +
                            '<div class="row mt-4">' +
                                '<div class="col text-center">' +
                                    '<input type="submit">' +
                                '</div>' +
                            '</div>';
            
            $("#inputForm").html(newText);
            $("#inputForm").attr("method", "GET");
        }

        if (selectedFunction == "password") {
            var newText =   '<div class="row">' +
                                '<div class="col text-center">' +
                                    '<span class="mx-5"><input type="text" name="username" id="username" placeholder="Enter username"></span>' +
                                    '<span class="mx-5"><input type="password" name="password" id="password" placeholder="Enter password"></span>' +
                                    '<br>' +
                                    '<input type="hidden" name="actionType" value="password">' +
                                '</div>' +
                            '</div>' +
                            '<div class="row mt-4">' +
                                '<div class="col text-center">' +
                                    '<input type="submit">' +
                                '</div>' +
                            '</div>';
            
            $("#inputForm").html(newText);
            $("#inputForm").attr("method", "POST");
        }

        if (selectedFunction == "list") {
            var newText =   '<div class="row">' +
                                '<div class="col text-center">' +
                                    '<span class="mx-5"><input type="text" name="listVal1" id="listValue1" maxlength="1" placeholder="Enter first value"></span>' +
                                    '<span class="mx-5"><input type="text" name="listVal2" id="listValue2" maxlength="1" placeholder="Enter second value"></span>' +
                                    '<br>' +
                                    '<input type="hidden" name="actionType" value="list">' +
                                '</div>' +
                            '</div>' +
                            '<div class="row mt-4">' +
                                '<div class="col text-center">' +
                                    '<input type="submit">' +
                                '</div>' +
                            '</div>';

            $("#inputForm").html(newText);
            $("#inputForm").attr("method", "GET");
        }

        if (selectedFunction == "cylinder") {
            var newText =   '<div class="row">' +
                                '<div class="col text-center">' +
                                    '<span class="mx-5"><input type="number" name="cylRadius" id="cylRadius" placeholder="Enter a radius"></span>' +
                                    '<span class="mx-5"><input type="number" name="cylHeight" id="cylHeight" placeholder="Enter a height"></span>' +
                                    '<br>' +
                                    '<input type="hidden" name="actionType" value="cylinder">' +
                                '</div>' +
                            '</div>' +
                            '<div class="row mt-4">' +
                                '<div class="col text-center">' +
                                    '<input type="submit">' +
                                '</div>' +
                            '</div>';

            $("#inputForm").html(newText);
            $("#inputForm").attr("method", "POST");
        }
    })
})
