import { Subject } from 'rxjs';

(() => {
  let instance = new Subject();

  instance.next('hello rxjs1');
  instance.subscribe((result) => {
    console.log(result);
  });
  instance.next('hello rxjs2');
})();
