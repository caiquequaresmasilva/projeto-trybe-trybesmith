import { ValidationError } from 'joi';

export default interface Errors extends ValidationError{
  code?: number
}