(function(){
    angular.module('TimeWaste').controller('EditProfileController',
        ['Upload','$scope','$state','$http',function(Upload,$scope,$state,$http){
            
            $scope.user = JSON.parse(localStorage['User-Data']) || undefined;
            
            $scope.$watch(function(){
                return $scope.file;
            },function(){
                $scope.upload($scope.file);
            });
            
            $scope.upload = function(file){
                if(file){
                    Upload.upload({
                        url:'api/profile/editPhoto',
                        method:"POST",
                        data:{userId:$scope.user._id},
                        file:file
                    }).progress(function(evt){
                        console.log("Uploading...");
                    }).success(function(data){
                        
                    }).error(function(error){
                        console.log(error);
                    })
                }
            };
            
            $scope.updateUsername=function(){
                var request = {
                    userId:$scope.user._id,
                    username:$scope.user.username
                }
                $http.post('api/profile/updateUsername',request).success(function(){
                    console.log("success");
                    res.json({status:200});
                }).error(function(error){
                    console.log("error");
                    res.json({status:500});
                })
            }
            
            $scope.updateBio = function(req,res){
                var request={
                    userId:$scope.user._id,
                    bio:$scope.user.bio
                }
                $http.post('api/profile/updateBio',request).success(function(){
                    console.log("success");
                    res.json({status:200});
                }).error(function(error){
                    console.log("error");
                    res.json({status:500});
                })
            }
        }]);
}());