import shortid from 'shortid';

export const getAllBooks = ({ books }) => books;

const createActionName = (actionName) => `app/books/${actionName}`;
const ADD_BOOK = createActionName('ADD_BOOK');
const REMOVE_BOOK = createActionName('REMOVE_BOOK');

export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });
const booksReducer = (statePart = [], action) => {
	switch (action.type) {
		case ADD_BOOK:
			return [...statePart, { ...action.payload, id: shortid() }];
		case REMOVE_BOOK:
			return statePart.filter((book) => book.id !== action.payload);
		default:
			return statePart;
	}
};

export default booksReducer;
