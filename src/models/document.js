import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const documentSchema = new Schema(
  {
    ward: {
      type: String,
      required: false,
    },
    document_name: {
      type: String,
      required: false,
    },
    received_date: {
      type: Date,
      required: false,
    },
    phone_number: {
      type: Number,
      required: false,
    },
    page_number: {
      type: Number,
      require: false,
    },
    current_area: {
      type: String,
      require: false,
    },
    number_certificate: {
      type: String,
      require: false,
    },
    main_person: {
      type: String,
      require: false,
    },
    sub_person: {
      type: String,
      require: false,
    },
    measure_date: {
      type: Date,
      require: false,
    },
    appraisal_date: {
      type: Date,
      require: false,
    },
    appraiser: {
      type: String,
      require: false,
    },
    note: {
      type: String,
      require: false,
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
