//JS for page functionality
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $('.change-devoured').on('click', function(event) {
        var id = $(this).data('id')
        var eaten = $(this).data('devoured')

        var burgerState = {
            devoured: true,
        }

        // Send the PUT request.
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: burgerState,
        }).then(function() {
            console.log('Burger has been', eaten)
            // Reload the page to get the updated list
            location.reload()
        })
    })

    $('.create-form').on('submit', function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault()

        var newOrder = {
            name: $('#ca')
                .val()
                .trim(),
            sleepy: $('[name=sleepy]:checked')
                .val()
                .trim(),
        }

        // Send the POST request.
        $.ajax('/api/cats', {
            type: 'POST',
            data: newCat,
        }).then(function() {
            console.log('created new cat')
            // Reload the page to get the updated list
            location.reload()
        })
    })

    // $('.delete-cat').on('click', function(event) {
    //     var id = $(this).data('id')

    //     // Send the DELETE request.
    //     $.ajax('/api/cats/' + id, {
    //         type: 'DELETE',
    //     }).then(function() {
    //         console.log('deleted cat', id)
    //         // Reload the page to get the updated list
    //         location.reload()
    //     })
    // })
})
