
const AboutCars = () => {
    return (
        <div className="max-w-6xl mx-auto my-12">
            <h1 className="text-5xl font-bold text-center mt-14 mb-4">About Cars</h1>
            <hr />
            <div className="md:flex mt-8 gap-4">
                <div className="flex-1 px-6">
                    <h1 className="text-2xl font-semibold mb-2">We offer high quality vehicles at unbelievable prices & creates pleasant buying experience.
                    </h1>
                    <p>
                        Our commitment to quality is evident in our meticulously curated selection of cars, each representing the pinnacle of design, performance, and innovation. From iconic sedans to powerful SUVs, we bring you a collection that transcends mere transportation, embodying the spirit of adventure and sophistication.
                    </p>
                    <p>
                        Explore the future of driving with our electric and hybrid options, designed to not only meet but exceed the demands of a sustainable world. Our knowledgeable and friendly team is here to guide you through the latest advancements in automotive technology, ensuring you make an informed decision that aligns with your values.
                    </p>
                    <div className="shadow-md mx-2 lg:mx-16 p-2 mt-4">
                        <h4 className="text-xl font-semibold text-rose-500">Affordable Auto Prices</h4>
                        <p>AutoDrive is nisi aliquip consequat duis velit esse</p>
                    </div>
                    <div className="shadow-md mx-2 lg:mx-16 p-2 mt-4">
                        <h4 className="text-xl font-semibold text-rose-500">20 Years in Business</h4>
                        <p>Vehicles is nisi aliquip consequat duis velit</p>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="https://i.ibb.co/wQrfCzP/g01.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutCars;