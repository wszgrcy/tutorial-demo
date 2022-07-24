import { Observable, Subscriber } from 'rxjs';
(() => {
  let customPipe = (name: string) => {
    return (source: Observable<any>) => {
      console.log(`管道包裹${name}`);
      let instance = new Observable();
      instance.source = source;
      instance.operator = function (this: Subscriber<any>, source: Observable<any>) {
        console.log(`管道调用${name}`);
        source.subscribe((item) => {
          console.log(`管道订阅${name}`);
          this.next(item * 2);
        });
      };
      return instance;
    };
  };
  let instance = new Observable((subscriber) => {
    subscriber.next(1);
  });
  instance.pipe(customPipe('1'), customPipe('2')).subscribe((result) => {
    console.log(result);
  });
})();
