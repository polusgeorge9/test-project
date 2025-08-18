import mongoose from "mongoose";
export interface ICompany {
  name: string;
  shortname: string;
  active: boolean;
}

const companySchema = new mongoose.Schema<ICompany>({
  name: {
    type: String,
    required: true,
  },
  shortname: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Company = mongoose.model<ICompany>("Company", companySchema);
export default Company;
