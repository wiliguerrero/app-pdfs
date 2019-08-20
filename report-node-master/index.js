const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Luis Rolando Guerrero",
    address: "San antonio del carmen",
    city: "Dolores",
    state: "GTO",
    country: "MEX",
    postal_code: 12345
  },
  items: [
    {
      item: "25",
      description: "Adele",
      quantity: 2,
      amount: 6000
    },
    {
      item: "21",
      description: "Adele",
      quantity: 1,
      amount: 2000
    },
    {
      item: "19",
      description: "Adele",
      quantity: 1,
      amount: 2000
    },
    {
      item: "Greatest Hits",
      description: "Adele",
      quantity: 1,
      amount: 2000
    }
  ],
  subtotal: 8000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");
