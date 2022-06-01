import { useRouter } from "next/router";
import Footer from "../components/footer";
import Header from "../components/header";
import { format } from 'date-fns'
import InfoCard from "../components/InfoCard";
import { imageOptimizer } from "next/dist/server/image-optimizer";

// use props and destructure for searchResults
function Search({ searchResults }) {


    // inside of router we have something called router.query
    const router = useRouter()
    // ES6 destructuring. Pulling out the values inside of an object to use as variables
    const {location, startDate, endDate, numberOfGuests} = router.query;

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formattedEndtDate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formattedStartDate} - ${formattedEndtDate}`;

    return (
        // h-screen will seperate the header/footer WHEN WE ADD CONTENT. if needed:  className="h-screen
        <div>
            <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`} />

            {/* main content goes here. display flex */}
            {/* HIDDEN GOES HERE */}
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays {range} for {numberOfGuests} guests</p>

                    <h1 className="text-3xl font-semibold mb-6">Stay in {location}</h1>
                

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        {/* named all our button css 'button'. edited on globals.css and imported to _app.tsx */}
                        {/* you could either create a component[like header.tsx], or like we did it with custom css utilities */}
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>

                    {/* info card search results */}
                    <div className="flex flex-col">
                        {searchResults.map(({ img, location, title, description, star, price, total}
                        ) => (
                        <InfoCard
                        // whenever you're mapping. use a key
                            key={img}
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                        />
                         ))}
                    </div>
                    

                </section>
            </main>


            <Footer />
        </div>
    )
};

export default Search;

// ==================================================================================================
// server rendering

export async function getServerSideProps() {
    // fetch gets us a bunch of stuff. use .then() to specify
    const searchResults = await fetch('https://links.papareact.com/isz').then(
        (res) => res.json());
    // uses this as parameter inside search function
    return {
        props: {
            searchResults
        }
    };
}