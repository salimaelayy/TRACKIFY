import { useState } from 'react';

function HelpCenter() {
    const [isOpen, setIsOpen] = useState([false, false, false, false]);

    const toggleIsOpen = (index) => {
        const updatedIsOpen = [...isOpen];
        updatedIsOpen[index] = !updatedIsOpen[index];
        setIsOpen(updatedIsOpen);
    };

    return (
        <div className='bg-background py-8'><div className="container  mx-auto px-4 sm:px-8 ">
            <div className="main-title ">
                <h1 className="font-bold text-2xl my-6 text-center">How can we help you?</h1>
            </div>

            <div className="main-search mb-8 rounded-lg shadow-lg px-6 py-3 w-full flex items-center space-x-6 border border-primary border-opacity-75">
                <button className="focus:outline-none  placeholder-secondary" onClick={() => document.getElementById('search').focus()}>
                    <svg className="w-6 h-6 text-secondary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
                <input id="search" type="text" placeholder="Describe your issue" className="text-base w-full bg-transparent focus:outline-none" />
            </div>

            <div className="main-question mb-8 flex flex-col divide-y text-gray-800 text-base">
                {['Popular articles', 'Fix problems & request removals', 'Browse the web', 'Search on your phone or tablet'].map((title, index) => (
                    <div className="item px-6 py-6" key={index}>
                        <a href="#" className="flex items-center justify-between" onClick={() => toggleIsOpen(index)}>
                            <h4 className={isOpen[index] ? 'text-blue-600 font-bold' : ''}>{title}</h4>
                            <svg className="w-5 h-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </a>
                        {isOpen[index] && <div className="mt-3 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!</div>}
                    </div>
                ))}
            </div>

            <div className="main-images mb-8 ">
                <div className="images grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { src: 'https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg', alt: 'Contact with Customer support', title: 'Contact with Customer support', label: 'Customer support' },
                        { src: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a', alt: 'Send massage to support disk', title: 'Send massage to support disk', label: 'Send massage' },
                        { src: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3', alt: 'Write your feedback', title: 'Write your feedback', label: 'Write feedback' }
                    ].map((image, index) => (
                        <div className="image bg-white rounded-lg shadow-lg overflow-hidden" key={index}>
                            <a href="#">
                                <img src={image.src} alt={image.alt} title={image.title} />
                                <span className="text-center p-2 text-gray-700 text-sm inline-block w-full">{image.label}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div></div>
        
    );
}

export default HelpCenter;
