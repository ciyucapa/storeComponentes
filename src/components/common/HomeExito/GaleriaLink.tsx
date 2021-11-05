import React from 'react';
import { LocalizedLink, Box} from '@vtex/store-ui';

import { Image } from 'theme-ui';

interface GalleryProps {
    src: string,
    alt: string,
    title: string
}

const GalleryLink = (props: GalleryProps) => {
    const variant = 'homeCarulla';
    return (
    <Box variant={`${variant}.boxGaleria`}>
        <Image
            loading="lazy"
            alt={props.alt}
            src={props.src}
            width="158px"
            height="150px"
        />
        <LocalizedLink to="/">{props.title}</LocalizedLink>
    </Box>
    );
};

export default GalleryLink;