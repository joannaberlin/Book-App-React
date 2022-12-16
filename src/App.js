import BooksList from './components/BooksList/BooksList';
import BookForm from './components/BookForm/BookForm';

const App = () => {
	// const removeBook = (bookId) => {
	// 	setBooks(books.filter((book) => book.id !== bookId));
	// };

	// const addBook = (newBook) => {
	// 	setBooks([
	// 		...books,
	// 		{ id: shortid(), title: newBook.title, author: newBook.author },
	// 	]);
	// };

	// return (
	// 	<div>
	// 		<h1>Book App</h1>
	// 		<BooksList books={books} removeBook={removeBook} />
	// 		<BookForm addBook={addBook} />
	// 	</div>
	// );
	return (
		<div>
			<h1>Book App</h1>
			<BooksList />
			<BookForm />
		</div>
	);
};

export default App;
