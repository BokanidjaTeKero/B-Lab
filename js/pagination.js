
const marginMove = where => {
	const elem = document.querySelector('.paginationElement');
	const width = elem.offsetWidth;

	if(where === 'left') {
		paginationElementContainer.style.marginRight = `${width}${10}px`;	
	} else if (where === 'right') {
		paginationElementContainer.style.marginLeft = `${width}${10}px`;
	}
}

const normalizeMargin = () => {
	const elem = document.querySelector('.paginationElement');
	const duzina = elem.offsetWidth;

	paginationElementContainer.style.margin =`${10}px`;
}

const switchPosition = where => {

	const elem = document.querySelectorAll('.paginationElement');
	
	const firstElem = elem[0];
	const lastElem = elem[elem.length - 1];

	if(where === 'after') {
		lastElem.after(firstElem);	
	} else if (where === 'before') {
		firstElem.before(lastElem);
	}
}

const previousPage = () => {

	marginMove('left');
	switchPosition('before');
	normalizeMargin();
}

const nextPage = () => {
	
	switchPosition('after');
	marginMove('right');
	normalizeMargin();
}

export {previousPage, nextPage};