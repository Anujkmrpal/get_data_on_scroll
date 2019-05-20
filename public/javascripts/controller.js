app.controller("myCntr", function ($scope,$timeout, myFactory) {
    console.log("asfsdfsd");
    $scope.heading=[];
    $scope.showRow=[];
    $scope.rows=[];
    $scope.check=1;
    $scope.rowsLength=0;
    var promise = myFactory.getExcelData();
    promise.then(function (data) {
        console.log("data  - ",data);
        $scope.heading=data.data.headingData;
        $scope.rows=data.data.data;
        
// for(var i = 1; i <= $scope.rowsLength; i++) {
//     $scope.showRow.push($scope.rows[i]);
//   }
console.log("$scope.rows length = ",$scope.rows.length);
        $scope.loadMore();
    });
    
    $scope.loadMore = function() {
        $scope.last=$scope.rowsLength;
        console.log("$scope.last  = ",$scope.last);
        $scope.rowsLength=$scope.rowsLength+10;
        console.log("$scope.rowsLength = ",$scope.rowsLength);
        
        for(var i =$scope.last; i < $scope.rowsLength; i++) {
            console.log("yyyyy  = ",$scope.rows[i]);
            if(i===0){}else{
                $scope.showRow.push($scope.rows[i]);      
            }
          
        }
        $scope.check=2;
        console.log("$scope.showRow =",$scope.showRow);
      };
$scope.getData=function(){
if($scope.check==1){
    $timeout( function(){ }, 2000);
}else{
    $scope.loadMore();
}
}
    
});