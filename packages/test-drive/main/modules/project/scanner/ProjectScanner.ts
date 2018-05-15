import {Component} from '@monument/stereotype/main/Component';
import {Path} from '@monument/node/main/path/Path';
import {FileStorage} from '@monument/node/main/file-system/FileStorage';
import {LocalFileSystem} from '@monument/node/main/file-system/local/LocalFileSystem';
import {FileSystemWalker} from '@monument/node/main/file-system/walker/FileSystemWalker';
import {FileSystemEntryProcessor} from '@monument/node/main/file-system/walker/FileSystemEntryProcessor';
import {FileSystemEntryFilter} from '@monument/node/main/file-system/walker/FileSystemEntryFilter';
import {TestFileFilter} from './TestFileFilter';


@Component
export class ProjectScanner {
    private readonly _fileStorage: FileStorage;
    private readonly _fileFilter: FileSystemEntryFilter;


    public constructor(fileSystem: LocalFileSystem, fileFilter: TestFileFilter) {
        this._fileStorage = fileSystem;
        this._fileFilter = fileFilter;
    }


    public async scan(path: Path, processor: FileSystemEntryProcessor): Promise<void> {
        const walker: FileSystemWalker = this.createWalker();

        return walker.walk(path, processor);
    }


    private createWalker(): FileSystemWalker {
        const walker: FileSystemWalker = new FileSystemWalker(this._fileStorage);

        walker.addFilter(this._fileFilter);

        return walker;
    }
}
