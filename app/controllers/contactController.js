app.controller('ContactController', ['$scope', function($scope){
  $scope.contacts = [
    {
      profile: "LinkedIn",
      icon: "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-256.png"
    },
    {
      profile: "Github",
      icon: "https://image.flaticon.com/icons/png/512/2/2600.png"
    },
    {
      profile: "Email",
      icon: "https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/08_mail-512.png"
    }
  ];
}]);
