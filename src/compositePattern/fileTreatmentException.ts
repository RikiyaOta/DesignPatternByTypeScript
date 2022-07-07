export class FileTreatmentException extends Error {
  constructor() {
    super();
    this.message = "You cannot add directory entries to this object.";
  }
}
