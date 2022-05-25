import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

const parser = () => {

	axios.get('https://inventorsoft.co/careers').then(res => {
		const writable = fs.createWriteStream('vacancy.txt', {flags: 'w'});
		const $ = cheerio.load(res.data);
		$(".vacancy").each((i, el) => { 
			const title = $(el).find('.vacancy__title').text();
			const seniority = $(el).find('.vacancy__seniority').text();
			const text = `${title} - ${seniority} \n`;
			writable.write(text);
		});
	}).catch(err => console.error(err));

};

export default parser;