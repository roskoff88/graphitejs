import { database, graphql } from './config/default';
import { Graphite } from '@graphite/apollo-express';
import { Mongodb } from '@graphite/mongoose';
import Todo from './models/Todo';

const mongoose = new Mongodb(database);
mongoose.connect();

Graphite.graphQLServer({ graphql }, [ Todo ]);
