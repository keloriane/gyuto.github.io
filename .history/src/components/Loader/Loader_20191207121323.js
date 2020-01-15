import React, { useEffect } from 'react';
import { TimelineMax, Power4 } from 'gsap'
import "./loader.scss";
const Loader = () => {

    useEffect(() => {

        const letter = document.querySelectorAll('.letter')
        const loaderAnimation = new TimelineMax();
        loaderAnimation
            .staggerFrom(letter, 1, { y: "100%", yoyo: true, ease: Power4.easeOut }, "0.1")
            .staggerTo(letter, 0.2, { opacity: 0 }, "0.1")
    }, [])
    return (
        <div className="main-loader">
            <svg className="logo-gyuto-loader" viewBox="0 0 125 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="letter" d="M19.3504 20.514L26.4211 20.6505C27.8058 20.6505 29.161 20.5292 30.4867 20.2865C30.6047 20.5898 30.6635 20.8477 30.6635 21.06L30.5751 21.606C29.4557 22.0913 28.837 23.0772 28.7191 24.5635C28.5129 26.6262 28.4097 29.5382 28.4097 33.2995C26.642 33.2995 24.5946 33.527 22.267 33.982C19.9396 34.4673 18.0836 34.71 16.6989 34.71C11.6316 34.71 7.62484 33.0872 4.6787 29.8415C1.76204 26.5655 0.303711 22.4553 0.303711 17.511C0.303711 12.5363 1.89461 8.42618 5.07643 5.18051C8.25825 1.93484 12.3239 0.312012 17.2734 0.312012C21.2802 0.312012 24.8302 0.751846 27.9236 1.63151C28.1299 1.69218 28.233 1.79834 28.233 1.95001C28.233 2.10168 28.2183 2.29884 28.1888 2.54151C28.1888 2.78418 28.1593 3.13301 28.1004 3.58801C28.071 4.01268 28.0415 4.49801 28.012 5.04401C27.9532 6.19668 27.9236 7.71334 27.9236 9.59401C27.7174 9.71535 27.4375 9.77601 27.084 9.77601C26.7304 9.77601 26.4506 9.73051 26.2443 9.63951C25.714 7.18251 25.3311 5.65068 25.0953 5.04401C22.7679 2.98134 19.9396 1.95001 16.6105 1.95001C13.3109 1.95001 10.5562 3.16334 8.34665 5.59001C6.16651 8.01668 5.07643 11.3382 5.07643 15.5545C5.07643 18.5272 5.54782 21.3178 6.49057 23.9265C7.46281 26.5352 8.89167 28.6888 10.7772 30.3875C12.6922 32.0558 14.9018 32.89 17.4059 32.89C19.9396 32.89 22.3554 32.344 24.6534 31.252V28.4765C24.6534 26.2015 24.565 24.1388 24.3883 22.2885C22.8857 22.1065 21.2064 22.0155 19.3504 22.0155C19.2326 21.8032 19.1736 21.5605 19.1736 21.2875L19.3504 20.514Z" fill="white" />
                <path className="letter" d="M37.8833 11.3685L41.6838 11.232C41.7428 11.3836 41.7722 11.6111 41.7722 11.9145L41.6838 12.6425C40.7706 12.6425 40.1225 12.6728 39.7394 12.7335C40.0045 14.5838 40.7116 16.9347 41.8606 19.786L46.1472 30.706L49.9919 20.5595C51.2883 17.1318 52.0247 14.5838 52.2015 12.9155C51.1409 12.7941 50.0509 12.7335 48.9313 12.7335C48.8135 12.5515 48.7545 12.3391 48.7545 12.0965C48.7545 11.8538 48.7841 11.6111 48.8429 11.3685H53.1737C54.529 11.3685 55.7664 11.2775 56.8859 11.0955C57.1216 11.4898 57.2394 11.8841 57.2394 12.2785C56.5029 12.6121 55.9726 12.9458 55.6485 13.2795C54.853 14.1592 53.984 15.7213 53.0412 17.966L46.6333 33.8C46.2504 34.7403 45.6317 36.3632 44.7773 38.6685C43.923 41.0042 43.3189 42.627 42.9654 43.537C42.6414 44.447 42.3321 45.2963 42.0374 46.085C41.7428 46.904 41.404 47.7533 41.021 48.633C40.2255 50.5137 39.5922 51.454 39.1207 51.454C38.9735 51.454 38.6641 51.363 38.1927 51.181C36.9259 50.726 35.497 50.3165 33.9061 49.9525C33.9061 49.3458 34.0386 48.8605 34.3038 48.4965C35.3644 48.6785 35.9389 48.7695 36.0273 48.7695C36.8817 48.7695 37.9717 47.7382 39.2975 45.6755C40.6528 43.6432 41.6986 41.626 42.4351 39.624L44.026 35.256L36.8227 17.056C36.0862 15.145 35.4086 13.8558 34.7899 13.1885C34.4069 12.7031 33.8324 12.3391 33.0664 12.0965C33.0664 11.5505 33.1401 11.1561 33.2874 10.9135C35.2318 11.2168 36.7639 11.3685 37.8833 11.3685Z" fill="white" />
                <path className="letter" d="M79.0327 10.3219C79.2978 10.3826 79.5188 10.5646 79.6955 10.8679C79.4304 12.9306 79.2978 16.328 79.2978 21.06L79.342 27.5665C79.342 30.2965 80.0049 31.6615 81.3306 31.6615L82.9216 31.616C83.0394 31.8282 83.0983 32.071 83.0983 32.344L83.0541 32.8445C81.581 33.0872 80.55 33.3752 79.9607 33.709L78.8117 34.255C78.6644 34.346 78.4434 34.4977 78.1488 34.71C77.5007 34.4672 76.9556 33.9365 76.5137 33.1175C76.0718 32.2682 75.8214 31.4187 75.7625 30.5695C73.2583 32.1772 70.3858 33.5572 67.145 34.71C65.2596 34.71 63.8454 33.9972 62.9026 32.5715C61.9894 31.1155 61.5327 29.1437 61.5327 26.6565V17.966C61.5327 15.9032 61.4443 14.599 61.2675 14.053C61.0907 13.4767 60.5752 13.0975 59.7208 12.9154L58.2625 12.7334C58.1741 12.5514 58.1299 12.3543 58.1299 12.1419L58.2625 11.5959C58.7633 11.5049 59.8976 11.3078 61.6652 11.0044L64.8029 10.3219C65.0386 10.3826 65.2448 10.5646 65.4215 10.8679C65.1858 12.5363 65.068 16.9195 65.068 24.0175C65.068 28.9922 66.3644 31.4795 68.9569 31.4795C69.8702 31.4795 70.7835 31.3127 71.6968 30.979C72.6396 30.6452 73.3467 30.3267 73.818 30.0235C74.2894 29.6897 74.8934 29.2347 75.6299 28.6585C75.7183 26.6565 75.7625 25.2157 75.7625 24.336V18.8305C75.7625 16.9802 75.6741 15.691 75.4973 14.963C75.35 14.235 75.1144 13.7497 74.7902 13.507C74.4957 13.234 74.0832 13.0367 73.5529 12.9154L72.0945 12.7334L71.962 12.1419L72.0945 11.5959C72.3891 11.5353 72.9194 11.4594 73.6854 11.3684C74.4809 11.2774 75.5267 11.0954 76.8231 10.8224C78.1194 10.5494 78.8559 10.3826 79.0327 10.3219ZM64.8471 6.90944C63.8748 6.18144 63.1236 5.18044 62.5933 3.90644C62.9468 3.48178 63.4181 3.04194 64.0074 2.58694C64.6261 2.10161 65.1564 1.76794 65.5983 1.58594C66.7179 2.43528 67.4544 3.45144 67.8079 4.63444C66.8947 5.75677 65.9077 6.51511 64.8471 6.90944ZM74.3925 6.90944C73.4203 6.18144 72.669 5.18044 72.1387 3.90644C72.4923 3.48178 72.9636 3.04194 73.5529 2.58694C74.1716 2.10161 74.7019 1.76794 75.1438 1.58594C76.2633 2.43528 76.9998 3.45144 77.3534 4.63444C76.4401 5.75677 75.4531 6.51511 74.3925 6.90944Z" fill="white" />
                <path className="letter" d="M92.4396 24.0173C92.4396 29.0526 93.2793 31.5703 94.9586 31.5703C96.196 31.5703 97.8016 31.1456 99.7755 30.2963C100.217 30.448 100.438 30.8726 100.438 31.5703C98.2878 32.7533 95.813 33.7998 93.0141 34.7098C91.6295 34.7098 90.5689 33.9818 89.8323 32.5258C89.1252 31.0698 88.7717 29.1133 88.7717 26.6563V16.1003C88.7717 14.3106 88.6687 13.4158 88.4624 13.4158L85.1922 13.4613C84.986 13.4006 84.8828 13.249 84.8828 13.0063C85.0302 12.7029 85.1627 12.1569 85.2805 11.3683H88.4182C88.6539 11.3683 88.7717 10.8374 88.7717 9.77578L88.7275 5.90828C89.8177 5.45328 90.9371 4.51295 92.0861 3.08728C92.4396 3.08728 92.7048 3.17828 92.8816 3.36028C92.6164 6.54528 92.4838 9.21462 92.4838 11.3683C94.6346 11.3683 96.7558 11.2621 98.8475 11.0498C99.0538 11.1711 99.1568 11.3531 99.1568 11.5958C98.9801 11.8991 98.8328 12.4603 98.7149 13.2793L92.4396 13.3703V24.0173Z" fill="white" />
                <path className="letter" d="M124.362 22.698C124.362 29.432 120.561 33.436 112.96 34.71C109.837 34.71 107.201 33.5725 105.05 31.2975C102.929 28.9922 101.868 26.1257 101.868 22.698C101.868 15.9032 105.683 11.8841 113.314 10.6404C116.407 10.6404 119.015 11.8083 121.136 14.144C123.287 16.4797 124.362 19.331 124.362 22.698ZM113.933 32.7535C118.175 32.7535 120.296 29.9627 120.296 24.3815C120.296 21.2267 119.589 18.4665 118.175 16.1005C116.761 13.7345 114.89 12.5514 112.563 12.5514C110.235 12.5514 108.541 13.325 107.481 14.872C106.449 16.3887 105.934 18.5727 105.934 21.424C105.934 24.245 106.656 26.8385 108.099 29.2045C109.543 31.5705 111.487 32.7535 113.933 32.7535ZM108.055 6.90944C107.083 6.18144 106.332 5.18044 105.801 3.90644C106.155 3.48178 106.626 3.04194 107.215 2.58694C107.834 2.10161 108.364 1.76794 108.806 1.58594C109.926 2.43528 110.662 3.45144 111.016 4.63444C110.103 5.75677 109.116 6.51511 108.055 6.90944ZM117.601 6.90944C116.628 6.18144 115.877 5.18044 115.347 3.90644C115.7 3.48178 116.172 3.04194 116.761 2.58694C117.38 2.10161 117.91 1.76794 118.352 1.58594C119.471 2.43528 120.208 3.45144 120.561 4.63444C119.648 5.75677 118.661 6.51511 117.601 6.90944Z" fill="white" />
            </svg>
        </div>
    )
}
export default Loader;