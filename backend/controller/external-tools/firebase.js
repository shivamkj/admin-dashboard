import * as admin from "firebase-admin";

function initFirebaseAdmin() {
  const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
  });
  global.firebaseAdmin = firebaseAdmin;
  return firebaseAdmin;
}

const firebaseAdmin = global.firebaseAdmin || initFirebaseAdmin();

const firbaseAuth = firebaseAdmin.auth();

export { firbaseAuth };
