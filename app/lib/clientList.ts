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
  // New clients
  'new-clients/Biocon-Biologics-Ltd', 'new-clients/ABB India Ltd',
  'new-clients/Service Now Software Development pvt Ltd', 'new-clients/Amex',
  'new-clients/Microsoft', 'new-clients/U D Truck India Pvt Ltd',
  'new-clients/Lam Research India Pvt Ltd', 'new-clients/ACL Pvt Ltd',
  'new-clients/Polaris India Pvt Ltd.', 'new-clients/General Motors India Pvt Ltd',
  'new-clients/Caterpiller India Engineering Solution Pvt Ltd',
  'new-clients/Volvo Group India ltd', 'new-clients/Infosys India Pvt Ltd.',
  'new-clients/Defmacro Sofware Pvt Ltd (Clear Tax)',
  'new-clients/Thyssenkrupp Aerospace India Pvt Ltd', 'new-clients/Thales India Pvt Ltd',
  'new-clients/VISA INC Techology Center', 'new-clients/Federal Bank Ltd',
  'new-clients/GMS World Wide Express Pvt Ltd', 'new-clients/Volkswagen Group Sales India Pvt Ltd',
  'new-clients/Carl- Zesis India Pvt Ltd', 'new-clients/IG Infotech Pvt Ltd',
  'new-clients/Britiania Industries Ltd', 'new-clients/Power School India Pvt Ltd',
  'new-clients/Dell India Pvt Ltd', 'new-clients/Razorpay Software Pvt Ltd',
  'new-clients/BLD Bijapur Hospital & Medical Collage', 'new-clients/belenusChampion hospital',
  'new-clients/Narayana Health Care', 'new-clients/Ephicacy  Life Science Analytics Pvt Ltd',
  'new-clients/US Bio Medicals Systems India Pvt Ltd', 'new-clients/Medgenome Labs Ltd',
  'new-clients/Procupine Pub', 'new-clients/AMEL Gourment Resturant',
  'new-clients/Pretsige Hospitality Ventures ltd', 'new-clients/Sri Sai Krupa Bar & Resturant',
  'new-clients/xtream Gym & Spa', 'new-clients/Biolitech India Pvt Ltd',
  'new-clients/Qualitus Pharma Solutions Pvt Ltd', 'new-clients/TIEA Connectors Pvt Ltd',
  'new-clients/Zumotur Biologics Pvt Ltd', 'new-clients/EPOCH Tech India Pvt Ltd',
  'new-clients/Barath Forge Limited', 'new-clients/Innovent Spaces Pvt Ltd',
  'new-clients/HM Constrution', 'new-clients/Vaishnavi AT-one Infrstructure LLP',
  'new-clients/Interix Interior Management Pvt Ltd', 'new-clients/CliffDesign Pvt Ltd',
  'new-clients/Kinght Frank India Pvt Ltd', 'new-clients/Icon Design Consultans',
  'new-clients/RCA Studio Pvt Ltd', 'new-clients/Ocean Lifespacs India Pvt Ltd',
  'new-clients/Design Arc Interiors',
];
