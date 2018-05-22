import {IgnoreCaseComparator} from '@monument/core/main/IgnoreCaseComparator';
import {Test} from '@monument/test-drive/main/decorators/Test';
import {Assert} from '@monument/test-drive/main/assert/Assert';
import {ArrayList} from '../../main/ArrayList';
import {ListSpec} from './ListSpec';


export class ArrayListTest extends ListSpec {

    public create<T>(items?: Iterable<T>): ArrayList<T> {
        return new ArrayList(items);
    }


    @Test
    public 'equals() compares empty lists'(assert: Assert) {
        const list: ArrayList<string> = this.create();

        assert.true(list.equals(this.create()));
    }


    @Test
    public 'equals() compares lists using default equality comparator'(assert: Assert) {
        const list: ArrayList<string> = this.create(['one', 'two', 'three']);

        assert.true(list.equals(this.create(['one', 'two', 'three'])));
        assert.false(list.equals(this.create(['ONE', 'TWO'])));
        assert.false(list.equals(this.create(['ONE', 'TWO', 'THREE'])));
    }


    @Test
    public 'equals() compares lists using custom equality comparator'(assert: Assert) {
        const list: ArrayList<string> = this.create(['one', 'two', 'three']);

        assert.true(list.equals(this.create(['one', 'two', 'three']), IgnoreCaseComparator.instance));
        assert.false(list.equals(this.create(['ONE', 'TWO']), IgnoreCaseComparator.instance));
        assert.true(list.equals(this.create(['ONE', 'TWO', 'THREE']), IgnoreCaseComparator.instance));
    }


    @Test
    public 'toJSON() returns pure JS array for JSON serialization'(assert: Assert) {
        const list: ArrayList<string> = this.create(['one', 'two', 'three']);

        assert.true(list.toJSON() instanceof Array);
        assert.identical(list.toJSON(), ['one', 'two', 'three']);
    }


    @Test
    public 'toArray() returns pure JS array'(assert: Assert) {
        const list: ArrayList<string> = this.create(['one', 'two', 'three']);

        assert.true(list.toArray() instanceof Array);
        assert.identical(list.toArray(), ['one', 'two', 'three']);
    }
}
