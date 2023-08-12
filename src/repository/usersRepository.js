import React from 'react'
import { db } from '../../firebase'
import { doc, collection, setDoc, updateDoc } from 'firebase/firestore'


export const createSignInUsers = (uid) => {
  try {
    const docRef = setDoc(doc(db, "users", uid), {
      user_uid: uid,
      is_show_tutorial: false,
      sign_in_time: new Date()
    })

    console.log("success: ", docRef)
  } catch (e) {
    console.log("Error message: ", e)
  }
}

export const updateSignInUsers = (uid) => {
  try {
    const docRef = updateDoc(doc(db, "users", uid), {
      is_show_tutorial: true
    })

    console.log("success: ", docRef)
  } catch (e) {
    console.log("Error message: ", e)
  }
}
