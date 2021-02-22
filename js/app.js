'use strict';

let workinghours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];
function COOKIES ( name,mincust,maxcust,avgcookie,salesperhour,total,customerperhour ){
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgcookie = avgcookie;
  this.salesperhour = salesperhour;
  this.total = total;
  this.customerperhour = customerperhour;
}
const seattle = new COOKIES( 'seattle',23,65,6.3,[],0,[] );
const tokyo = new COOKIES( 'tokyo',3,24,1.2,[],0,[] );
const dubai = new COOKIES( 'dubai',11,38,3.7,[],0,[] );
const paris = new COOKIES( 'paris',20,38,2.3,[],0,[] );
const lima = new COOKIES( 'lima',2,16,4.6,[],0,[] );

console.log( seattle );
console.log( tokyo );
console.log( dubai );
console.log( paris );
console.log( lima );


COOKIES.prototype.getSales = function() {
  for( let i = 0;i < workinghours.length;i++ ){
    this.salesperhour.push ( Math.ceil( generateRandomNumber( this.mincust, this.maxcust ) * this.avgcookie ) );
    this.customerperhour.push ( generateRandomNumber( this.mincust,this.maxcust ) );
    this.total += this.salesperhour[i];
  } // console.log(sales);
};

COOKIES.prototype.render = function() {
  const parentElement = document.getElementById( 'sales-data' );

  const articleElement = document.createElement( 'article' );
  parentElement.appendChild( articleElement );

  const h2Element = document.createElement( 'h2' );
  articleElement.appendChild( h2Element );
  h2Element.textContent = this.name;

  const tableElement = document.createElement( 'table' );
  articleElement.appendChild( tableElement );

  // const tr1Element = document.createElement( 'tr' );
  // tableElement.appendChild( tr1Element );

  // const th1Element = document.createElement( 'th' );
  // tr1Element.appendChild( th1Element );
  // th1Element.textContent = '';

  // const th2Element = document.createElement( 'th' );
  // tr1Element.appendChild( th2Element );
  // th2Element.textContent = workinghours[0];

  // const th3Element = document.createElement( 'th' );
  // tr1Element.appendChild( th3Element );
  // th3Element.textContent = workinghours[1];

  // const th4Element = document.createElement( 'th' );
  // tr1Element.appendChild( th4Element );
  // th4Element.textContent = workinghours[2];

  // const th5Element = document.createElement( 'th' );
  // tr1Element.appendChild( th5Element );
  // th5Element.textContent = workinghours[3];

  // const th6Element = document.createElement( 'th' );
  // tr1Element.appendChild( th6Element );
  // th6Element.textContent = workinghours[4];

  // const th7Element = document.createElement( 'th' );
  // tr1Element.appendChild( th7Element );
  // th7Element.textContent = workinghours[5];

  // const th8Element = document.createElement( 'th' );
  // tr1Element.appendChild( th8Element );
  // th8Element.textContent = workinghours[6];

  // const th9Element = document.createElement( 'th' );
  // tr1Element.appendChild( th9Element );
  // th9Element.textContent = workinghours[7];

  // const th10Element = document.createElement( 'th' );
  // tr1Element.appendChild( th10Element );
  // th10Element.textContent = workinghours[8];

  // const th11Element = document.createElement( 'th' );
  // tr1Element.appendChild( th11Element );
  // th11Element.textContent = workinghours[9];

  // const th12Element = document.createElement( 'th' );
  // tr1Element.appendChild( th12Element );
  // th12Element.textContent = workinghours[10];

  // const th13Element = document.createElement( 'th' );
  // tr1Element.appendChild( th13Element );
  // th13Element.textContent = workinghours[11];

  // const th14Element = document.createElement( 'th' );
  // tr1Element.appendChild( th14Element );
  // th14Element.textContent = workinghours[12];

  // const th15Element = document.createElement( 'th' );
  // tr1Element.appendChild( th15Element );
  // th15Element.textContent = workinghours[13];

  // const th16Element = document.createElement( 'th' );
  // tr1Element.appendChild( th16Element );
  // th16Element.textContent = workinghours[14];


  const thElement = document.createElement( 'th' );
  tableElement.appendChild( thElement );

  for( let i = 0; i < workinghours.length; i++ ) {
    const trElement = document.createElement( 'tr' );
    thElement.appendChild( trElement );
    trElement.textContent = `${workinghours[i]}`;
  }

  const trElement = document.createElement( 'tr' );
  tableElement.appendChild( trElement );

  for( let i = 0; i < workinghours.length; i++ ) {
    const tdElement = document.createElement( 'td' );
    trElement.appendChild( tdElement );
    tdElement.textContent = `${this.name} + ${this.salesperhour[i]} ,cookies`;

    const td1Element = document.createElement( 'td' );
    thElement.appendChild( td1Element );
    td1Element.textContent = `Total : ${this.total} coockies.`;
  }



};

// console.log( generateRandomNumber( 23, 65 ) );

// const tokyo = {
//   name: 'tokyo',
//   mincust: 3,
//   maxcust : 24,
//   avgcookie:1.2,
//   salesperhour:[],
//   customerperhour:[],
//   total:0,
//   getSales: function() {
//     for( let i = 0;i < workinghours.length;i++ ){
//       this.salesperhour.push ( Math.ceil( generateRandomNumber( this.mincust, this.maxcust ) * this.avgcookie ) );
//       this.customerperhour.push ( generateRandomNumber( this.mincust,this.maxcust ) );
//       this.total = +this.salesperhour[i];
//     } // console.log(sales);
//   },
//   render: function() {
//     const parentElement = document.getElementById( 'sales-data' );

