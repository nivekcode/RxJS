import {interval} from 'rxjs';
import {bufferTime, bufferWhen, map, withLatestFrom} from 'rxjs/operators';

interface BlockTimeInformation {
    queue: String[],
    blockTime: number;
}

const observer = {
    next: e => console.log('Next: ', e),
    error: err => console.error(err),
    complete: () => console.log('Done'),
};

const getRandomArbitrary = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};

const findPeak = (blockTimeInfos: BlockTimeInformation[]): BlockTimeInformation => blockTimeInfos.reduce((max: BlockTimeInformation, current: BlockTimeInformation) => {
    max = max.blockTime > current.blockTime ? max : current;
    return max;
}, {queue: [], blockTime: 0});

const blockTime$ = interval(500).pipe(
    map(() => getRandomArbitrary(0, 5)),
);

const blockTimeInformation$ = interval(100).pipe(
    map((i) => `Invoked Task: ${i}`),
    bufferWhen(() => blockTime$),
    withLatestFrom(blockTime$, (queue: String[], blockTime: number) => ({queue, blockTime})),
    bufferTime(5000),
    map((blockTimeInfos: any[]) => findPeak(blockTimeInfos))
);

blockTimeInformation$.subscribe(observer);

