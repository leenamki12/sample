import tw, { styled } from 'twin.macro';

import visual from '@assets/home/home_section01.png';

export const Wrapper = styled.div`
    ${tw`h-[1000px]`}

    background: url(${visual}) no-repeat center center;
`;

export const Button = styled.div`
    ${tw`cursor-pointer rounded `}
    position: relative;
    width: 390px;
    height: 75px;
    overflow: hidden;

    &:after {
        content: 'More Info';
        position: absolute;
        left: 2px;
        top: 2px;
        right: 2px;
        bottom: 2px;
        background: #fff;
        border-radius: 8px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div {
        ${tw`duration-500`}
        position: absolute;
        left: -210px;
        top: -362px;
        width: 800px;
        height: 800px;
        background: #000;
        animation: rotate 10s ease-in-out infinite;
    }

    &:hover div {
        background: conic-gradient(
            #20fffc 20%,
            #fe1c1e 40%,
            #000000 50%,
            #20fffc 70%,
            #fe1c1e 90%,
            #000000 95%,
            #20fffc 100%
        );
    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
