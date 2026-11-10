import img1 from '../assets/events.jpg';
import img2 from '../assets/find.jpg';
import img3 from '../assets/Booking.jpg';
import img4 from '../assets/inClink.jpg';

export const workshops = [
  {
    id: 1,
    title: 'Building Unshakeable Self-Confidence',
    host: 'Coach Ahmad Ali',
    price: 30,
    image: img1,
  },
  {
    id: 2,
    title: 'Mindfulness & Meditation Workshop',
    host: 'Sarah Johnson',
    price: 25,
    image: img2,
  },
  {
    id: 3,
    title: 'Mastering Personal Growth & Goals',
    host: 'Elle Smith',
    price: 35,
    image: img3,
  },
  {
    id: 4,
    title: 'Emotional Intelligence',
    host: 'Sally Ali',
    price: 50,
    image: img4,
  },
];

export const paymentMethods = [
  {
    id: 'card',
    label: 'Credit or debit card',
    button: 'Pay and confirm',
    note: '',
  },
  {
    id: 'cash',
    label: 'Pay in cash at the venue',
    button: 'Reserve my spot',
    note: 'Your spot is reserved. Pay in cash when you arrive.',
  },
  {
    id: 'wallet',
    label: 'Mobile wallet',
    button: 'Send payment request',
    note: 'You will get a payment request on your phone number.',
  },
];