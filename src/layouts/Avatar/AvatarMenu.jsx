import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { forwardRef, useState } from 'react';
import images from '../../assets/images';
import PropTypes from 'prop-types';
AvatarMenu.displayName = 'AvatarMenu';

const AvatarMenu = forwardRef(({ src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setfallback] = useState('');
    const handleError = () => {
        setfallback(images.noImage);
    };
    return (
        <Avatar ref={ref} {...props}>
            <AvatarImage src={src} alt={alt} onError={handleError} />
            <AvatarFallback>{fallback || customFallback}</AvatarFallback>
        </Avatar>
    );
});
AvatarMenu.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default AvatarMenu;
