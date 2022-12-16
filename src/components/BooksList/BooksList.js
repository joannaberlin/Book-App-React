import { useSelector } from 'react-redux';
import { getAllBooks, removeBook } from '../../redux/booksRedux';
import { useDispatch } from 'react-redux';

const BooksList = () => {
	const books = useSelector((state) => getAllBooks(state));
	const dispatch = useDispatch();
	console.log(books);

	const handleDelete = (bookId) => {
		dispatch(removeBook(bookId));
	};

	return (
		<ul>
			{books.map((book) => (
				<li key={book.id}>
					{book.title} by {book.author}
					<button onClick={() => handleDelete(book.id)}>Remove</button>
				</li>
			))}
		</ul>
	);
};

export default BooksList;
