import { createStore } from "vuex";
import db from "../firebase/firebase";

export default createStore({
  state: {
    invoices: [],
    invoiceModal: null,
    invoiceCloseModal: null,
    invoicesLoaded: null,
    currentInvoiceArrays: [],
  },
  mutations: {
    TOGGLE_INVOICE_MODAL(state) {
      state.invoiceModal = !state.invoiceModal;
    },
    TOGGLE_INVOICE_CLOSE_MODAL(state) {
      state.invoiceCloseModal = !state.invoiceCloseModal;
    },
    SET_INVOICE_DATA(state, payload) {
      state.invoices.push(payload);
      console.log("state.invoice", state.invoices);
    },
    INVOICE_LOADED(state) {
      state.invoicesLoaded = true;
    },
  },
  actions: {
    async FETCH_INVOICES({ commit, state }) {
      const getData = db.collection("invoices");
      const results = await getData.get();
      console.log(results);
      results.forEach((doc) => {
        if (!state.invoices.some((invoice) => invoice.docId === doc.id)) {
          const data = {
            docId: doc.id,
            invoiceId: doc.data().invoiceId,
            billerStreetAddress: doc.data().billerStreetAddress,
            billerCity: doc.data().billerCity,
            billerZipCode: doc.data().billerZipCode,
            billerCountry: doc.data().billerCountry,
            clientName: doc.data().clientName,
            clientEmail: doc.data().clientEmail,
            clientStreetAddress: doc.data().clientStreetAddress,
            clientCity: doc.data().clientCity,
            clientZipCode: doc.data().clientZipCode,
            clientCountry: doc.data().clientCountry,
            invoiceDateUnix: doc.data().invoiceDateUnix,
            invoiceDate: doc.data().invoiceDate,
            paymentTerms: doc.data().paymentTerms,
            paymentDueDateUnix: doc.data().paymentDueDateUnix,
            paymentDueDate: doc.data().paymentDueDate,
            productDescription: doc.data().productDescription,
            invoiceItemList: doc.data().invoiceItemList,
            invoiceTotal: doc.data().invoiceTotal,
            invoicePending: doc.data().invoicePending,
            invoiceDraft: doc.data().invoiceDraft,
            invoicePaid: doc.data().invoicePaid,
          };
          commit("SET_INVOICE_DATA", data);
        }
      });
      commit("INVOICE_LOADED");
    },
  },
  modules: {},
});
