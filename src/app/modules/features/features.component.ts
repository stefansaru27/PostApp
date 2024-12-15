import { Component } from '@angular/core';
import {
  from,
  concat,
  of,
  merge,
  interval,
  fromEvent,
  partition,
  combineLatest,
  timer,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  map,
  filter,
  tap,
  take,
  reduce,
  retry,
  concatMap,
  switchMap,
  skip,
  takeUntil,
  catchError,
} from 'rxjs/operators';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  //1) Map Operator
  doubleValues() {
    const source = from([1, 2, 3, 4, 5]);
    const doubled = source.pipe(map((value) => value * 2));

    doubled.subscribe((result) => console.log(result));
  }

  //2) Filter Operator
  filterValues() {
    const source = from([1, 2, 3, 4, 5]);
    const filtered = source.pipe(filter((value) => value >= 3));

    filtered.subscribe((result) => console.log(result));
  }

  //3) Tap Operator
  tapValues() {
    const source = from([1, 2, 3, 4, 5]);
    const tapped = source.pipe(
      tap((value) => console.log(`Processing: ${value}`))
    );

    tapped.subscribe();
  }

  //4) Concat Operator
  concatObservables() {
    const source1 = of(1, 2);
    const source2 = of(3, 4);
    const concatenated = concat(source1, source2);

    concatenated.subscribe((result) => console.log(result));
  }

  //5) Merge Operator
  mergeObservables() {
    const source1 = interval(1000).pipe(take(3));
    const source2 = interval(500).pipe(take(6));
    const merged = merge(source1, source2);

    merged.subscribe((result) => console.log(result));
  }

  //7) Filter Operator
  filterObservable() {
    const numbers = of(1, 2, 3, 4, 5);
    const evenNumbers = numbers.pipe(filter((num) => num % 2 === 0));

    evenNumbers.subscribe((result) => console.log(result));
  }

  //8) Redxuce Observable
  reduceObservable() {
    const numbers = of(1, 2, 3, 4, 5);
    const sum = numbers.pipe(reduce((acc, value) => acc + value, 0));

    sum.subscribe((result) => console.log(result));
  }

  //9) Retry Observable
  retryObservable() {
    const request = ajax('https://api.example.com/data');
    const retryRequest = request.pipe(retry(3));

    retryRequest.subscribe(
      (result) => console.log(result),
      (error) => console.error('Retried 3 times, but still failed.')
    );
  }

  //10)Merge Observable
  mergeObservable() {
    const source1 = interval(1000);
    const source2 = interval(500);

    const merged = merge(source1, source2);

    merged.subscribe((result) => console.log(result));
  }
  //11)ConcatMap Observable
  concatMapObservable() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(concatMap(() => interval(1000).pipe(take(3))));

    result.subscribe((x) => console.log(x));
  }
  //12) SwitchMapOperator
  switchMapObservable() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(switchMap(() => interval(1000).pipe(take(3))));

    result.subscribe((x) => console.log(x));
  }

  //13) Partition Operator
  partitionObservable() {
    const source = from([1, 2, 3, 4, 5, 6]);

    const [evens, odds] = partition(source, (val) => val % 2 === 0);

    evens.subscribe((val) => console.log(`Even: ${val}`));
    odds.subscribe((val) => console.log(`Odd: ${val}`));
  }

  //14) CombineLatest Operator
  combineLatestObservable() {
    const first = timer(1000, 2000);
    const second = timer(2000, 2000);

    const combined = combineLatest([first, second]);
    combined.subscribe((value) => console.log(value));
  }

  //15) Skip Operator
  skipObservable() {
    const source = interval(1000);
    const example = source.pipe(skip(3));

    example.subscribe((value) => console.log(value));
  }

  //16) TakeUntil Operator
  takeUntilObservable() {
    const source = interval(1000);
    const timer$ = timer(5000);

    const example = source.pipe(takeUntil(timer$));
    example.subscribe((value) => console.log(value));
  }

  //17) Catch error Operator
  catchErrorObservable() {
    const source = of('1', '2', '3', '4', '5');

    const example = source.pipe(
      map((value) => parseInt(value)),
      catchError((error) => of('Error occurred!'))
    );

    example.subscribe(
      (value) => console.log(value),
      (error) => console.error(error)
    );
  }
}
