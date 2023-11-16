export default function Background() {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" 
            xmlns="http://www.w3.org/2000/svg" className="transition duration-300 
            ease-in-out delay-150"><defs><linearGradient id="gradient" x1="1%" y1="41%" 
            x2="99%" y2="59%"><stop offset="5%" stop-color="#7bdcb5"></stop><stop 
            offset="95%" stop-color="#0693e3"></stop></linearGradient></defs><path 
            d="M 0,600 C 0,600 0,200 0,200 C 118.93333333333334,165.86666666666667 
            237.86666666666667,131.73333333333332 414,148 C 590.1333333333333,164.26666666666668 
            823.4666666666667,230.93333333333334 1004,248 C 1184.5333333333333,265.06666666666666 
            1312.2666666666667,232.53333333333333 1440,200 C 1440,200 1440,600 1440,600 Z" 
            stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" 
            className="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs>
            <linearGradient id="gradient" x1="1%" y1="41%" x2="99%" y2="59%"><stop offset="5%" 
            stop-color="#7bdcb5"></stop><stop offset="95%" stop-color="#0693e3"></stop>
            </linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 134.2666666666667,430.6666666666667 
            268.5333333333334,461.33333333333337 423,454 C 577.4666666666666,446.66666666666663 752.1333333333332,401.3333333333333 
            925,386 C 1097.8666666666668,370.6666666666667 1268.9333333333334,385.33333333333337 1440,400 C 1440,400 1440,600 1440,600 Z" 
            stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 
            path-1"></path></svg>
        `}} />
    );
}