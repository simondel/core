import {ContextConfiguration} from '@monument/test-drive/main/decorators/ContextConfiguration';
import {Map} from 'core/main/collection/mutable/Map';
import {ListMap} from 'core/main/collection/mutable/ListMap';
import {KeyValuePair} from '@monument/core/main/collection/KeyValuePair';
import {EqualityComparator} from '@monument/core/main/EqualityComparator';
import {IgnoreCaseComparator} from '@monument/core/main/text/IgnoreCaseComparator';
import {MapSpec} from './MapSpec';

@ContextConfiguration({
    components: [
        IgnoreCaseComparator
    ]
})
export class ListMapTest extends MapSpec {

    public create(
        items: Iterable<KeyValuePair<string, string>>,
        keyComparator?: EqualityComparator<string>,
        valueComparator?: EqualityComparator<string>
    ): Map<string, string> {
        return new ListMap(items, keyComparator, valueComparator);
    }
}
