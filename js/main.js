var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    renderHomeView: function() {
        var html =
            "<div class='header'><h1>AppBooster Demo</h1></div>" +
                "<div class='search-view'>" +
                "<a href='#'>Home</a><br />" +
                "<a href='#' class='show-content'>Show Content</a>" +
                "</div>"
        $('body').html(html);
    },

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },

    initialize: function() {

        var self = this;
        document.addEventListener("deviceready", onDeviceReady, false);
        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
            //alert("device is ready, going to initilize Store.");

            //self.registerEvents();
            //self.initializeStore();
            self.showAlert('Device Ready.', 'Information');
            self.renderHomeView();

        }

        //self.registerEvents();
        self.showAlert('Application Ready.', 'Information');
        self.renderHomeView();

    }

};