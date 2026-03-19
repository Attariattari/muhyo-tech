import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  name: { type: String },
  passkey: { type: String },
  role: { type: String, enum: ['user', 'admin', 'super-admin'], default: 'user' },
  status: { type: String, enum: ['pending', 'approved', 'denied', 'removed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  lastActive: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);

// Notification Model
const NotificationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['unread', 'read', 'approved', 'denied'], default: 'unread' },
  relatedUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

export const Notification = mongoose.models.Notification || mongoose.model('Notification', NotificationSchema);

// PendingCode Model
const PendingCodeSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true },
  code: { type: String, required: true },
  type: { type: String, default: 'setup' },
  expiry: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

// TTL Index to auto-delete expired codes
PendingCodeSchema.index({ expiry: 1 }, { expireAfterSeconds: 0 });

export const PendingCode = mongoose.models.PendingCode || mongoose.model('PendingCode', PendingCodeSchema);
