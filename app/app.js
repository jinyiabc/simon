var simonGame = angular.module('simonGame',[]);



simonGame.controller('gameController',['$scope',function($scope){

   $scope.onSwitch = false;
   $scope.reStart = false;
   $scope.count = 0 ;
   $scope.array = [];
   $scope.listener = false;
   $scope.array1 = [] ;
   $scope.count1 = 0;
   $scope.count2 = 0;
   $scope.strict = true;

   $scope.check = function(){
     if($scope.count2%2 == 0){
       $scope.strict = false;
      $scope.count2 += 1;
      console.log('Not Strict');
      console.log($scope.strict);

    } else {
      $scope.strict = true;
      $scope.count2 = 0;
      console.log('Strict');
      console.log($scope.strict);
    }
   }

   $scope.playAudio1 = function(){
       if($scope.array.length >0){

     if($scope.listener != true){
     document.getElementById("firstAudio").play();
     console.log('computer success1');
 }

       if ($scope.listener) {
       $scope.array1.push(1);
       $scope.count1 +=1 ;
       console.log($scope.array1);
       document.getElementById("firstAudio").play();

         if ($scope.array[$scope.count1-1] != 1){
           console.log("wrong at 1 and count:"+$scope.count1);
           //console.log($scope.strict);
               if ($scope.strict == true){
                   $scope.listener == false;
                   $scope.array = [];    // reStart
                   $scope.reStart = true;
                   $scope.array1 = [];
                   $scope.count1 = 0;
                   $scope.count = 0
                   setTimeout($scope.onOff,500);
                   setTimeout($scope.robertPlay,1500);

                   console.log($scope.array);
                   console.log($scope.array1);
               } else {
                   setTimeout($scope.playSimon,1000);
                   console.log('repeat');
               }

           //$scope.robertPlay();
         } else {
             //$scope.listener == true;
             console.log("Correct at count:"+$scope.count1);
              if ($scope.array1.length == $scope.array.length){
                console.log("Correct End after count:"+$scope.array1.length);
                $scope.listener == false;
                $scope.array1 = [];
                $scope.count1 = 0;
                setTimeout($scope.robertPlay,1000);
              }
         }
     }
    }
   };
   $scope.playAudio2 = function(){
       if($scope.array.length >0){

     if($scope.listener == false){
     document.getElementById("secondAudio").play();
     console.log('computer success2');

 }

     if($scope.listener){
       $scope.array1.push(2);
       $scope.count1 +=1 ;
       console.log($scope.array1);
       document.getElementById("secondAudio").play();

         if ($scope.array[$scope.count1-1] != 2){
           console.log("wrong at 2 and count:"+$scope.count1);

           if ($scope.strict == true){
               $scope.listener == false;
               $scope.array = [];    // reStart
               $scope.reStart = true;
               $scope.array1 = [];
               $scope.count1 = 0;
               $scope.count = 0
               setTimeout($scope.onOff,500);
               setTimeout($scope.robertPlay,1500);

               console.log($scope.array);
               console.log($scope.array1);
           } else {
               setTimeout($scope.playSimon,1000);
               console.log('repeat');
           }
           //$scope.robertPlay();
         } else {
             //$scope.listener == true;
             console.log("Correct at count:"+$scope.count1);
              if ($scope.array1.length == $scope.array.length){
                console.log("Correct End after count:"+$scope.array1.length);
                $scope.listener == false;
                $scope.array1 = [];
                $scope.count1 = 0;
                setTimeout($scope.robertPlay,1000);
              }
         }
     }
    }
   };
   $scope.playAudio3 = function(){
       if($scope.array.length >0){

     if($scope.listener == false){
     document.getElementById("thirdAudio").play();
     console.log('computer success3');

 }

     if($scope.listener){
       $scope.array1.push(3);
       $scope.count1 +=1 ;
       console.log($scope.array1);
       document.getElementById("thirdAudio").play();

         if ($scope.array[$scope.count1-1] != 3){
           console.log("wrong at 3 and count:"+$scope.count1);
           if ($scope.strict == true){
               $scope.listener == false;
               $scope.array = [];    // reStart
               $scope.reStart = true;
               $scope.array1 = [];
               $scope.count1 = 0;
               $scope.count = 0
               setTimeout($scope.onOff,500);
               setTimeout($scope.robertPlay,1500);

               console.log($scope.array);
               console.log($scope.array1);
           } else {
               setTimeout($scope.playSimon,1000);
               console.log('repeat');
           }
           //$scope.robertPlay();
         } else {
             //$scope.listener == true;
             console.log("Correct at count:"+$scope.count1);
              if ($scope.array1.length == $scope.array.length){
                console.log("Correct End after count:"+$scope.array1.length);
                $scope.listener == false;
                $scope.array1 = [];
                $scope.count1 = 0;
                setTimeout($scope.robertPlay,1000);
              }
         }
     }
    }
   };
   $scope.playAudio4 = function(){
       if($scope.array.length >0){

     if($scope.listener == false){
     document.getElementById("fourthAudio").play();
     console.log('computer success4');

 }

     if($scope.listener){
       $scope.array1.push(4);
       $scope.count1 +=1 ;
       console.log($scope.array1);
       document.getElementById("fourthAudio").play();

         if ($scope.array[$scope.count1-1] != 4){
           console.log("wrong at 4 and count:"+$scope.count1);
           if ($scope.strict == true){
               $scope.listener == false;
               $scope.array = [];    // reStart
               $scope.reStart = true;
               $scope.array1 = [];
               $scope.count1 = 0;
               $scope.count = 0
               setTimeout($scope.onOff,500);
               setTimeout($scope.robertPlay,1500);

               console.log($scope.array);
               console.log($scope.array1);
           } else {
               setTimeout($scope.playSimon,1000);
               console.log('repeat');
           }
           //$scope.robertPlay();
         } else {
             //$scope.listener == true;
             console.log("Correct at count:"+$scope.count1);
              if ($scope.array1.length == $scope.array.length){
                console.log("Correct End after count:"+$scope.array1.length);
                $scope.listener == false;
                $scope.array1 = [];
                $scope.count1 = 0;
                setTimeout($scope.robertPlay,1000);
              }
         }
     }
    }
   };

   $scope.onOff = function(){
     $scope.count += 1 ;

     if($scope.count%2 == 1){
     $scope.onSwitch = true;
     $scope.reStart = false;
     console.log($scope.count);
   } else {
     $scope.onSwitch = false;
     $scope.count = 0 ;
     $scope.count1 = 0 ;
     $scope.array = [];
     $scope.array1 = [];
     $scope.listener = false;
     console.log($scope.count);

   }
   };

   $scope.robertPlay = function(){
      if ($scope.reStart == false){

       $scope.listener == false; //
    // if($scope.onSwitch){            //Math.floor(Math.random()*(max-min+1)+min)
       $scope.number = Math.floor(Math.random()*4+1);

       $scope.array.push($scope.number);
       console.log($scope.array);
       console.log($scope.array1);
       //$scope.playSimon();
       setTimeout($scope.playSimon, 1000);
       if ($scope.array.length >= 5){
         $scope.onSwitch = false;
         console.log($scope.array);
       }
       }
   };

   $scope.playSimon = function(){
        //$scope.array = [1,1]
        $scope.listener = false;
     for( var i=0; i<$scope.array.length; i++){
       if($scope.array[i] == 1){
           console.log('play 1 by computer');
         setTimeout($scope.playAudio1, i*1000);
       } else if ($scope.array[i] == 2) {
           console.log('play 2 by computer');

         setTimeout($scope.playAudio2, i*1000);
       } else if ($scope.array[i] == 3) {
           console.log('play 3 by computer');

         setTimeout($scope.playAudio3, i*1000);
       } else {
           console.log('play 4 by computer');

         setTimeout($scope.playAudio4, i*1000);
       }
     }
     //console.log($scope.array);
       setTimeout(function(){
           $scope.listener = true;
           $scope.array1 = [];
           $scope.count1 = 0;
       },($scope.array.length)*1000);




        // for( var i=0; i<$scope.array.length; i++){
         //}


   };




}]);
