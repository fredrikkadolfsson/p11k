import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { StyledProps } from '@fredrikkadolfsson/ui';
import hereImage from './Floral-Red.jpg';

const Wrapper = styled.div`
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const Text = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  color: ${(props: StyledProps): string => props.theme.palette.secondary.contrastText};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = (): JSX.Element => {
  const { t } = useTranslation('index');

  return (
    <Wrapper>
      <Background src={hereImage} />
      <Text>
        <h1>{t('hero_title', 'Welcome!')}</h1>
        <p>
          {t(
            'hero_description',
            'Nam in risus non erat aliquet egestas. Cras non odio sagittis lectus vehicula tristique. Nunc pellentesque lorem mauris, ut bibendum lacus dapibus at. Donec finibus nulla nec tortor aliquet ultricies. Sed lorem ante, efficitur eu pretium a, efficitur vitae nulla. Sed sed felis a nulla tempus facilisis. Nulla libero eros, iaculis eget lectus nec, rhoncus ullamcorper lacus.',
          )}
        </p>
      </Text>
    </Wrapper>
  );
};

export default React.memo(Hero);
