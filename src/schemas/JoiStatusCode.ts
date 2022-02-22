import StatusCode from '../enums/StatusCode';
// FONTE: https://dev.to/mapleleaf/indexing-objects-in-typescript-1cgi
type JoiStatus = {
  [index: string]: number,
  required: number,
  base: number,
  min: number
};
const JoiStatusCode : JoiStatus = {
  required: StatusCode.BAD_REQUEST,
  base: StatusCode.UNPROCESSABLE_ENTITY,
  min: StatusCode.UNPROCESSABLE_ENTITY,
}; 

export default JoiStatusCode;