angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
 $scope.config = {
    title: 'Products',
    tooltips: true,
    labels: false,
    mouseover: function() {},
    mouseout: function() {},
    click: function() {},
    legend: {
      display: true,
      //could be 'left, right'
      position: 'right'
    }
  };

  $scope.data = {
    series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
    data: [{
      x: "Laptops",
      y: [100, 500, 0],
      tooltip: "this is tooltip"
    }, {
      x: "Desktops",
      y: [300, 100, 100]
    }, {
      x: "Mobiles",
      y: [351]
    }, {
      x: "Tablets",
      y: [54, 0, 879]
    }]
  };
})

.controller('DadosCtrl', function($scope, Dados) {
  $scope.dados = Dados.all();
})

.controller('DadosDetalheCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
	$scope.dado = Dados.get($stateParams.dadoId);
}])

.controller('FontesCtrl', function($scope, Fontes) {
	$scope.aplicativos = Fontes.all();
  
})

// .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
//   $scope.friend = Friends.get($stateParams.friendId);
// })

.controller('AccountCtrl', function($scope, Usuario) {
	$scope.usuario = Usuario.get();
});
