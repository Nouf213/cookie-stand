'use strict';

let workinghours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];

const seattle = {
  name: 'seattle',
  mincust: 23,
  maxcust : 65,
  avgcookie:6.3,
  salesperhour:[],
  total : 0,
  customerperhour:[],

  getSales: function() {
    for( let i = 0;i < workinghours.length;i++ ){
      this.salesperhour.push ( Math.ceil( generateRandomNumber( this.mincust, this.maxcust ) * this.avgcookie ) );
      this.customerperhour.push ( generateRandomNumber( this.mincust,this.maxcust ) );
      this.total += this.salesperhour[i];
    } // console.log(sales);
  },

  render: function() {
    const parentElement = document.getElementById( 'sales-data' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workinghours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workinghours[i]} : ${this.salesperhour[i]} cookies.`;
    }

    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total} coockies.`;
  }
};



console.log( generateRandomNumber( 23, 65 ) );

const tokyo = {
  name: 'tokyo',
  mincust: 3,
  maxcust : 24,
  avgcookie:1.2,
  salesperhour:[],
  customerperhour:[],
  total:0,
  getSales: function() {
    for( let i = 0;i < workinghours.length;i++ ){
      this.salesperhour.push ( Math.ceil( generateRandomNumber( this.mincust, this.maxcust ) * this.avgcookie ) );
      this.customerperhour.push ( generateRandomNumber( this.mincust,this.maxcust ) );
      this.total = +this.salesperhour[i];
    } // console.log(sales);
  },
  render: function() {
    const parentElement = document.getElementById( 'sales-data' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workinghours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workinghours[i]} : ${this.salesperhour[i]} cookies.`;
    }

    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total} coockies.`;
  }
};


console.log( generateRandomNumber( 3, 24 ) );

const dubai = {
  name: 'dubai',
  mincust: 11,
  maxcust : 38,
  avgcookie:3.7,
  salesperhour:[],
  customerperhour:[],
  total:0,
  getSales: function() {
    for( let i = 0;i < workinghours.length;i++ ){
      this.salesperhour.push ( Math.ceil( generateRandomNumber( this.mincust, this.maxcust ) * this.avgcookie ) );
      this.customerperhour.push ( generateRandomNumber( this.mincust,this.maxcust ) );
      this.total = +this.salesperhour[i];
    } // console.log(sales);
  },
  render: function() {
    const parentElement = document.getElementById( 'sales-data' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workinghours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workinghours[i]} : ${this.salesperhour[i]} cookies.`;
    }

    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total} coockies.`;
  }
};



console.log( generateRandomNumber( 11, 38 ) );

const paris = {
  name: 'paris',
  mincust: 20,
  maxcust : 38,
  avgcookie:2.3,
  salesperhour:[],
  customerperhour:[],
  total:0,
  getSales: function() {
    for( let i = 0;i < workinghours.length;i++ ){
      this.salesperhour.push ( Math.ceil( generateRandomNumber( this.mincust, this.maxcust ) * this.avgcookie ) );
      this.customerperhour.push ( generateRandomNumber( this.mincust,this.maxcust ) );
      this.total = +this.salesperhour[i];
    } // console.log(sales);
  },
  render: function() {
    const parentElement = document.getElementById( 'sales-data' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workinghours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workinghours[i]} : ${this.salesperhour[i]} cookies.`;
    }

    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total} coockies.`;
  }
};



console.log( generateRandomNumber( 20, 38 ) );

const lima = {
  name: 'lima',
  mincust: 2,
  maxcust : 16,
  avgcookie:4.6,
  salesperhour:[],
  customerperhour:[],
  total:0,
  getSales: function() {
    for( let i = 0;i < workinghours.length;i++ ){
      this.salesperhour.push ( Math.ceil( generateRandomNumber( this.mincust, this.maxcust ) * this.avgcookie ) );
      this.customerperhour.push ( generateRandomNumber( this.mincust,this.maxcust ) );
      this.total = +this.salesperhour[i];
    } // console.log(sales);
  },
  render: function() {
    const parentElement = document.getElementById( 'sales-data' );

    const articleElement = document.createElement( 'article' );
    parentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.name;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let i = 0; i < workinghours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workinghours[i]} : ${this.salesperhour[i]} cookies.`;
    }

    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total : ${this.total} coockies.`;
  }
};




console.log( generateRandomNumber( 2, 16 ) );

seattle.getSales( );
tokyo.getSales( );
dubai.getSales( );
paris.getSales( );
lima.getSales( );

console.log( seattle );

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
// console.log(this);

// Helper function

function generateRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
