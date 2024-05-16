import styled, { css } from 'styled-components'
import { motion, HTMLMotionProps } from 'framer-motion'

// Define styles for the pagination container and dots
export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;
`

interface DotProps extends HTMLMotionProps<'div'> {
    isActive: boolean
}

export const Dot = styled(motion.div)<DotProps>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${(props) => (props.isActive ? '#0D52B9' : '#EEEEEE')};
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }

    ${(props) =>
        props.isActive &&
        css`
            transition: background-color 0.3s ease;
        `}
`
