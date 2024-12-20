const mongoose = require('mongoose');

const prescriptionServiceSchema = new mongoose.Schema({
    prescriptionId: {
      type: String,
      required: true,
      unique: true,
      match: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/, // UUID format
    },
    patientId: {
      type: String,
      required: true,
      match: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/, // UUID format
    },
    medications: [{
      medicationId: {
        type: String,
        required: true,
        match: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/, // UUID format
      },
      dosage: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      instructions: {
        type: String,
        required: true,
      },
    }],
    status: {
      type: String,
      enum: ["Pending", "Fulfilled", "Cancelled"],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

const PrescriptionService = mongoose.model('PrescriptionService', prescriptionServiceSchema);
module.exports = PrescriptionService;