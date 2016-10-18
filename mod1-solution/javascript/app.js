(function() {
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope) {
		// set initial values
		$scope.countDishes = ""; // variable to display message
		$scope.lunchMenu = ""; // variable to capture user input

		// function called when button is clicked
		$scope.CheckMeal = function() {
			var str = $scope.lunchMenu;
			console.log("value of lunchMenu = " + str);

			// check if user input is empty
			if (str.trim() != "") {
				// not empty, count dishes
				var countDishes = CountDishes($scope.lunchMenu);
				if (countDishes <= 3) 
					$scope.countDishes = "Enjoy!";
				else
					$scope.countDishes = "Too much!";
			}

			else 
				// if empty then prompt to enter data
				$scope.countDishes = "Please enter data first"
		}

		function CountDishes(stringInput) {
			console.log("in CountDishes");
			var dishes = stringInput.split(",");
			var count = 0;
			var str = "";

			for (var i = 0; i < dishes.length; i++) {
				str = dishes[i];
				// check if dish is empty such as made of spaces. empty dishes are not counted
				if (str.trim() != "")
					count = count + 1;
			}

			return count;
		} 
	}
})();