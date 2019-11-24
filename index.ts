import { of, from, fromEvent, Observable, zip } from 'rxjs'; 
import { map, filter, reduce } from 'rxjs/operators';


// ******* exercise 1 *******
// console.clear();
{
  const data = ['a', 'g', 'o', 'f', '3', '5', 'r', 'D', 'n', 'b', 's', 'c'];
  const source$ = from(data);

 // TODO: Filter only from a-gA-G

  let regexp = /[a-gA-G]/g
  source$.pipe(filter(val => regexp.test(val))).subscribe(
    result => console.log(result)
  )
  
}

// ******* exercise 2 *******
// console.clear();
{
  const data = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
  const source$ = from(data);

  // TODO: Create a var `result` that contains the sum
  // of all numbers in source.
  // Use pure functions
  // such as map, filter, reduce, scan, merge, delay, 
  // concat, take, etc.

  source$.pipe(
    map(val => parseInt(val)),
    filter(num => !isNaN(num)),
    reduce((sum,current) => (sum + current))
  ).subscribe(
    result => console.log(result)
  )
}

// ******* exercise 3 *******
// console.clear();
{
 
  // const promise = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     console.log('timeout');
  //     resolve(123);
  //   }, 1000);
  //   console.log('promise started');
  // });

  // promise.then(x => console.log('resolved: ' + x));

  // TODO: Create an RxJS Observable `observable` with 
  // the same behavior as the promise above.

  let observable$;
  observable$ = new Observable((observer)=>{
    setTimeout(()=>{
      console.log('timeout');
      observer.next(123);
    },1000)
     console.log('started');
  })
  observable$.subscribe(x => console.log('next: ' + x));

}

// ******* exercise 4 *******
// console.clear();
{
  const heightEl = document.getElementById('height')
  const widthEl = document.getElementById('width')
  let heightObservable = fromEvent(heightEl, 'input')
  let widthObservable = fromEvent(widthEl, 'input')

  zip(heightObservable,widthObservable).pipe(
    map(num => Number((<HTMLTextAreaElement>num[0].target).value) * Number((<HTMLTextAreaElement>num[1].target).value))
  ).subscribe(
    result => console.log(result)
  )

  // TODO: Create observable that calculates area of square using observables
  // above
}