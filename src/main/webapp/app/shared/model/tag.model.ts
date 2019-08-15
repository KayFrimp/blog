import { IEntry } from 'app/shared/model/entry.model';

export interface ITag {
  id?: string;
  name?: string;
  entries?: IEntry[];
}

export class Tag implements ITag {
  constructor(public id?: string, public name?: string, public entries?: IEntry[]) {}
}
