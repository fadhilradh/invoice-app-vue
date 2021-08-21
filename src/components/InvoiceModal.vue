<template>
  <div
    @click="checkClick"
    ref="invoiceWrap"
    class="invoice-wrap flex flex-column"
  >
    <form @submit.prevent="submitForm" class="invoice-content">
      <h1>New Invoice</h1>
      <!-- Bill From -->
      <div class="bill-from flex flex-column">
        <h4>Bill From</h4>
        <InvoiceInput 
        :title="Street Address"
        
        
        />
        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="billerCity">City</label>
            <input type="text" required id="billerCity" v-model="billerCity" />
          </div>

          <div class="input flex flex-column">
            <label for="billerZipCode">Zip Code</label>
            <input
              type="text"
              required
              id="billerZipCode"
              v-model="billerZipCode"
            />
          </div>

          <div class="input flex flex-column">
            <label for="billerCountry">Country</label>
            <input
              type="text"
              required
              id="billerCountry"
              v-model="billerCountry"
            />
          </div>
        </div>
      </div>

      <!-- Bill To -->
      <div class="bill-to flex flex-column">
        <h4>Bill To</h4>
        <div class="input flex flex-column">
          <label for="clientName">Client's Name</label>
          <input type="text" required id="clientName" v-model="clientName" />
        </div>
        <div class="input flex flex-column">
          <label for="clientEmail">Client's Email</label>
          <input type="text" required id="clientEmail" v-model="clientEmail" />
        </div>
        <div class="input flex flex-column">
          <label for="clientStreetAddress">Street Address</label>
          <input
            type="text"
            required
            id="clientStreetAddress"
            v-model="clientStreetAddress"
          />
        </div>

        <div class="location-details flex">
          <div class="input flex flex-column">
            <label for="clientCity">City</label>
            <input type="text" required id="clientCity" v-model="clientCity" />
          </div>

          <div class="input flex flex-column">
            <label for="clientZipCode">Zip Code</label>
            <input
              type="text"
              required
              id="clientZipCode"
              v-model="clientZipCode"
            />
          </div>

          <div class="input flex flex-column">
            <label for="clientCountry">Country</label>
            <input
              type="text"
              required
              id="clientCountry"
              v-model="clientCountry"
            />
          </div>
        </div>
      </div>

      <!-- Invoice Work Details -->
      <div class="invoice-work flex flex-column">
        <div class="payment flex">
          <div class="input flex flex-column">
            <label for="invoiceDate">Invoice Date</label>
            <input
              type="text"
              id="invoiceDate"
              v-model="invoiceDate"
              disabled
            />
          </div>

          <div class="input flex flex-column">
            <label for="paymentDueDate">Payment Due Date</label>
            <input
              type="text required"
              id="paymentDueDate"
              v-model="paymentDueDate"
              disabled
            />
          </div>
        </div>

        <div class="input flex flex-column">
          <label for="paymentTerms">Payment Terms</label>
          <select
            type="text required"
            id="paymentTerms"
            v-model="paymentTerms"
            disabled
          >
            <option value="30">Net 30 Days</option>
            <option value="60">Net 60 Days</option>
          </select>
        </div>

        <div class="input flex flex-column">
          <label for="productDescription">Product Description</label>
          <input
            type="text required"
            id="productDescription"
            v-model="productDescription"
            disabled
          />
        </div>
      </div>

      <div class="work-items">
        <h3>Item List</h3>
        <table class="item-list">
          <tr class="table-heading flex">
            <th class="item-name">Item Name</th>
            <th class="qty">Quantity</th>
            <th class="Price">Price</th>
            <th class="Total">Total</th>
          </tr>

          <tr
            class="table-items flex"
            v-for="item in invoiceItemList"
            :key="item.id"
          >
            <td class="item-name">
              <input type="text" v-model="item.itemName" />
            </td>
            <td class="qty">
              <input type="text" v-model="item.qty" />
            </td>
            <td class="price">
              <input type="text" v-model="item.price" />
            </td>
            <td class="total flex">
              ${{ (item.total = item.qty * item.price) }}
            </td>
            <img
              @click="deleteInvoiceItem(item.id)"
              src="@/assets/icon-delete.svg"
              alt=""
            />
          </tr>
        </table>

        <div @click="addNewInvoiceItem" class="flex button">
          <img src="@/assets/icon-plus.svg" alt="" />
          Add New Item
        </div>

        <!-- Save -->
        <div class="save fle">
          <div class="left flex">
            <button @click="closeInvoice" class="red">Cancel</button>
          </div>
          <div class="right flex">
            <button @click="saveDraft" class="dark-purple">Save Draft</button>
            <button @click="publishInvoice" class="purple">
              Publish Invoice
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "invoiceModal",
  data() {
    return {
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
    };
  },
};
</script>

<style>
</style>