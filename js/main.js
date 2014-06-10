var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    renderHomeView: function() {
        var content = "";
        //var app = this;
        app.showAlert('Loading your latest campaigns from AppBooster Hybrid enable..', 'Information');
        //this.showAlert('2nd call.', 'Information');
        $.ajax({
            url      : 'https://s3.amazonaws.com/Blobs/OpenRatio',
            dataType : 'json',
            async: false,
            success  : function (data) {
                alert("data = " + data);
                for (var i = 0, len = data.length; i < len; i++) {
                    //alert(data[i].campaignTitle);
                    //alert(data[i].campaignDescription);
                    content = content + "<h1>" +data[i].campaignTitle + "</h1>";
                    content = content + "<h2>" + data[i].campaignDescription + "</h2>";
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                app.showAlert("Something went wrong while fetching content of this app.", "Error");
                app.showAlert(jqXHR.responseText + "-" + textStatus + "-" + errorThrown, "Error Information");
            },
            done: function (data){
                app.showAlert("Done is called..", "Information");
            }
        });

        //this.showAlert('Call finish.', 'Information');
        var html =
            "<div class='header'><h1>AppBooster Demo</h1></div>" +
                "<div class='search-view'>" +
                content  +
                "</div>"
        $('body').html(html);
    },

    initialize: function() {

        var self = this;
        document.addEventListener("deviceready", onDeviceReady, false);
        // device APIs are available

        function onDeviceReady() {
            // Empty
            //alert("device is ready, going to initilize Store.");

            //self.registerEvents();
            //self.initializeStore();

            //self.showAlert('Device Ready.', 'Information');
            self.renderHomeView();
        }

        //self.registerEvents();
        //self.showAlert('Application Ready.', 'Information');
        //self.renderHomeView();

    }

};
