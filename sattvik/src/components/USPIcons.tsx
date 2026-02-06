import { useState, useEffect } from 'react';

const uspIcons = [
    { src: '/USPs/1.png', label: 'REFINED\nOIL-FREE' },
    { src: '/USPs/2.png', label: 'Eco-FRIENDLY\nPACKAGING' },
    { src: '/USPs/3.png', label: 'PLANT-BASED' },
    { src: '/USPs/4.png', label: 'REFINED\nSUGAR-FREE' },
    { src: '/USPs/5.png', label: 'ADDITIVE-FREE' },
    { src: '/USPs/6.png', label: 'CLEAN\u00A0&\u00A0PURE\nNOTHING REFINED' }
];

export default function USPIcons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} relative z-10 w-full`}>
            <div className={`grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto mt-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                {uspIcons.map((icon, index) => (
                    <div
                        key={index}
                        className="bg-hunter-50/90 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-lg border border-white/50 flex flex-col justify-start items-center group hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex flex-col items-center gap-3 w-full">
                            <img
                                src={icon.src}
                                alt={`Satvify USP ${index + 1}`}
                                className="h-10 w-10 md:h-16 md:w-16 object-contain group-hover:scale-110 transition-transform duration-300 mix-blend-multiply"
                            />
                            <div className="flex flex-col items-center">
                                {icon.label.split('\n').map((line, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] md:text-xs font-heading font-bold text-calPoly-700 leading-tight uppercase text-center group-hover:text-hunter-600 transition-colors whitespace-nowrap"
                                    >
                                        {line}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
