import {ReadOnlySet} from '@monument/collections-core/main/ReadOnlySet';
import {Map} from '@monument/collections-core/main/Map';
import {ListMap} from '@monument/collections/main/ListMap';
import {AttributeAccessor} from '../AttributeAccessor';
import {Key} from '../../Key';


export class DefaultAttributeAccessor implements AttributeAccessor {
    private readonly _attributes: Map<Key<any>, any> = new ListMap();


    public get attributeKeys(): ReadOnlySet<Key<any>> {
        return this._attributes.keys;
    }


    public getAttribute<T>(key: Key<T>): T | undefined {
        return this._attributes.get(key);
    }


    public hasAttribute<T>(key: Key<T>): boolean {
        return this._attributes.containsKey(key);
    }


    public setAttribute<T>(key: Key<T>, value: T): void {
        this._attributes.put(key, value);
    }


    public removeAttribute<T>(key: Key<T>): boolean {
        return this._attributes.remove(key) !== undefined;
    }
}