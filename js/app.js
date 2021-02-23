'use strict';

let workinghours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];
function COOKIES ( name,mincust,maxcust,avgcookie ){
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgcookie = avgcookie;
  this.customerArr = [];
  this.hourlyTotal = 0;
}
COOKIES.prototype.randomCustomer = function(){
  for( let i = 0;i < workinghours.length;i++ ){
    let total = Math.ceil( generateRandomNumber( this.mincust,this.maxcust ) * this.avgcookie );
    this.customerArr.push( total );
    this.hourlyTotal += total;
  }
};


COOKIES.prototype.render = function() {
  const tableElement = document.getElementById( 'sales-data' );

  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );

  const td1 = document.createElement( 'td' );
  tr.appendChild( td1 );
  td1.textContent = this.name;

  for( let i = 0;i < workinghours.length;i++ )
  {
    const td2 = document.createElement( 'td' );
    tr.appendChild( td2 );
    td2.textContent = this.customerArr[i];

  }
  const td3 = document.createElement( 'td' );
  tr.appendChild( td3 );
  td3.textContent = this.hourlyTotal;

};

const tableheader = function(){
  const parentElement = document.getElementById( 'sales-data' );

  const tableElement = document.createElement( 'table' );
  parentElement.appendChild( tableElement );
  tableElement.setAttribute( 'id','sales-table' );

  const tr1 = document.createElement( 'tr' );
  tableElement.appendChild( tr1 );

  const th1 = document.createElement( 'th' );
  tr1.appendChild( th1 );
  th1.textContent = 'country/working hours';

  for( let i = 0;i < workinghours.length;i++ )
  {
    const th2 = document.createElement( 'th' );
    tr1.appendChild( th2 );
    th2.textContent = workinghours[i];
  }
  const th3 = document.createElement( 'th' );
  tr1.appendChild( th3 );
  th3.textContent = 'total of totals';
};
tableheader();

const seattle = new COOKIES( 'seattle',23,65,6.3 );
console.log( seattle );
seattle.randomCustomer( 23,65 );
seattle.render();

const tokyo = new COOKIES( 'tokyo',3,24,1.2 );
console.log( tokyo );
tokyo.randomCustomer( 3,24 );
tokyo.render();

const dubai = new COOKIES( 'dubai',11,38,3.7 );
console.log( dubai );
dubai.randomCustomer( 11,38 );
dubai.render();

const paris = new COOKIES( 'paris',20,38,2.3 );
console.log( paris );
paris.randomCustomer( 20,38 );
paris.render();

const lima = new COOKIES( 'lima',2,16,4.6 );
console.log( lima );
lima.randomCustomer( 2,16 );
lima.render();

// Helper function

function generateRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
const tablefooter = function(){
  const tableElement = document.getElementById( 'sales-data' );

  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );

  const th1 = document.createElement( 'th' );
  tr.appendChild( th1 );
  th1.textContent = 'total';

  for( let i = 0;i < workinghours.length;i++ )
  {
    const th2 = document.createElement( 'th' );
    tr.appendChild( th2 );
    th2.textContent = seattle.customerArr[i] + tokyo.customerArr[i] + dubai.customerArr[i] + paris.customerArr[i] + lima.customerArr[i];

  }
  const th3 = document.createElement( 'th' );
  tr.appendChild( th3 );
  th3.textContent = seattle.hourlyTotal + tokyo.hourlyTotal + dubai.hourlyTotal + paris.hourlyTotal + lima.hourlyTotal;
};
tablefooter();
