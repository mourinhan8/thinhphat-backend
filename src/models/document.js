import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const documentSchema = new Schema(
  {
    ward: {
      type: String,
      required: true,
    },
    document_name: {
      type: String,
      required: true,
    },
    received_date: {
      type: Date,
      required: true,
    },
    phone_number: {
      type: Number,
      required: true,
    },
    page_number: {
      type: Number,
      require: true,
    },
    current_area: {
      type: String,
      require: true,
    },
    number_certificate: {
      type: String,
      require: true,
    },
    main_person: {
      type: String,
      require: true,
    },
    sub_person: {
      type: String,
      require: true,
    },
    measure_date: {
      type: Date,
      require: true,
    },
    appraisal_date: {
      type: Date,
      require: true,
    },
    appraiser: {
      type: String,
      require: true,
    },
    note: {
      type: String,
      require: true,
    },
    status: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    collection: 'Document',
  },
);

export default mongoose.model('Document', documentSchema);