//     const articleElement = document.createElement( 'article' );
//     parentElement.appendChild( articleElement );

//     const h2Element = document.createElement( 'h2' );
//     articleElement.appendChild( h2Element );
//     h2Element.textContent = this.name;

//     const ulElement = document.createElement( 'ul' );
//     articleElement.appendChild( ulElement );

//     for( let i = 0; i < workinghours.length; i++ ) {
//       const liElement = document.createElement( 'li' );
//       ulElement.appendChild( liElement );
//       liElement.textContent = `${workinghours[i]} : ${this.salesperhour[i]} cookies.`;
//     }

//     const liElement = document.createElement( 'li' );
//     ulElement.appendChild( liElement );
//     liElement.textContent = `Total : ${this.total} coockies.`;
//   }
// };


// console.log( generateRandomNumber( 3, 24 ) );

// const dubai = {
//   name: 'dubai',
//   mincust: 11,
//   maxcust : 38,
//   avgcookie:3.7,
//   salesperhour:[],
//   customerperhour:[],
//   total:0,
//   getSales: function() {
//     for( let i = 0;i < workinghours.length;i++ ){
//       this.salesperhour.push ( Math.ceil( generateRandomNumber( this.mincust, this.maxcust ) * this.avgcookie ) );
//       this.customerperhour.push ( generateRandomNumber( this.mincust,this.maxcust ) );
//       this.total = +this.salesperhour[i];
//     } // console.log(sales);
//   },
//   render: function() {
//     const parentElement = document.getElementById( 'sales-data' );

//     const articleElement = document.createElement( 'article' );
//     parentElement.appendChild( articleElement );

//     const h2Element = document.createElement( 'h2' );
//     articleElement.appendChild( h2Element );
//     h2Element.textContent = this.name;

//     const ulElement = document.createElement( 'ul' );
//     articleElement.appendChild( ulElement );

//     for( let i = 0; i < workinghours.length; i++ ) {
//       const liElement = document.createElement( 'li' );
//       ulElement.appendChild( liElement );
//       liElement.textContent = `${workinghours[i]} : ${this.salesperhour[i]} cookies.`;
//     }

//     const liElement = document.createElement( 'li' );
//     ulElement.appendChild( liElement );
//     liElement.textContent = `Total : ${this.total} coockies.`;
//   }
// };



// console.log( generateRandomNumber( 11, 38 ) );

// const paris = {
//   name: 'paris',
//   mincust: 20,
//   maxcust : 38,
//   avgcookie:2.3,
//   salesperhour:[],
//   customerperhour:[],
//   total:0,
//   getSales: function() {
//     for( let i = 0;i < workinghours.length;i++ ){
//       this.salesperhour.push ( Math.ceil( generateRandomNumber( this.mincust, this.maxcust ) * this.avgcookie ) );
//       this.customerperhour.push ( generateRandomNumber( this.mincust,this.maxcust ) );
//       this.total = +this.salesperhour[i];
//     } // console.log(sales);
//   },
//   render: function() {
//     const parentElement = document.getElementById( 'sales-data' );

//     const articleElement = document.createElement( 'article' );
//     parentElement.appendChild( articleElement );

//     const h2Element = document.createElement( 'h2' );
//     articleElement.appendChild( h2Element );
//     h2Element.textContent = this.name;

//     const ulElement = document.createElement( 'ul' );
//     articleElement.appendChild( ulElement );

//     for( let i = 0; i < workinghours.length; i++ ) {
//       const liElement = document.createElement( 'li' );
//       ulElement.appendChild( liElement );
//       liElement.textContent = `${workinghours[i]} : ${this.salesperhour[i]} cookies.`;
//     }

//     const liElement = document.createElement( 'li' );
//     ulElement.appendChild( liElement );
//     liElement.textContent = `Total : ${this.total} coockies.`;
//   }
// };



// console.log( generateRandomNumber( 20, 38 ) );

// const lima = {
//   name: 'lima',
//   mincust: 2,
//   maxcust : 16,
//   avgcookie:4.6,
//   salesperhour:[],
//   customerperhour:[],
//   total:0,
//   getSales: function() {
//     for( let i = 0;i < workinghours.length;i++ ){
//       this.salesperhour.push ( Math.ceil( generateRandomNumber( this.mincust, this.maxcust ) * this.avgcookie ) );
//       this.customerperhour.push ( generateRandomNumber( this.mincust,this.maxcust ) );
//       this.total = +this.salesperhour[i];
//     } // console.log(sales);
//   },
//   render: function() {
//     const parentElement = document.getElementById( 'sales-data' );

//     const articleElement = document.createElement( 'article' );
//     parentElement.appendChild( articleElement );

//     const h2Element = document.createElement( 'h2' );
//     articleElement.appendChild( h2Element );
//     h2Element.textContent = this.name;

//     const ulElement = document.createElement( 'ul' );
//     articleElement.appendChild( ulElement );

//     for( let i = 0; i < workinghours.length; i++ ) {
//       const liElement = document.createElement( 'li' );
//       ulElement.appendChild( liElement );
//       liElement.textContent = `${workinghours[i]} : ${this.salesperhour[i]} cookies.`;
//     }

//     const liElement = document.createElement( 'li' );
//     ulElement.appendChild( liElement );
//     liElement.textContent = `Total : ${this.total} coockies.`;
//   }
// };




// console.log( generateRandomNumber( 2, 16 ) );

// seattle.getSales( );
// tokyo.getSales( );
// dubai.getSales( );
// paris.getSales( );
// lima.getSales( );

// console.log( seattle );

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

