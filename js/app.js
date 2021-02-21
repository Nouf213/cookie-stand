'use strict';

let workinghours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','TOTAL'];

const seattle = {
  name: 'seattle',
  mincust: 23,
  maxcust : 65,
  avgcookie:6.3,
  sales: 0,
  salesperhour:[],
  total : 0,

  gettotal: function( )
  {
    for( let i = 0; i < workinghours.length;i++ )
      this.total = this.total + this.avgcookie;


  },
  getSales: function( min, max ) {
    this.sales = generateRandomNumber( min, max ) * this.avgcookie ;
    // console.log(sales);
  },
  getAvg: function( min, max ) {
    this.getSales = calAvg( min,max );

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
      liElement.textContent = workinghours[i] + this.total;
    }
  }
};



console.log( generateRandomNumber( 23, 65 ) );

const tokyo = {
  name: 'tokyo',
  mincust: 3,
  maxcust : 24,
  avgcookie:1.2,
  sales: 0,
  total:0,
  gettotal: function( )
  {
    for( let i = 0; i < workinghours.length;i++ )
      this.total = this.total + this.avgcookie;


  },
  getSales: function( min, max ) {
    this.sales = generateRandomNumber( min, max ) * this.avgcookie ;
    // console.log(sales);
  },
  getAvg: function( min, max ) {
    this.getSales = calAvg( min,max );

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
      liElement.textContent = workinghours[i] + this.total;
    }
  }
};


console.log( generateRandomNumber( 3, 24 ) );

const dubai = {
  name: 'dubai',
  mincust: 11,
  maxcust : 38,
  avgcookie:3.7,
  sales: 0,
  total:0,
  gettotal: function( )
  {
    for( let i = 0; i < workinghours.length;i++ )
      this.total = this.total + this.avgcookie;


  },
  getSales: function( min, max ) {
    this.sales = generateRandomNumber( min, max ) * this.avgcookie ;
    // console.log(sales);
  },
  getAvg: function( min, max ) {
    this.getSales = calAvg( min,max );

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
      liElement.textContent = workinghours[i] + this.total;
    }
  }
};



console.log( generateRandomNumber( 11, 38 ) );

const paris = {
  name: 'paris',
  mincust: 20,
  maxcust : 38,
  avgcookie:2.3,
  sales: 0,
  total:0,
  gettotal: function( )
  {
    for( let i = 0; i < workinghours.length;i++ )
      this.total = this.total + this.avgcookie;


  },
  getSales: function( min, max ) {
    this.sales = generateRandomNumber( min, max ) * this.avgcookie ;
    // console.log(sales);
  },
  getAvg: function( min, max ) {
    this.getSales = calAvg( min,max );

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
      liElement.textContent = workinghours[i] + this.total;
    }
  }
};



console.log( generateRandomNumber( 20, 38 ) );

const lima = {
  name: 'lima',
  mincust: 2,
  maxcust : 16,
  avgcookie:4.6,
  sales: 0,
  total:0,
  gettotal: function( )
  {
    for( let i = 0; i < workinghours.length;i++ )
      this.total = this.total + this.avgcookie;


  },
  getSales: function( min, max ) {
    this.sales = generateRandomNumber( min, max ) * this.avgcookie ;
    // console.log(sales);
  },
  getAvg: function( min, max ) {
    this.getSales = calAvg( min,max );

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
      liElement.textContent = workinghours[i] + this.total;
    }
  }
};




console.log( generateRandomNumber( 2, 16 ) );

seattle.getSales( 23, 65 );

tokyo.getSales( 3,24 );
dubai.getSales( 11,38 );
paris.getSales( 20,38 );
lima.getSales( 2 , 16 );

console.log( seattle.name );
console.log( seattle.sales );
console.log( seattle.total );
console.log( seattle );

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
// console.log(this);

// Helper function
function calAvg( )
{
  let avg = ( this.total / workinghours.length );
  return avg;

}

//console.log( calAvg() );

//function caltotal()//
// {
//   let total = 0;
//   for( let i = 0; i < workinghours.length; i++ ){
//     this.workinghours;

//     total = total + generateRandomNumber[i];
//     return total;
//   }
// }
function generateRandomNumber( min, max ) {
  return Math.ceil( Math.random() * ( max - min + 1 ) + min );
}
