import React from 'react';

const SearchBox = ({ placeholderText, searchChange }) => {
	return(
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder={placeholderText}
				onChange={searchChange} 
			/>
		</div>
	);
}
export default SearchBox;