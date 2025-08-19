import { Schema, model, Document } from "mongoose";

export interface IGroup extends Document {
  name: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  products?: any[]; // For virtual populate
}

const groupSchema = new Schema<IGroup>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Virtual populate for products
groupSchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "groupId",
});

// Ensure virtuals are included in JSON and Object outputs
groupSchema.set("toObject", { virtuals: true });
groupSchema.set("toJSON", { virtuals: true });

const Group = model<IGroup>("Group", groupSchema);
export default Group;
