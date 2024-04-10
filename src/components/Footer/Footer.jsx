
const Footer = () => {
    return (
        <footer className="container mx-auto bg-gray-50 pt-20 pb-10 px-10">

            <div className="flex justify-between gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 text-gray-600">Categories</h3>
                    <ul className="text-sm text-gray-500 space-y-1">
                        <li>Women</li>
                        <li>Men</li>
                        <li>Shoes</li>
                        <li>Accessories</li>
                        <li>New Arrivals</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 text-gray-600">Links</h3>
                    <ul className="text-sm text-gray-500 space-y-1">
                        <li>FAQ</li>
                        <li>Pages</li>
                        <li>Store</li>
                        <li>Compare</li>
                        <li>Cookies</li>
                    </ul>
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 text-gray-600">About</h3>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellat esse voluptas ut fugiat ratione praesentium sint at veritatis consequuntur eaque, pariatur aut architecto odit itaque dolor non voluptatem amet.</p>
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 text-gray-600">Contact</h3>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, culpa cupiditate optio voluptatem similique praesentium eaque earum. Eligendi, saepe libero nobis necessitatibus minus consectetur aliquam provident mollitia ab voluptatum delectus?</p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-8">
                <p className="text-sm text-gray-600 font-medium"><span className="text-3xl text-blue-500 mr-3">MyStore</span> &copy; Copyright All Right Reserved</p>
                <div>
                    <img className="h-20" src="/footer/payment.png" alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;