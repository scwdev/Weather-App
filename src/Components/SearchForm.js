import React, {useRef} from 'react'



const SearchForm = (props) => {
    const inputRefZip = useRef();

    const handleSubmit = (event) => {
        event.preventDefault()
        props.getWeather(inputRefZip.current.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='number' ref={inputRefZip} name='zipCode' id='zip-code' placeholder='Enter ZIP' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default SearchForm