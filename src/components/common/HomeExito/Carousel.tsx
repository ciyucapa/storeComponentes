import React from 'react';
import { Carousel } from '@vtex/store-ui';

const CarouselCarulla = () => (
    <Carousel
        controls="navigationArrows"
        transition={{
        duration: 400,
        property: 'transform'
        }}
    >
        <img
            alt=""
            src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/c31643d1-6b8c-41c1-9c92-c214e1640601___de8f7439cf5ce41216eaab51dea58dcb.jpg"
            width="100%"
        />
        <img
            alt=""
            src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/2a1ef58e-18ac-4ebc-a99e-a9e63e491603___d40d50ee49c826725c7c7e972a95cf72.jpg"
            width="100%"
        />
        <img
            alt=""
            src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/090ad7f5-363a-48ed-b7b2-54bba150d62e___fb8970cc0b63b0e31a6c56cd139f3f8c.jpg"
            width="100%"
        />
        <img
            alt=""
            src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/c31643d1-6b8c-41c1-9c92-c214e1640601___de8f7439cf5ce41216eaab51dea58dcb.jpg"
            width="100%"
        />
        <img
            alt=""
            src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/f157a975-c355-448c-ad90-553835ecdef5___b64a5a82741d5821f402d3b02a5b7e1a.jpg"
            width="100%"
        />
    </Carousel>
);

export default CarouselCarulla;