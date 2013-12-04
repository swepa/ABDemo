var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    showCampaigns: function(event) {
        //event.preventDefault();
        app.showAlert("Show Campaigns link clicked.", "Information");
        //console.log('addLocation');

        return false;
    },

    renderHomeView: function() {
        var content = "";

        $.ajax({
            url      : 'https://s3.amazonaws.com/Blobs/OpenRatio',
            dataType : 'json',
            async: false,
            success  : function (data) {
                //alert("I Got data.....");
                //alert(data);
                //alert(data.compaignTitle);
                //alert(data.compaignDescription);
                //$('#content').html(data);
                //var obj = $.parseJSON( data );

                for (var i = 0, len = data.length; i < len; i++) {
                    //alert(data[i]);
                    //alert(data[i].campaignTitle);
                    //alert(data[i].campaignDescription);
                    content = content + data[i].campaignTitle + "<br />";
                    content = content + data[i].campaignDescription + "<br />";
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                app.showAlert("Something went wrong while fetching content of this app.", "Error");
                app.showAlert(jqXHR.responseText + "-" + textStatus + "-" + errorThrown, "Error Information");
                //$("#message").html(jqXHR.responseText + "-" + textStatus + "-" + errorThrown);
                //var obj = $.parseJSON( jqXHR.responseText );
                //$("#message").html(obj.message);
            },
        });
        var html =
            "<div class='header'><h1>AppBooster Demo</h1></div>" +
                "<div class='search-view'>" +
                content  +
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