import { Observable } from 'rxjs';
(() => {
  let instance = new Observable((subscriber) => {
    subscriber.complete();
  });
  instance.subscribe({
    complete: () => {
      console.log('你好 rxjs');
    },
  });
})();
