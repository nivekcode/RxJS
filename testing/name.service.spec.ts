import {NameService} from './name.service';
import {TestScheduler} from 'rxjs/testing';

describe('NameService', () => {

    let sut: NameService;
    let scheduler: TestScheduler;

    beforeEach(() => {
        sut = new NameService();
        scheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('should stream a name if we call addName', () => {

        scheduler.run(({expectObservable, cold}) => {
            const name = 'Eddy Brok';
            cold('-a').subscribe(() => sut.addName(name))
            expectObservable(sut.names$).toBe('-a', {a: name})
        });

    });

});
