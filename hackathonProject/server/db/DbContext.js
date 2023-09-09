import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { DogSchema } from '../models/Dog.js';
import { DogWatcherSchema } from '../models/DogWatcher.js';
import { CommentSchema } from '../models/Comment.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Dogs = mongoose.model('Dog', DogSchema);

  Watchers = mongoose.model('Watcher', DogWatcherSchema);

  Comments = mongoose.model('Comment', CommentSchema);
}

export const dbContext = new DbContext()
