import { Moment } from 'moment';
import { IBlog } from 'app/shared/model/blog.model';
import { ITag } from 'app/shared/model/tag.model';

export interface IEntry {
  id?: string;
  title?: string;
  content?: any;
  date?: Moment;
  blog?: IBlog;
  tags?: ITag[];
}

export class Entry implements IEntry {
  constructor(
    public id?: string,
    public title?: string,
    public content?: any,
    public date?: Moment,
    public blog?: IBlog,
    public tags?: ITag[]
  ) {}
}
