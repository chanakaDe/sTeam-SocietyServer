/**
 * Created by chanaka on 4/23/15.
 */
function EventController($scope, eventService) {

    /**
     * Assigning system and scope variables
     */
    $scope.allEvents = [];
    $scope.allEventsSortedByDate = [];
    $scope.specificEvent = [];

    /**
     *  This method use to add a new Event to the sTeam server
     */

    $scope.addNewEvent = function (data) {
        eventService.submitEvent(data).then(function (data) {
            console.log(data);

            if (data === 'success') {
                alert("Add new Event Done");
            } else {
                alert("Error");
            }
        });
    };

    /**
     * This method use to get and view all the events from sTeam server
     */
    eventService.getallEvents().then(function (data) {
        console.log(data);
        $scope.allEvents = data;
    });

    /**
     * This method use to get and view all the events (sorted by date) from sTeam server
     */
    eventService.getEventsOrderByDate().then(function (data) {
        console.log(data);
        $scope.allEventsSortedByDate = data;
    });

    /**
     * This method use to get a specific event from sTeam server
     */
    eventService.getSpecificEvent().then(function (data) {
        console.log(data);
        $scope.specificEvent = data;
    });

}