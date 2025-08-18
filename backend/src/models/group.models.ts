import mongoose from 'mongoose';
export interface IGroup extends Document {
  name: string;
  active: boolean;
}
const groupSchema = new mongoose.Schema<IGroup>({
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Group = mongoose.model<IGroup>('Group', groupSchema);
export default Group;
