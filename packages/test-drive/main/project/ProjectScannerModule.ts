import {Module} from '@monument/decorators/main/stereotype/Module';
import {ProjectScanner} from './scanner/ProjectScanner';
import {TestFileFilter} from './scanner/TestFileFilter';


@Module({
    components: [
        TestFileFilter,
        ProjectScanner
    ]
})
export class ProjectScannerModule {

}