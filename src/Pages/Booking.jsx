import Book from '../Components/Forms/Book'

function Booking() {
    return (
        <>
            <div className="mt-10 mx-auto space-y-20 container h-auto p-4">
                <h4 className="text-lg font-bold lg:text-4xl capitalize">
                    client booking
                </h4>
                <div>
                    <Book />
                </div>
            </div>

        </>
    )
}

export default Booking