console.log('--- Task 1: Create a New Visitor ---');
let visitorName = 'Lydia Miller';
let visitorAge = 29;
let visitorTicketId = 'H32AZ123';

const visitor = {
  name: visitorName,
  age: visitorAge,
  ticketId: visitorTicketId,
};
console.log('New visitor created:', visitor);

visitor.ticketId = null;
console.log('Visitor after ticket revocation:', visitor);

const tickets = {
  'G98B-S8EB-J782-9078': 'John Smith',
  'Y93T-3G2A-2S9L-4I4T': null,
  'KN37-6E74-8463-2TR6': 'Jane Doe',
};

let ticketIdToCheck = 'G98B-S8EB-J782-9078';
let ticketStatusResult; 

if (tickets[ticketIdToCheck] === undefined) {
  ticketStatusResult = 'unknown ticket id';
} else if (tickets[ticketIdToCheck] === null) {
  ticketStatusResult = 'not sold';
} else {
  ticketStatusResult = `sold to ${tickets[ticketIdToCheck]}`;
}
console.log(`Status for ticket ${ticketIdToCheck}: ${ticketStatusResult}`);

let simpleTicketStatusResult; 
const soldTo = tickets[ticketIdToCheck];

if (soldTo) {
  simpleTicketStatusResult = soldTo;
} else {
  simpleTicketStatusResult = 'invalid ticket !!!';
}
console.log(`Simple status for ticket ${ticketIdToCheck}: ${simpleTicketStatusResult}`);

const visitorWithGtc = {
  name: 'Elena Sanchez',
  age: 42,
  ticketId: 'KS2Z-3D9O-8S2A-1K8I',
  gtc: {
    version: '2.3',
    signed: true,
  },
};

const gtcVersion = visitorWithGtc?.gtc?.version;
console.log(`GTC Version for ${visitorWithGtc.name}: ${gtcVersion}`);