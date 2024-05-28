function skillsMember() {
    return {
        restrict: 'E',
        scope: {
        member: '='
        },
        template: '<span>{{member.skills.join(", ")}}</span>'
    };
    }