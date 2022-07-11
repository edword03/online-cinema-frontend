import { ActorModel } from '@/models/actor';

export interface EditActorInput extends Omit<ActorModel, '_id'> {}
