import { from, map, Observable, of, switchMap, take, timer } from 'rxjs';

(() => {
  //   from([1])
  //     .pipe(map((item) => item * 2))
  //     .subscribe((result) => {
  //       console.log(result);
  //     });
  //   timer(0, 1000).subscribe((result) => {
  //     console.log(result);
  //   });
  //   from([1, 2])
  //     .pipe(switchMap((item) => of(item * 2)))
  //     .subscribe((result) => {
  //       console.log(result);
  //     });
  timer(0, 1000)
    .pipe(
      switchMap((item) => timer(0, 500)),
      take(4)
    )
    .subscribe((result) => {
      console.log(result);
    });
})();
