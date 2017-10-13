var sortingHat = new Vue( {

	el:'#sortingHat',

	data : {

		newName :'',
  	selectedHouse : '',

		'Houses': [

    {
      name: 'Gryffindor',
      description: ''
    },
    {
      name: 'Hufflepuff',
      description: ''
    },
    {
      name: 'Ravenclaw',
      description: ''
    },
    {
      name: 'Slytherin',
      description: ''
    }

  ],

	
  },

	methods : {

		addQuestion : function(){
			const idx = Math.floor(Math.random() * this.Houses.length);
	    this.selectedHouse = this.Houses[idx].name;
			
		}

	}







});