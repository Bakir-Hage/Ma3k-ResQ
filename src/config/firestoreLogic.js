import {
  getFirestore,
  getDocs,
  collection,
  setDoc,
  doc,
  getDoc,
  GeoPoint,
  addDoc,
  where,
  deleteDoc,
} from "firebase/firestore";
import { app, auth } from "./firebaseConnection";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const db = getFirestore(app);
// Function to sign up a new user and store their information in Firestore
export const signUpNewUser = async (
  email,
  password,
  latitude,
  longitude,
  phoneNumber,
  userName,
) => {
  if (
    !email ||
    !password ||
    !latitude ||
    !longitude ||
    !phoneNumber ||
    !userName
  ) {
    return { success: false, error: "Missing required fields" };
  }
  try {
    const location = new GeoPoint(latitude, longitude);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const UID = userCredential.user.uid;
    await setDoc(doc(db, "users", UID), {
      location: location,
      phoneNumber: phoneNumber,
      userName: userName,
    });
    return { success: true, UID };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to sign in an existing user using email and password
export const signInUser = async (email, password) => {
  if (!email || !password) {
    return { success: false, error: "Missing email or password" };
  }
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const UID = userCredential.user.uid;
    return { success: true, UID };
  } catch (error) {
    console.error("Error signing in user: ", error);
    return { success: false, error: error.message };
  }
};

// Function to retrieve user information from Firestore using UID
export const getUserInfo = async (UID) => {
  if (!UID) {
    return { success: false, error: "Missing UID" };
  }
  try {
    const docRef = doc(db, "users", UID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() };
    } else {
      return { success: false, error: "User not found" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to update user location in Firestore using UID
export const updateUserLocation = async (UID, latitude, longitude) => {
  if (!UID || !latitude || !longitude) {
    return { success: false, error: "Missing required fields" };
  }
  try {
    const location = new GeoPoint(latitude, longitude);
    await setDoc(
      doc(db, "users", UID),
      { location: location },
      { merge: true },
    );
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// function to retrive all services from services collection in Firestore and return them as an array of objects
export const getAllServices = async () => {
  try {
    const servicesRef = collection(db, "Services");
    const querySnapshot = await getDocs(servicesRef);
    const services = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { success: true, services };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
// Function to retrieve all user from services collection in Firestore using UID and return them as an array of objects
export const getUserServices = async (UID) => {
  if (!UID) {
    return { success: false, error: "Missing UID" };
  }
  try {
    const servicesRef = collection(db, "Services");
    const query = query(servicesRef, where("userID", "==", UID));
    const querySnapshot = await getDocs(query);
    const services = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { success: true, services };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to add a new service to the services collection in Firestore using UID and service details
export const addService = async (UID, serviceDetails) => {
  if (!UID || !serviceDetails) {
    return { success: false, error: "Missing UID or service details" };
  }
  try {
    const servicesRef = collection(db, "Services");
    const newService = {
      userID: UID,
      ...serviceDetails,
    };
    const docRef = await addDoc(servicesRef, newService);
    return { success: true, docID: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// function to update service details in the services collection in Firestore using service ID and updated details
export const updateService = async (serviceID, updatedDetails) => {
  if (!serviceID || !updatedDetails) {
    return { success: false, error: "Missing service ID or updated details" };
  }
  try {
    const serviceRef = doc(db, "Services", serviceID);
    await setDoc(serviceRef, updatedDetails, { merge: true });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to delete a service from the services collection in Firestore using service ID
export const deleteService = async (serviceID) => {
  if (!serviceID) {
    return { success: false, error: "Missing service ID" };
  }
  try {
    const serviceRef = doc(db, "Services", serviceID);
    await deleteDoc(serviceRef);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to retrieve all services using a specific service type from the services collection in Firestore and return them as an array of objects
export const getServicesByType = async (serviceType) => {
  if (!serviceType) {
    return { success: false, error: "Missing service type" };
  }
  try {
    const servicesRef = collection(db, "Services");
    const query = query(servicesRef, where("serviceType", "==", serviceType));
    const querySnapshot = await getDocs(query);
    const services = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return { success: true, services };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
