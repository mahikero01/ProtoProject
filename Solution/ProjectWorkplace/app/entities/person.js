"use strict";
var Person = (function () {
    function Person(PersonID, FirstName, LastName, UserName, WorkDayNum, RoleID, IsActive) {
        this.PersonID = PersonID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.UserName = UserName;
        this.WorkDayNum = WorkDayNum;
        this.RoleID = RoleID;
        this.IsActive = IsActive;
    }
    return Person;
}());
exports.Person = Person;
