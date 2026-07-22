/**
 * Client logo basenames (files live in /public/img/clients/<name>.webp).
 *
 * Kept in its own module so it can be imported by both the lightweight
 * DownloadBrochureButton (initial bundle) and the heavy BrochurePDF
 * (loaded on demand) WITHOUT dragging @react-pdf/renderer into the
 * main page bundle.
 */
export const CLIENT_LIST = [
  'google', 'Bosch1', 'flipkart', 'Deloitte', 'pwc', 'hdfc',
  'Biocon', 'Myntra', 'TVS', 'cred', 'Exxon Mobil', 'fossil',
  'brigade-group', 'prestige', 'JLL', 'Thought Works', 'amd',
  'Baptist Hospitals', 'AV Hospita', 'Sparsh Hospitals',
  'IIMB', 'Presidency University', 'Autoliv', 'Applied Materials',
  'Eagleton Golf', 'Whitefield Inn', 'Renewsys', 'Vestian Global',
  'bagmane-logo', 'Indiqube', 'dxcpng', 'Danske IT',
];
