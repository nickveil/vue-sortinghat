var sortingHat = new Vue( {

	el:'#sortingHat',

	data : {

		newName :'',
  	selectedHouse : '',
  	selectedQuestions : '',
  	whichType:0,

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

  'Questions': [

    { 
      text: 'What is your favorite color?',
      answers: [
        {
          text: 'Scarlet',
          house: 'Gryffindor'
        },
        {
          text: 'Yellow',
          house: 'Hufflepuff'
        },
        {
          text: 'Blue',
          house: 'Ravenclaw'
        },
        {
          text: 'Green',
          house: 'Slytherin'
        }
      ]
    },
    { 
      text: 'What is your favorite animal?',
      answers: [
        {
          text: 'Lion',
          house: 'Gryffindor'
        },
        {
          text: 'Badger',
          house: 'Hufflepuff'
        },
        {
          text: 'Eagle',
          house: 'Ravenclaw'
        },
        {
          text: 'Snake',
          house: 'Slytherin'
        }
      ]
    },
    { 
      text: 'What kind of person do you try to be?',
      answers: [
        {
          text: 'Brave',
          house: 'Gryffindor'
        },
        {
          text: 'Loyal',
          house: 'Hufflepuff'
        },
        {
          text: 'Witty',
          house: 'Ravenclaw'
        },
        {
          text: 'Cunning',
          house: 'Slytherin'
        }
      ]
    },
    { 
      text: 'Who is your favorite witch or wizard?',
      answers: [
        {
          text: 'Albus Dumbledore',
          house: 'Gryffindor'
        },
        {
          text: 'Newt Scamander',
          house: 'Hufflepuff'
        },
        {
          text: 'Garrick Ollivander',
          house: 'Ravenclaw'
        },
        {
          text: 'Tom Riddle',
          house: 'Slytherin'
        }
      ]
    },
    { 
      text: 'What is your favorite Berty Bott\'s flavor?',
      answers: [
        {
          text: 'Grape',
          house: 'Gryffindor'
        },
        {
          text: 'Horseradish',
          house: 'Hufflepuff'
        },
        {
          text: 'Roast Beef',
          house: 'Ravenclaw'
        },
        {
          text: 'Spinach',
          house: 'Slytherin'
        }
      ]
    }

  ]

	
  },

	methods : {

		houseOrQuestion: function(){

			const idx = Math.floor(Math.random() * 10);
			var whichType=idx;

			if(whichType>4){
				this.randomHouse();
			}else{
				this.randomQuestion();
			}

		},

		randomHouse : function(){
			const idx = Math.floor(Math.random() * this.Houses.length);
	    this.selectedHouse = this.Houses[idx].name;
			
		},

		randomQuestion : function(){
			const idx = Math.floor(Math.random() * this.Questions.length);
	    this.selectedQuestions = this.Questions[idx].text;
		}

	}







});