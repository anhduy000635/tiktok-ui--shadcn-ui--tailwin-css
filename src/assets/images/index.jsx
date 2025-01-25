import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const images = {
    logo: require('./logo.png'),
    avatar: require('./avatar.jpg'),
};

export default images;
