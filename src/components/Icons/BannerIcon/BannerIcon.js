import style from './BannerIcon.module.scss';

export const BannerIcon = () => {
    return (
        <svg id={ style.bannerIcon } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275.34 275.34">
            <circle className={ style.cls1 } cx="137.67" cy="137.67" r="137.67"/>
            <polygon className={ style.cls2 } points="100 61.44 100 218.39 219.73 134.08 100 61.44"/>
        </svg>
    );
}