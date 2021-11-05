import { Container, Flex, Box} from '@vtex/store-ui'
import { Image } from 'theme-ui';
import React from 'react'
import type { PageProps } from 'gatsby'
import type { FC } from 'react'
import ProductSummary from 'src/components/product/ProductSummary'
//import Carousel from 'src/components/common/Carousel'
import Shelf from 'src/components/product/ProductSlider'
import type { HomePageQueryQuery } from 'src/__generated__/HomePageQuery.graphql'
import CarouselCarulla from '../../components/common/HomeExito/Carousel'
import GalleryLink from '../../components/common/HomeExito/GaleriaLink'

type Props = PageProps<HomePageQueryQuery>

const Above: FC<Props> = ({ data: { cmsHome, vtex } }) => {
  
  const variant = 'homeCarulla'
  return(
  <>
    {/*<Carousel {...cmsHome?.sections[0].props} showArrows showDots />*/}
    <Flex variant={`${variant}.flex`}>
                <Image
                    variant={`${variant}.banner`}
                    width="1268px"
                    loading="lazy"
                    alt="Especia"
                    src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/7a8d7c70-4209-4a9d-9651-1e99056d9cbe___e17105ba98d1983431f906fe9e00b241.jpg'
                />
            </Flex>
            <Flex variant={`${variant}.flexCarousel`}>
                    <Box variant={`${variant}.boxCarousel`}>
                        <CarouselCarulla/>
                    </Box>
                    <Box variant={`${variant}.boxImagen`}>
                        <Image
                            variant={`${variant}.bannerImage`}
                            width="100%"
                            loading="lazy"
                            alt="merkaweek"
                            src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/462a965c-a0ed-4d43-bb76-edeee380b564___42816d934ade9a6fd350ca3b0fa112c3.png'
                        />
                    </Box>
            </Flex>
            <Flex>
            <Image
                    variant={`${variant}.banner`}
                    width="1268px"
                    loading="lazy"
                    alt="Especia"
                    src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/1163b14b-a64a-4ec1-9b42-57361c8e8c9c___4f56730dda8858f2281e61afd92b66c3.png'
                />
                <Image
                    variant={`${variant}.banner`}
                    width="1268px"
                    loading="lazy"
                    alt="Especia"
                    src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/0ce7cfc5-4c9f-45b3-bf75-d38d4e6a62f7___656ffa88bd1ff4e0a2e7e6519f6bb131.png'
                />
                <Image
                    variant={`${variant}.banner`}
                    width="1268px"
                    loading="lazy"
                    alt="Especia"
                    src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/c5eab4a7-e927-4f14-aa4a-793027c2f983___9e8d6f4201dfbaa6b477c8f4c9a0b030.png'
                />
                <Image
                    variant={`${variant}.banner`}
                    width="1268px"
                    loading="lazy"
                    alt="Especia"
                    src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/1163b14b-a64a-4ec1-9b42-57361c8e8c9c___4f56730dda8858f2281e61afd92b66c3.png'
                />
            </Flex>
            <Flex variant={`${variant}.flexGallery`}>
                <Box variant={`${variant}.boxGalleryText`}>
                   Compra en tus categorías favoritas
                </Box>
                <Box variant={`${variant}.boxContainerGallery`}>
                    <Box variant={`${variant}.boxGalleryLink`}>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/8910e300-cfad-4783-abb4-6663cd278c5a___b759f277344313fadca46f7775f4d22f.png' alt='Juguetería' title='Juguetería'/>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/2d89fb8a-68b1-4431-9ead-7ff49b046051___b6a2e1865a71239a550451a6a9a4ef4c.png' alt='Navidad' title='Navidad'/>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/46e40693-7b3d-4779-8c3b-46ebbb791db3___c0e9ca364442a53cd7c0121f8772ffdd.png' alt='Moda' title='Moda'/>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/0638d422-5449-4833-8646-7c8b1b256da6___6690ab330eb1e9d6103bcff1786475a3.jpg' alt='Especia' title='Especia'/>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/322f0a77-d179-4676-a1b7-92de0fae7043___980ff4504283d50c358ffe38710dbf09.png' alt='Celulares' title='Celulares'/>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/093a01e6-62ee-428f-870a-0eaa3a54d518___2738da61f7daab9550863e40662aad5f.png' alt='Electrodomésticos' title='Electrodomésticos'/>
                    </Box>
                    <Box variant={`${variant}.boxGalleryLink`}>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/d1ff0a2c-c855-43ca-a0a9-8559d6d30cda___004ad640991f6aa8a25ffe5dcb2764be.png' alt='Televisores' title='Televisores'/>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/19779664-bdab-4411-a061-f0c584e69887___ed0a84e547551b620fe9b43c3e342bcd.png' alt='Mundo Cocina' title='Mundo Cocina'/>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/a1bb4628-d4db-42c6-9506-97e459d01e51___d59c70c17d9fd6ceb8a5b51799ff401a.png' alt='mercado' title='Mercado'/>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/819edb1a-240c-4e97-9e47-3447f82fb824___8532f82afdb0d84cb721ca35c7e60d96.png' alt='Computadores' title='Computadores'/>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/b6867fdb-c7df-4b81-8806-e572c657517e___3ebc35ecbaa5e7bd05f59027873e05a6.png' alt='Bebés' title='Bebés'/>
                        <GalleryLink src='https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/725374f6-aa83-4a57-8e4a-74d359f2459b___7515ea21c423834f9f31c278e70cb28e.png' alt='Hogar' title='Hogar'/>
                    </Box>
                </Box>
            </Flex>
    <Container>
      <Shelf
        {...cmsHome?.sections[1].props}
        products={vtex.products}
        showArrows
        showDots
        ProductSummary={ProductSummary}
      />
    </Container>
  </>
)}

export default Above
