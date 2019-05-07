// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {

  'use strict';

  // Global Variables within this
  var url = 'https://etwl67dlx2.execute-api.ap-southeast-1.amazonaws.com/staging/v1/';
  var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'APIKey': 'f912f198-e443-11e8-a9c5-89e884cb2e41'
  };

  window.addEventListener('load', function() {
    // Load the Churches
    loadChurches();

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission 
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {

        // Check if the data are all valid
        if (form.checkValidity() === false) {
          
        } else {
          // Prepare the data for submission
          var parameters = {
            'Believers': [
              {
                'FirstName': $('#firstName').val(),
                'LastName': $('#lastName').val(),
                'Gender': $('#gender').val(),
                'AgeGroup': $('#ageGroup').val(),
                'MobileNumber': $('#phoneNo').val(),
                'EmailAddress': $('#email').val(),
                'DecisionMade': $('#decision').val(),
                'HomePostalCode': $('#postalCode').val(),
                'RallyTime': $('#rally').val(),
                'LanguageType': $('#language').val(),
                'NameOfFriend': $('#nameOfFriend').val(),
                'FriendContactNumber': $('#phoneNoFriend').val(),
                'FriendChurchName': $('#churchNameFriend').val(),
                'AdditionalComments': $('#comments').val()
              }
            ]
          };
          parameters = JSON.stringify(parameters);

          // Display loading first
          loadModal();

          // Login first to get the access token
          $.ajax({
              type: 'POST',
              url: url + 'believers',
              headers: headers,
              data: parameters,
              timeout: 60000
          })
          .done(function(data) {
            // Hide the modal
            clearModal();   

            // Display the info
            if (data.Message == 'OK') { 
              infoModal('Success', 'The form was successfully submitted.', true);
            } else {
              infoModal('Failed', 'Failed to submit the form.', false);
            }
          })
          .fail(function(error) {
              infoModal('Failed', 'Unable to submit the form.', false);
          });
        }

        // Update the class of the form
        form.classList.add('was-validated');

        event.preventDefault();
        event.stopPropagation();
      }, false);
    });

    // Trigger the click for the final button
    $('btnSuccess').click(function() {
      location.reload();
    });

  }, false);

  // Load the churches
  function loadChurches() {
    // Prepare the data
    var parameters = {
      'UserName': 'admin',
      'Password': 'pass1234'
    };
    parameters = JSON.stringify(parameters);

    // Display loading first
    loadModal();

    // Login first to get the access token
    $.ajax({
        type: 'POST',
        url: url + 'login',
        headers: headers,
        data: parameters,
        timeout: 60000
    })
    .done(function(data) {
      // Now load the churches
      $.ajax({
          type: 'GET',
          url: url + 'churches?AccessToken=' + data.AccessToken,
          headers: headers,
          timeout: 60000
      })
      .done(function(data) {
        // Prepare the html string
        var options = '<option value="">Choose...</option>';
        options += '<option value="Don\'t know">Don\'t know</option>';
        options += '<option value="Others">Others</option>';

        // Loop through the churches
        for (var i in data) {
          options += '<option value="' + data[i].Name + '">' + data[i].Name + '</option>';
        }

        // Append the options
        $('#churchNameFriend').append(options);     

        // Hide the modal
        clearModal();   
      })
      .fail(function(error) {
          infoModal('Failed', 'Unable to load the churches.', false);
      });
    })
    .fail(function(error) {
        infoModal('Failed', 'Unable to load the churches.', false);
    });
  }

  // Display info modal
  function infoModal(title, message, final) {
    $('#modalTitle').html(title);
    $('#modalMessageBody').html(message);
    $('#modalHeader').removeClass('d-none');
    $('#modalMessageBody').removeClass('d-none');

    if (final) {
      $('#modalSuccess').removeClass('d-none');
    } else {
      $('#modalFooter').removeClass('d-none');
    }
    
    $('#modalDialog').modal('show');
  }

  // Generate loading modal
  function loadModal() {
    $('#modalMessageBody').html('Loading');
    $('#modalMessageBody').removeClass('d-none');
    $('#modalLoadingBody').removeClass('d-none');
    $('#modalDialog').modal('show');
  }

  // Clear the modal form
  function clearModal() {
    $('#modalTitle').html('');
    $('#modalMessageBody').html('');
    $('#modalHeader').addClass('d-none');
    $('#modalMessageBody').addClass('d-none');
    $('#modalLoadingBody').addClass('d-none');
    $('#modalFooter').addClass('d-none');
    $('#modalDialog').modal('hide');
  }

})();