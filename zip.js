import fs from 'fs';
import zlib  from 'zlib';

const zip = () => {
	const gzip = zlib.createGzip();
	const r = fs.createReadStream('./vacancy.txt');
	const w = fs.createWriteStream('./vacancy.txt.gz');
	r.pipe(gzip).pipe(w);
};

export default zip;