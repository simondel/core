import {Type} from '@monument/core/main/Type';
import {ReadOnlyMap} from '@monument/collections/main/ReadOnlyMap';
import {UnitDefinition} from '../UnitDefinition';


export interface UnitDefinitionRegistry {
    readonly unitDefinitions: ReadOnlyMap<Type<object>, UnitDefinition>;

    /**
     * @throws {NoSuchUnitDefinitionException}
     */
    getUnitDefinition<T extends object>(type: Type<T>): UnitDefinition;

    containsUnitDefinition<T extends object>(type: Type<T>): boolean;

    /**
     * @throws {UnitDefinitionStoreException}
     */
    registerUnitDefinition<T extends object>(type: Type<T>, definition: UnitDefinition): void;
}
