let mongoose = require("mongoose");
let Schema = mongoose.Schema;

//Employee Schema definition
let EmployeeSchema = new Schema(
  {
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    salary: { type: Number, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);
/*
// Sets the createdAt parameter equal to the current time
EmployeeSchema.pre("save", (next) => {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
*/

//Exports the EmployeeSchema for use elsewhere.
module.exports = mongoose.model("employee", EmployeeSchema);