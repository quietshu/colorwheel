angular.module('co', []).controller('main', ['$scope', mainCtrl]);

function mainCtrl($scope) {
    $scope.colors = [];
    $scope.code   = "['#ffffff', '#ffffff', '#ffffff', '#888888', '#4d4d4d'],";
    $scope.bk     = [];
    $scope.bkhsv  = [];

    $scope.refresh = function () {
        $scope.colors = $scope.code.match(/#....../g);
        $scope.bk     = $scope.code.match(/#....../g);

        $scope.bkhsv = [];
        $scope.hsv   = [];
        $scope.h     = [];
        $scope.s     = [];
        $scope.v     = [];

        $scope.colors.forEach(function (color) {
            var c = (new Colorwheel(color)).hsv();
            $scope.hsv.push(c);
            $scope.bkhsv.push(JSON.stringify(c));
            $scope.h.push(c.h - $scope.hsv[0].h);
            $scope.s.push(c.s - $scope.hsv[0].s);
            $scope.v.push(c.v - $scope.hsv[0].v);
        });
    };

    $scope.refresh();

    $scope.$watch(function () {
        return $scope.colors.join('');
    }, function () {
        var hsv     = (new Colorwheel($scope.colors[0])).hsv();
        $scope.hsv  = [];
        $scope.colors.forEach(function (color, index) {
            var c                = new Colorwheel();
            c.setValues('hsv', [(hsv.h + ($scope.h[index] || 0) + 360) % 360, hsv.s + ($scope.s[index] || 0), hsv.v + ($scope.v[index] || 0)]);
            $scope.colors[index] = c.hexString();
            $scope.hsv.push(c.hsv());
        });
        $scope.code = $scope.colors.join(', ');
    });
}
