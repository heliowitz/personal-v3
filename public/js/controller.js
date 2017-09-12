let app = angular.module('SiteApp', ['ngMaterial'])
.controller('SiteCtrl', ($scope, $mdDialog) => {

	$scope.projects = [
		{
			"imgs": [
				{
					"path":'./assets/images/projs/solarsystem/1.png',
					"caption":"A big part of the development process was crafting animations and visuals for a pleasant, modern design."
				},
				{
					"path":'./assets/images/projs/solarsystem/2.png',
					"caption":"Information was split into overview and in-depth sections."
				},	
				{
					"path":'./assets/images/projs/solarsystem/3.png',
					"caption":"Other non-planetary bodies were added, like the Asteroid Belt."
				},	
			],
			"vids": [
				{
					"path":'./assets/video/solarsystem/1.mp4',
					"caption":"Thing",
				}
			],			
			"name":"Our Solar System",
			"about":"A website that animates and presents information about the Solar System",
			"stack":"HTML, CSS (SASS), Angular",
			"context":"The vast majority of educational resources about the solar system are poorly designed, and difficult to navigate. I wanted to create a far more streamlined, and easy-to-use interface.",
			"contributions": [
				"Developed a way for kids to learn the Solar System, featuring fun animations and clean-cut designs (something lacking from current solutions).",
				"Curated content from NASA, and other reputable sources.",
			],
			"notes": [
				"Would like to eventually add more elements of the Solar System (ie. comets, meteors, oort cloud, etc).",
				"All representations of the Solar System are scientifically inaccurate (the size and distance of planets are distorted for visibility). It would be cool to add a switch that toggled a to-scale representation of the Solar System.",
			],
			"links": [
				{
					"source":"Github",
					"linkurl":"http://en.wikipedia.org/wiki/Mango"
				},
				{
					"source":"CodePen",
					"linkurl":"codepen-link"
				},				
			]
		},	
		{
			"imgs": [
				{
					"path":'./assets/images/projs/darwinrockets/1.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},
				{
					"path":'./assets/images/projs/darwinrockets/2.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},	
				{
					"path":'./assets/images/projs/darwinrockets/3.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},								
			],
			"vids": [
				{
					"path":'./assets/video/darwin/1.mp4',
					"caption":"Thing",
				}
			],			
			"name":"Darwin Rockets",
			"about":"about line",
			"stack":"stack line",
			"context":"context line",
			"contributions": [
				"cont 1",
				"cont 2",
				"cont 3",
				"cont 4",
			],
			"notes": [
				"note 1",
				"note 2",
				"note 3",
				"note 4",
			],
			"links": [
				{
					"source":"Github",
					"linkurl":"github-link"
				},
				{
					"source":"CodePen",
					"linkurl":"codepen-link"
				},				
			]		
		},	
		{
			"imgs": [
				{
					"path":'./assets/images/projs/personal/1.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},
				{
					"path":'./assets/images/projs/personal/2.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},	
				{
					"path":'./assets/images/projs/personal/3.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},					
			],
			"vids": [
				{
					"path":'./assets/video/personal/1.mp4',
					"caption":"Thing",
				}
			],				
			"name":"Personal Site (v2)",
			"about":"about line",
			"stack":"stack line",
			"context":"context line",
			"contributions": [
				"cont 1",
				"cont 2",
				"cont 3",
				"cont 4",
			],
			"notes": [
				"note 1",
				"note 2",
				"note 3",
				"note 4",
			],
			"links": [
				{
					"source":"Github",
					"linkurl":"github-link"
				},
				{
					"source":"CodePen",
					"linkurl":"codepen-link"
				},				
			]		
		},	
		{
			"imgs": [
				{
					"path":'./assets/images/projs/schulich/1.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},
				{
					"path":'./assets/images/projs/schulich/2.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},	
				{
					"path":'./assets/images/projs/schulich/3.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},
				{
					"path":'./assets/images/projs/schulich/4.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},					
			],
			"name":"Schulich Dentistry",
			"about":"about line",
			"stack":"stack line",
			"context":"context line",
			"contributions": [
				"cont 1",
				"cont 2",
				"cont 3",
				"cont 4",
			],
			"notes": [
				"note 1",
				"note 2",
				"note 3",
				"note 4",
			],
			"links": [
				{
					"source":"Github",
					"linkurl":"github-link"
				},
				{
					"source":"CodePen",
					"linkurl":"codepen-link"
				},				
			]		
		},		
		{
			"imgs": [
				{
					"path":'./assets/images/projs//1.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},
				{
					"path":'./assets/images/projs/test/2.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},	
				{
					"path":'./assets/images/projs/test/3.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},	
			],
			"vids": [
				{
					"path":'./assets/video/graphic/1.mp4',
					"caption":"Thing",
				}
			],			
			"name":"Graphic Designers",
			"about":"about line",
			"stack":"stack line",
			"context":"context line",
			"contributions": [
				"cont 1",
				"cont 2",
				"cont 3",
				"cont 4",
			],
			"notes": [
				"note 1",
				"note 2",
				"note 3",
				"note 4",
			],
			"links": [
				{
					"source":"Github",
					"linkurl":"github-link"
				},
				{
					"source":"CodePen",
					"linkurl":"codepen-link"
				},				
			]		
		},
		{
			"imgs": [
				{
					"path":'./assets/images/projs//1.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},
				{
					"path":'./assets/images/projs/test/2.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},	
				{
					"path":'./assets/images/projs/test/3.png',
					"caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				},	
			],
			"vids": [
				{
					"path":'./assets/video/fitbit/1.mp4',
					"caption":"Thing",
				}
			],			
			"name":"Fitbit Client",
			"about":"about line",
			"stack":"stack line",
			"context":"context line",
			"contributions": [
				"cont 1",
				"cont 2",
				"cont 3",
				"cont 4",
			],
			"notes": [
				"note 1",
				"note 2",
				"note 3",
				"note 4",
			],
			"links": [
				{
					"source":"Github",
					"linkurl":"github-link"
				},
				{
					"source":"CodePen",
					"linkurl":"codepen-link"
				},				
			]		
		},																
	];

	$scope.copystatus = "Copy to Clipboard";
	$scope.copyToClip = function(str) {
		if (str == 'mail') {
			$('#contact-body-mail').select();
			document.execCommand('copy');
			// $scope.copystatus = "Copied!";
		} else if (str == 'phone') {
			$('#contact-body-phone').select();
			document.execCommand('copy');
			// $scope.copystatus = "Copied!";
		}
	}	

	$scope.showProj = function(ev, index) {
		$mdDialog.show({
	      controller: DialogController,
	      locals: {dataToPass: $scope.projects[index]},
	      templateUrl: '../html/dialog1.tmpl.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true,
	      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
	    })
	    .then(function(answer) {
	      $scope.status = 'You said the information was "' + answer + '".';
	    }, function() {
	      $scope.status = 'You cancelled the dialog.';
	    });
	}

	function DialogController($scope, $mdDialog, dataToPass) {
		$scope.data = dataToPass;

		$scope.hide = function() {
		  $mdDialog.hide();
		};

		$scope.cancel = function() {
		  $mdDialog.cancel();
		};

		$scope.answer = function(answer) {
		  $mdDialog.hide(answer);
		};
	}
});