import { Container, Flex, Box} from '@vtex/store-ui'
import { Image } from 'theme-ui';
import React from 'react'
import type { PageProps } from 'gatsby'
import type { FC } from 'react'
import ProductSummary from 'src/components/product/ProductSummary'
import Carousel from 'src/components/common/Carousel'
import Shelf from 'src/components/product/ProductSlider'
import type { HomePageQueryQuery } from 'src/__generated__/HomePageQuery.graphql'
import CarouselCarulla from '../../components/common/HomeExito/Carousel'

type Props = PageProps<HomePageQueryQuery>

const Above: FC<Props> = ({ data: { cmsHome, vtex } }) => {
  
  const variant = 'homeCarulla'
  return(
  <>
    <Carousel {...cmsHome?.sections[0].props} showArrows showDots />
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
