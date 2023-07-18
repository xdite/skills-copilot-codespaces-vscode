function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        controller: 'SkillsMemberCtrl',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member: '='
        }
    }
}