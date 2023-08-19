import { ref } from "vue";
import { projectFirestore } from "@/configs/firebase";

const useCollection = (name) => {
  const error = ref(null);

  async function addRecord(record) {
    error.value = null;
    try {
      const response = await projectFirestore.collection(name).add(record);
      return response;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }

  async function getRecord() {
    error.value = null;
    try {
      const response = await projectFirestore.collection(name).get();
      return response;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }

  async function getSingleRecord(docId) {
    error.value = null;
    try {
      const response = await projectFirestore.collection(name).doc(docId).get();
      return response;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }

  async function updateRecord(docId, data) {
    error.value = null;
    try {
      return await projectFirestore.collection(name).doc(docId).update(data);
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }

  async function deleteRecord(docId) {
    error.value = null;
    try {
      const response = await projectFirestore
        .collection(name)
        .doc(docId)
        .delete();
      return response;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }

  return {
    error,
    addRecord,
    getRecord,
    updateRecord,
    getSingleRecord,
    deleteRecord,
  };
};

export default useCollection;
