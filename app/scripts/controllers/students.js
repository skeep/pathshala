angular.module('pathshalaApp').controller('StudentsCtrl', function ($scope) {
  'use strict';
  var Student = Parse.Object.extend('Student');
  var student = new Student();

  $scope.student = {};

  $scope.student.model = {};

  $scope.student.model.gender = '';

  $scope.student.formOptions = {};
  $scope.student.formOptions.religions = [
    {
      name: 'Hindu',
      value: 'hindu'
    },
    {
      name: 'Muslim',
      value: 'muslim'
    }
  ];

  $scope.student.save = function () {

    var newStudent = $scope.student.model;
    console.log(newStudent);

    student.save(newStudent, {
      success: function (student) {
        // Execute any logic that should take place after the object is saved.
        console.log('New object created with objectId: ' + student.id);
        $scope.student.model = {};
      },
      error: function (student, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and description.
        console.log('Failed to create new object, with error code: ' + error.description);
      }
    });
  };


});
