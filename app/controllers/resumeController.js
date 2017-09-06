app.controller("ResumeController", ['$scope', function($scope){
  $scope.education = [
    {
      school: "Oberlin College",
      class: "2017",
      gpa: 3.24,
      location: "Ohio",
      major: "Computer Science and Technology in Music and Related Arts",
      description: "I focused my studies on bridging concepts between programming and electronic music.  I have taken CS courses in mobile app development, databases, data mining, and machine learning.  Additionally I completed the track for a Techonology in Music and Related Arts major which focuses on sound recording, mixing, engineering, and performance."
    },
    {
      school: "Stuyvesant High School",
      class: "2013",
      gpa: 93.8,
      location: "New York",
      major: "Maths and Sciences High School",
      description: "At Stuyvesant I received a broad education in maths, sciences, and languages.  I took Chinese for all four years and took AP Chinese, AP US History, and AP Calculus."
    }
  ];
  $scope.professional = [
    {
      company: "Girls Who Code",
      position: "Teaching Assistant",
      year: "Summer 2015",
      location: "Seattle",
      description: "Mentor and role model to a classroom of 20 high school girls.  Tutoring a variety of computer science topics.  Providing updates and information to program staff."
    },
    {
      company: "Girls Who Code",
      position: "Teacher",
      year: "Summer 2016 & 2017",
      location: "New York",
      description: "Teach and tutor basic circuitry, Boostrap, HTML/CSS, Python, Javascript, Arduino, Django, etc."
    },
    {
      company: "The Royal Room",
      position: "Sound Engineer Intern",
      year: "Summer 2015",
      location: "Seattle",
      description: "Assist in setup and tear down of gear and equipment.  Provid live sounds reinforcement."
    }
  ];
  $scope.skills = [
    {
      skill: "Python",
      duration: "Since 2014",
      comfort: "high"
    },
    {
      skill: "AWS",
      duration: "Since 2015",
      comfort: "med"
    },
    {
      skill: "HTML/CSS",
      duration: "Since 2016",
      comfort: "high"
    },
    {
      skill: "Bootstrap",
      duration: "Since 2016",
      comfort: "high"
    },
    {
      skill: "Javascript",
      duration: "Since 2015",
      comfort: "med"
    },
    {
      skill: "jQuery",
      duration: "Since 2015",
      comfort: "high"
    },
    {
      skill: "AngularJS",
      duration: "Since 2017",
      comfort: "low"
    },
    {
      skill: "MySQL",
      duration: "Since 2014",
      comfort: "low"
    },
    {
      skill: "Ableton Live",
      duration: "Since 2014",
      comfort: "high"
    },
    {
      skill: "Java",
      duration: "Since 2014",
      comfort: "med"
    }
  ];
}]);
