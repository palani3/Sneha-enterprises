import sharp from 'sharp';
import path from 'node:path';

const DIR = path.resolve(process.cwd(), 'public/img/ourservices');

// Source banners are 1536x1024 (3:2). Each has ad text on the left (and AC_repair
// also has full-width bars at the bottom). These rects capture only the clean
// photo region of each, all at a 4:3 aspect so cards stay uniform.
const crops = [
  { file: 'AC_sale.webp',       left: 520, top: 70, width: 1000, height: 760 },
  { file: 'AC_instal.webp',     left: 770, top: 40, width: 766,  height: 600 },
  { file: 'AC_repair.webp',     left: 595, top: 0,  width: 785,  height: 589 },
  { file: 'AC_anual.webp',      left: 785, top: 40, width: 751,  height: 580 },
  { file: 'AC_deep_clean.webp', left: 625, top: 40, width: 911,  height: 700 },
  { file: 'AC_gas.webp',        left: 605, top: 40, width: 931,  height: 700 },
];

for (const c of crops) {
  const src = path.join(DIR, c.file);
  const out = path.join(DIR, c.file.replace('.webp', '_photo.webp'));
  await sharp(src)
    .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
    .resize(1200, 900, { fit: 'cover' })
    .webp({ quality: 82 })
    .toFile(out);
  console.log('wrote', path.basename(out));
}
console.log('done');
