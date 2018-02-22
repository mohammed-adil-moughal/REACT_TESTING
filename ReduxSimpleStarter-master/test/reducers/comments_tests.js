import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';


describe('comments reducers', () => {

    it('hanldes action wut unknow type', () => {
//expect(commentReducer()).to.be.instanceof(Array);
        expect(commentReducer( undefined ,{})).to.eql([]);
    });

    it('type save comment', () => {
        const action = { type: SAVE_COMMENT, payload: 'new Comment' };
        expect(commentReducer([], action)).to.eql(['new Comment']);
    });

});
