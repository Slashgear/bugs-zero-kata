import gameRunner from '../src/game-runner';
import _ from 'lodash';
import seededRandom from './seededRandomUtils';

describe("The game", () => {
    it("should work log those actions", () => {
        const loggedLines = [];
        const oldLog = console.log;
        console.log = function (arg) {
            loggedLines.push(arg);
        };

        _.range(15).forEach(() => {
            gameRunner(seededRandom)
        });

        console.log = oldLog;

        expect(loggedLines).toMatchSnapshot();
    });
});
