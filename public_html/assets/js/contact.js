  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Unesite Vaše ime'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Unesite Vašu email adresu'
                    },
                    emailAddress: {
                        message: 'Unesite email adresu pravilnog oblika'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Unesite Vaš broj telefona'
                    },
                    phone: {
                        message: 'Unesite tačan broj telefona'
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 500,
                        message:'Poruka mora sadržati minimum 10 karaktera maximum 500'
                    },
                    notEmpty: {
                        message: 'Unesite poruku minimalne dužine'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});