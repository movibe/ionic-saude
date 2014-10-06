angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Dados', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dados = [
    { id: 0, name: 'Todos', ico: 'clipboard' },
    { id: 1, name: 'Eu' , ico: 'person'  },
    { id: 2, name: 'Medidas Corporais' , ico: 'levels'  },
    { id: 3, name: 'Nutrição' , ico: 'fork'  },
    { id: 4, name: 'Preparo Físico' , ico: 'flame'  },
    { id: 5, name: 'Resultados' , ico: 'beaker'  },
    { id: 6, name: 'Sono' , ico: 'ios7-moon'  },
    { id: 7, name: 'Vitais' , ico: 'ios7-pie'  }

  ];

  return {
    all: function() {
      return dados;
    },
    get: function(friendId) {
      // Simple index lookup
      return dados[dadoId];
    }
  }
})

.factory('Usuario', [function () {
  
  var usuario = { 
    pic: 'perfil.jpg',
    firstName: 'Willian', 
    lastName: 'Ribeiro', 
    title: '16 de dezembro de 1987',
    problema: 'Hipertensão',
    nota: 'Em caso de emergência ligar para Dr. José',
    alergia: 'Penincilina',
    medicamento: 'Vitamina',
    conjuge: {name: 'Natalia Araujo', tel: 11949146353 },
    sangue: 'O+',
    peso: 82,
    altura: 175,
    contato: 'Natalia Araujo - Esposa'
  };

  return {
    get: function (){
      return usuario;  
    }

  }
}])

.factory('Fontes', [function () {
    
  var aplicativos = [
    { id: 0, name: 'UP', ico: 'clipboard' },
    { id: 1, name: 'Strava' , ico: 'person'  },
    { id: 2, name: 'Nike' , ico: 'levels'  }
  ];

  return {
    all: function (){
      return aplicativos;  
    }
  };
}]);