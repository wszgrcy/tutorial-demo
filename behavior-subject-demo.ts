import { BehaviorSubject } from 'rxjs';
(() => {
  let instance = new BehaviorSubject('hello world1');
  instance.subscribe((result) => {
    console.log('订阅1',result);
  });
  instance.next('hello world2')
  instance.subscribe((result) => {
    console.log('订阅2',result);
  });
})();
