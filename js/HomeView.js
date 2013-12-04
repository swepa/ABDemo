/**
 * Created by Asim on 2013-12-03.
 */

var HomeView = function(store) {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('click', '.showCampaigns', this.showCampaigns);
    };

    this.showCampaigns = function(event) {
        event.preventDefault();
        app.showAlert("Show Campaigns link clicked.", "Information");
        //console.log('addLocation');

        return false;
    };

    this.render = function() {
        this.el.html(HomeView.template());
        return this;
    };

    this.initialize();
}

HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.ShowContentTemplate = Handlebars.compile($("#show-content-tpl").html());
