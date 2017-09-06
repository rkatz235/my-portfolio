app.controller('ProjectsController', ['$scope', function($scope){
  $scope.projects = [
    {
      name: "Website for Xuan Rong",
      description: "Second version of a website for Xuan Rong.  Hosted on AWS and created using HTML, CSS and Javascript.  Not yet formatted for mobile devices.",
      published: "May 2016",
      github: "http://github.com",
      link: "http://xuanrongmusic.com",
      screenshot:"../../img/xuanMyTry.png"
    },
    {
      name: "Website for Oberlin's Book Coop",
      description: "I worked with Andres Cuervo to integrate a database for books, users, and a digital library to create a web portal that aligns with the physical materials stored in the Book Coop.  This is to provide students with a free and accessible alternative to traditional textbook sellers.",
      published: "April 2015",
      github: "#",
      link: "bookcoop.org",
      screenshot: "../../img/bookCoop.png"
    },
    {
      name: "Musical Authorship Determinance",
      description: "Created alongside Joel Miller and Isaac Pearl, we combined our knowledge of music theory, natural language processing, and data mining to create an algorithm that determines musical authorship.  For the sake of time we focused on classical piano compositions.  We also used MIT's music21 Python library to help break down the harmonies and rhthyms of classical piano sheet music.",
      published: "December 2016",
      github: "#",
      link: "#",
    }
  ];
}]);
